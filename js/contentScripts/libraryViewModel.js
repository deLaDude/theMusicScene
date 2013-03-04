(function () {
  
  tms.viewmodels.LibraryViewModel = function (model, options) {
    var self = this;     
    self.eventBus = model.eventBus;

    // <turntable search>
      var loadMoreTimer = null,
          initTimer = null,
          moreLoading = false,
          pageCount = 1,
          lastViewedPlaylist,
          searchPlaylist = model.searchPlaylist;

      // loads 75 results for a query
      function loadMore () {
        if (pageCount < 3) {
          pageCount++;
          moreLoading = true;

          self.eventBus.request(
            tms.events.tt.api.search,
            {
              api: "file.search",
              query: self.searchQuery(),
              page: pageCount
            },
            tms.events.ext.api.search
          );

          setTimeout(loadMore, 1000);
        } else {
          moreLoading = false;
          loadMoreTimer = null;
        }
      }

      // initial search request for a query
      function initialSearch () {
        self.clearAllSelected();

        if (loadMoreTimer) clearTimeout(loadMoreTimer);
        pageCount = 0;

        if (moreLoading) {
          moreLoading = false;
          loadMoreTimer = null;
        } else {
          loadMoreTimer = setTimeout(loadMore, 1000);
        }

        self.eventBus.request(
          tms.events.tt.api.search,
          {
            api: "file.search",
            query: self.searchQuery(),
            page: pageCount
          },
          tms.events.ext.api.search
        );
      }

      self.searchQuery = ko.observable("");
      self.listSource = ko.observable("playlistsearch");
      
      self.searchQuery.subscribe(function (query) {
        if (self.listSource() === "turntablesearch") {
          if (initTimer) clearTimeout(initTimer);
          if (loadMoreTimer) clearTimeout(loadMoreTimer);

          initTimer = setTimeout(initialSearch, 1000);
        }
      });

      self.listSource.subscribe(function (source) {
        if (source === "turntablesearch") {
          // cache currently viewing and update
          lastViewedPlaylist = self.viewingPlaylist();
          self.viewingPlaylist(searchPlaylist);
          self.songList([]); 

          // if we have a query saved, load it up
          if (self.searchQuery().length > 0) {
            initialSearch(); 
          }
        } else {
          changeviewingPlaylist(lastViewedPlaylist, lastViewedPlaylist.active());
        }
      });
      
      self.handleSearchResults = function (data) {
        if (self.listSource() === "turntablesearch") {
          var songList = [];

          if (moreLoading && data.query === self.searchQuery()) {
            // add
            songList = self.songList();
            self.songList(["paused"]);
            $.map(data.docs, function(model, i) {
              songList.push(new tms.viewmodels.SongViewModel(model));
            });
          } else {
            // replace
            songList = $.map(data.docs, function(model, i) {
              return new tms.viewmodels.SongViewModel(model);
            });
          }

          // update viewing
          self.viewingPlaylist().name("results for '" + self.searchQuery() + "'");
          self.songList(songList);
        }
      };
    // </turntable search>

    // <playlist management>
      // <private members>
        var activeListLength;
        
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

          // if we were searching turntable, toggle back to playlistsearch
          if (self.viewingPlaylist().forSearch) {
            self.listSource("playlistsearch");
          }

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
              // update playlist array
              $.each(self.playlists(), function (i, list) {
                if (list.name() === playlist.name()) {
                  self.playlists()[i].active(true);
                } else {
                  self.playlists()[i].active(false);
                }
              });

              self.activePlaylist(playlist);
              self.topOfActive(songs[0]);
              resetActiveList();
              activeListLength = songs.length;
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
              var songList = self.songList();
              self.songList(["paused"]);

              // move in playlist and songlist
              var song = songList.splice(currentPos, 1);
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
        function addSongsToPlaylist (songs, playlistName, updateViewing, isSnag) {
          var songIds = $.map(songs, function (song, i) { return { fileid: song.fileId() }; }),
              targetPos = 0;

          // if we're snagging, add to bottom (curretly assumes we add to active list)
          if (isSnag) {
            targetPos = activeListLength;
            activeListLength = activeListLength + songIds.length;
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
        self.playlists = ko.observableArray(model.playlists);
        self.activePlaylist = ko.observable({ name: function(){} });
        self.topOfActive = ko.observable();

        self.viewingPlaylist = ko.observable({ name: function(){} });
        self.songList = ko.observableArray([]);
        self.selectedSongs = ko.observableArray([]);
        self.tableOptions = model.tableOptions;

        // TODO: use this to recover accidentally deleted songs
        self.recentlyRemoved = ko.observableArray([]);
        
        // don't let trash pile get larger than 10 songs
        self.recentlyRemoved.subscribe(function(){
          var trashSize = self.recentlyRemoved().length;
          if(trashSize > 10) {
            var reduceBy = trashSize - 10;
            self.recentlyRemoved.slice(0, reduceBy);
          }
        });

        self.playlistsOpen = ko.observable(false);

        // change playlist menu title when songs are selected to draw user
        self.playlistMenuTitle = ko.computed(function () {
          var title;
          if (self.selectedSongs().length > 0) {
            title = "Add selected songs to a Playlist";
          } else if (self.playlistsOpen()) { 
            title = "Hide Playlists";
          } else {
            title = "View Playlists";
          }
          return title;
        });

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

        // clear array and unhighlight songs
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

        // remove the selected songs from the viewing playlist and clear selected list
        self.removeSelectedSongsFromPlaylist = function () {
          var indices = $.map(self.selectedSongs(), function (selectedSong, i) { 
            var position;

            // get indicies of selected songs
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
          // if we're playing a preview we'll want to turn it off before removing
          if (playingPreview) {
            $.each(songIndices, function (i, songPos) {
              // add to recently removed for easy recovery
              self.recentlyRemoved.push(self.songList()[songPos]);

              if (self.songList()[songPos].fileId() === previewSong.fileId()){
                self.eventBus.postMessage(tms.events.tt.pauseSample);     
                playingPreview = false;
                return;
              }
            });            
          }

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

            if (self.viewingPlaylist().active()) {
              activeListLength = songList.length;
            }

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
          changeviewingPlaylist(playlist, false);
        };

        // user event tp change the active playlist
        self.changeActive = function (playlist) {
          changeviewingPlaylist(playlist, true);
        };

        // update active list and top of queue when user plays a song
        self.updateActive = function () {
          // update the song list (table) if viewing active list
          if (self.activePlaylist().name() === self.viewingPlaylist().name()) {
            var songList = self.songList();
            self.songList(["paused"]);

            // send to bottom
            var target = songList.splice(0, 1);
            songList.push(target[0]);
            self.songList(songList);
            self.topOfActive(songList[0]);
          } else {
            // get top of queue from TT
            var playlistName = self.activePlaylist().name(),
                returnEvent = tms.events.ext.api.playlist + playlistName.split(' ').join('_'),
                songId;
            
            self.eventBus.request(
              tms.events.tt.api.playlist,
              {
                api: "playlist.all",
                playlist_name: playlistName,
                minimal: true
              },
              returnEvent
            )
            .then(function (listData) {
              songId = listData.list[0]._id;

              return self.eventBus.request(
                tms.events.tt.api.songdata,
                {
                  api: "playlist.get_metadata",
                  playlist_name: playlistName,
                  files: [songId]
                },
                tms.events.ext.api.songdata
              );
            })
            .done(function(songData){
              self.topOfActive(new tms.viewmodels.SongViewModel(songData.files[songId]));
            });
          }
        };
      // </public members>
    // </playlist management>         

    // <song previews>    
      var previewSong,
          previewSongPosition,
          previewStartedCallback,
          previewEndedCallback,
          playingPreview = false;

      // initiates a song preview
      function playPreview (song, startedCallback, endedCallback) {
        previewSong = song;
        previewStartedCallback = startedCallback;
        previewEndedCallback = endedCallback;
        self.eventBus.postMessage(tms.events.tt.playSample, song.fileId());
      }

      // calls bindingHandler callbacks to start and stop preview visuals
      self.updatePreviewProgress = function (status) {
        if (status === "start" && !playingPreview) {
          playingPreview = true;
          previewStartedCallback(previewSongPosition);
        } else if (status === "stop") {
          previewEndedCallback(previewSongPosition);
        }
      };    

      // call from binding handler events to start/stop song previews
      self.toggleSongPreview = function (songPosition, startedCallback, endedCallback) {
        var song = self.songList()[songPosition];     

        if (!playingPreview) {
          previewSongPosition = songPosition;
          playPreview(song, startedCallback, endedCallback);
        } else if (previewSong.fileId() !== song.fileId()) {
          self.updatePreviewProgress('stop');
          previewSongPosition = songPosition;
          playingPreview = false;
          playPreview(song, startedCallback, endedCallback);
        } else {
          self.eventBus.postMessage(tms.events.tt.pauseSample);     
          playingPreview = false;
        }
      };
    // </song previews>
  };

  tms.factories.libraryFactory = function (model) {
    var activePlaylist;

    model.playlists = $.map(model.playlistData, function (playlist, i) {
      var list = tms.factories.playlistFactory(playlist);
      if (list.active()) {
        activePlaylist = list;
      } 
      return list;
    });

    model.searchPlaylist = tms.factories.playlistFactory({ name: "Turntable Search", active: false });
    model.searchPlaylist.forSearch = true;

    var library = new tms.viewmodels.LibraryViewModel(model),
        subscriptions = [
          {
            name: tms.events.ext.sampleProgress,
            callback: library.updatePreviewProgress
          },
          {
            name: tms.events.ext.api.search,
            callback: library.handleSearchResults
          }
        ];

    for (var x in subscriptions) {
      library.eventBus.subscriptions.push(subscriptions[x]);
    }

    // set active playlist and load songs
    library.changeActive(activePlaylist);

    return library;
  };
})();