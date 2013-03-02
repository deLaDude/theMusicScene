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
      function changeviewingPlaylist (playlist, makeActive) {
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
      function reorderPlaylist (playlist, songId, targetPos) {
        var currentPos = playlist.songIds.indexOf(songId),
            songList = self.songList();

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

            var id = playlist.songIds.splice(currentPos, 1),
                song = songList.splice(currentPos, 1);


            // move in playlist and songlist
            if (targetPos > currentPos) {
              playlist.songIds.push(id[0]);
              songList.push(song[0]);
            } else {
              playlist.songIds.reverse();
              playlist.songIds.push(id[0]);
              playlist.songIds.reverse();

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

      function addSongsToPlaylist (songs, playlist, updateViewing) {

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
        var songPosition = self.viewingPlaylist().songIds.indexOf(previewSong.fileId()) + 1;

        if (status === "start" && !playingPreview) {
          playingPreview = true;
          previewStartedCallback(songPosition);
        } else if (status === "stop") {
          previewEndedCallback(songPosition);
        }
      };    

      // call from binding handler events to start/stop song previews
      self.toggleSongPreview = function (songPosition, startedCallback, endedCallback) {
        var song = self.songList()[parseInt(songPosition, 10) - 1];     

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

      // add songs in selected list to playlist and clear selected list
      self.addSelectedSongsToPlaylist = function (playlist) {
        // self.addSongsToPlaylist(self.selectedSongs(), playlist, false)
        //     .done(self.removeAllSelected);
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

          // remove song from playlist and songlist
          for (var i in songIndices) {
            songList.splice(songIndices[i], 1); 
            self.viewingPlaylist().songIds.splice(songIndices[i], 1); 
          }

          // re-draw table
          self.songList(songList);
        })
        .fail(function (err) { console.log(err); });
      };

      // send to top user action from song list
      self.sendSongToTop = function (songPosition) {
        var song = self.songList()[parseInt(songPosition, 10) - 1];
        reorderPlaylist(self.viewingPlaylist(), song.fileId(), 0);
      };

      // send to bottom user action from song list
      self.sendSongToBottom = function (songPosition) {
        var song = self.songList()[parseInt(songPosition, 10) - 1];
        reorderPlaylist(self.viewingPlaylist(), song.fileId() , self.songList().length-1);  
      };

      // toggle for playlist menu
      self.toggleOpen = function () {
        self.playlistsOpen(self.playlistsOpen() ? false : true); 
      };

      // user event to change the viewing playlist
      self.changeViewing = function (playlist) {
        changeviewingPlaylist(playlist, false);
      };

      // user event tp change the active playlist
      self.changeActive = function (playlist) {
        changeviewingPlaylist(playlist, true);
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