(function () {
  
  tms.viewmodels.LibraryViewModel = function (model, options) {
    var self = this;     

    // <private members>
      var previewSong,
          previewStartedCallback,
          previewEndedCallback;
          playingPreview = false;

      // initiates a song preview
      function playPreview (song, startedCallback, endedCallback) {
        previewSong = song;
        previewStartedCallback = startedCallback;
        previewEndedCallback = endedCallback;
        self.eventBus.postMessage(tms.events.tt.playSample, song.fileId());
      }

      // Requesting a playlist makes it active; this is TT's default behavior 
      //  So sometime we need to reset the active playlist to keep TMS and TT in sync.
      function resetActiveList () {
        self.eventBus.request(
          tms.events.tt.playlist.change,
          {
            api: "playlist.switch",
            playlist_name: self.activePlaylist().name()
          },
          tms.events.ext.playlist.change
        );
      }

      // changes viewing playlist and can also make it the activeplaylist 
      function changeViewingPlaylist (playlist, makeActive) {
        var returnEvent = tms.events.ext.api.playlist + playlist.name().split(' ').join('_');

        // get the song data
        self.eventBus.request(
          tms.events.tt.api.playlist,
          {
            api: "playlist.all",
            playlist_name: playlist.name(),
            minimal: false
          },
          returnEvent
        )       
        .done(function(data){
          // create song viewmodels from TT data
          var songs = $.map(data.list, function (songModel) {
            return new tms.viewmodels.SongViewModel(songModel);
          });

          // update viewing 
          self.viewingPlaylist(playlist);
          self.songList(songs);
          self.clearAllSelected();

          if (makeActive) {
            if (self.activePlaylist().active) {
              self.activePlaylist().active(false);
            }

            playlist.active(true);
            self.activePlaylist(playlist);
            self.topOfActive(songs[0]);
            resetActiveList();
          } else {
            resetActiveList();
          }         
        })
        .fail(function(err){
          console.log("Failed to change playlists", err);
        }); 
      }

      // reorder songs in the viewing playlist
      function reorderPlaylist (playlist, currentPos, targetPos) {
        var songList = self.songList();

        // re-order
        self.eventBus.request(
          tms.events.tt.playlist.reorder,
          {
            api: "playlist.reorder",
            playlist_name: playlist.name(),
            index_from: currentPos,
            index_to: targetPos
          },
          tms.events.ext.playlist.reorder
          )
          .done(function(data) {   
            self.songList(["paused"]);

            var song = songList.splice(currentPos, 1);


            // move in playlist and songlist
            if (targetPos > currentPos) {
              songList.push(song[0]);
            } else {
              songList.reverse();
              songList.push(song[0]);
              songList.reverse();
            
              if (playlist.active()) {
                self.topOfActive(song[0]);
              }
            }
            
            self.songList(songList);
          });
      }

      // adds the passed in songs to the passed in playlist. updates songList if updateViewing is true.
      function addSongsToPlaylist (songs, playlistName, updateViewing, toBottom) {
        var songIds = $.map(songs, function (song, i) { return { fileid: song.fileId() }; }),
            targetPos = 0;

        if (updateViewing && toBottom) {
          targetPos = self.songList().length;
        }

        return self.eventBus.request(
          tms.events.tt.playlist.add,
          {
            api: "playlist.add",
            playlist_name: playlistName,
            index: targetPos,
            song_dict: songIds
          },
          tms.events.ext.playlist.add
        )
        .done(function (data) {
          if (updateViewing) {
            var songList = self.songList();  
            self.songList(["paused"]);

            $.each(songs, function (i, song) {
              // if its a currentSongViewModel we need to convert
              if (song.upvotes) {
                var songModel = song.model.metadata.current_song;
                song = new tms.viewmodels.SongViewModel(songModel);
              } 
              songList.push(song);
            });

            self.songList(songList);
          }
        });
      }
    // </private members>

    // <public members>
      self.eventBus = model.eventBus;
      self.playlists = ko.observableArray(model.playlists);
      self.activePlaylist = ko.observable({ name: function(){} });
      self.topOfActive = ko.observable();

      self.viewingPlaylist = ko.observable({ name: function(){} });
      self.songList = ko.observableArray([]);
      self.selectedSongs = ko.observableArray([]);
      self.tableOptions = model.tableOptions;

      self.playlistsOpen = ko.observable(false);

      // change playlist menu title when songs are selected to draw user
      self.playlistMenuTitle = ko.observable("Playlists");
      // self.playlistMenuTitle = ko.computed(function () {
      //   if (self.selectedSongs().length > 0) {
      //     return "Add selected songs to a Playlist";
      //   } else {
      //     return "Playlists";
      //   }
      // });

      // calls bindingHandler callbacks to start and stop preview visuals
      self.updatePreviewProgress = function (status) {
        var songPosition; 

        $.each(self.songList(), function (i, song) {
            if (song.fileId() === previewSong.fileId()) {
              songPosition = i;
              return;
            }
        });

        if (status === "start" && !playingPreview) {
          playingPreview = true;
          previewStartedCallback(songPosition);
        } else if (status === "stop") {
          previewEndedCallback(songPosition);
        }
      };    

      // call from binding handler events to start/stop song previews
      self.toggleSongPreview = function (songPosition, startedCallback, endedCallback) {
        var song = self.songList()[songPosition];     

        if (!playingPreview) {
          playPreview(song, startedCallback, endedCallback);
        } else if (previewSong.fileId() !== song.fileId()) {
          self.updatePreviewProgress('stop');
          playingPreview = false;
          playPreview(song, startedCallback, endedCallback);
        } else {
          self.eventBus.postMessage(tms.events.tt.pauseSample);     
          playingPreview = false;
        }
      };

      // add or remove song from selected list
      self.rowSelectionToggle = function (songPosition, add) {
        if (add) {
          self.selectedSongs.push(self.songList()[songPosition]);
        } else {
          var songId = self.songList()[songPosition].fileId();         
          
          for (var i in self.selectedSongs()) {
            if (self.selectedSongs()[i].fileId() === songId) {
              self.selectedSongs.splice(i, 1);    
            }  
          }          
        }
      };

      // this is being set by the binding handler. Currently not in the best way.
      self.clearSelectedCallback = function() { };

      // clear array and unhighlight
      self.clearAllSelected = function () {
        self.selectedSongs([]);
        self.clearSelectedCallback();
      };

      self.addSnagToPlaylist = function (song) {
        var updateViewing = false;
        if (self.activePlaylist().name() === self.viewingPlaylist().name()) {
          updateViewing = true;
        }
        
        addSongsToPlaylist([song], self.activePlaylist().name(), updateViewing, true);
      };

      // add songs in selected list to playlist and clear selected list
      self.addSelectedSongsToPlaylist = function (playlist) {
        addSongsToPlaylist(self.selectedSongs(), playlist.name(), false, false)
            .done(self.clearAllSelected);
      };

      // remove the selected songs from the viewing playlist
      self.removeSelectedSongsFromPlaylist = function () {
        var indices = $.map(self.selectedSongs(), function (selectedSong, i) { 
          var position;

          $.each(self.songList(), function (i, song) {
            if (song.fileId() === selectedSong.fileId()) {
              position = i;
              return;
            }
          });

          return position;
        });

        self.removeSongsFromPlaylist(indices);
        self.clearAllSelected();
      };

      // always assumes we want to remove from viewing list
      self.removeSongsFromPlaylist = function (songIndices) {
        self.eventBus.request(
          tms.events.tt.playlist.remove,
          {
            api: "playlist.remove",
            playlist_name: self.viewingPlaylist().name(),
            index: songIndices
          },
          tms.events.ext.playlist.remove
        )
        .done(function (data) {
          var songList = self.songList();
          self.songList(["paused"]);

          // sort indiceies before slicing and loop in reverse order to avoid errors 
          songIndices.sort(function(a,b){ return a - b; });
          for (var i = songIndices.length - 1; i >= 0; i--) {
            songList.splice(songIndices[i], 1);  
          }

          // re-draw table
          self.songList(songList);
        })
        .fail(function (err) { console.log(err); });
      };

      // send to top user action from song list
      self.sendSongToTop = function (songPosition) {
        reorderPlaylist(self.viewingPlaylist(), songPosition, 0);
      };

      // send to bottom user action from song list
      self.sendSongToBottom = function (songPosition) {
        reorderPlaylist(self.viewingPlaylist(), songPosition, self.songList().length-1);  
      };

      // toggle for playlist menu
      self.toggleOpen = function () {
        self.playlistsOpen(self.playlistsOpen() ? false : true); 
      };

      // user event to change the viewing playlist
      self.changeViewing = function (playlist) {
        changeViewingPlaylist(playlist, false);
      };

      // user event tp change the active playlist
      self.changeActive = function (playlist) {
        changeViewingPlaylist(playlist, true);
      };
    // </public members>
  };

  tms.factories.libraryFactory = function (model) {
    var activePlaylist;

    model.playlists = $.map(model.playlistData, function (playlist, i) {
      var list = tms.factories.playlistFactory(playlist, model.eventBus);
      if (list.active()) {
        activePlaylist = list;
      } 
      return list;
    });

    var library = new tms.viewmodels.LibraryViewModel(model),
        subscriptions = [
          {
            name: tms.events.ext.sampleProgress,
            callback: library.updatePreviewProgress
          }
        ];
        // {
        //   name: tms.events.ext.api.search,
        //   callback: library.handleSearchResults
        // }

    for (var x in subscriptions) {
      library.eventBus.subscriptions.push(subscriptions[x]);
    }

    // set active playlist and load songs
    library.changeActive(activePlaylist);

    return library;
  };
})();