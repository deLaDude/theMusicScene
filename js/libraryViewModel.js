(function () {
  /**
   * [LibraryViewModel]
   * @param {object} model [song list model]
   */
  tms.viewmodels.LibraryViewModel = function (model) {
    var self = this;
    self.model = self.model;
    self.eventBus = model.eventBus;
    self.tableOptions = model.tableOptions;

    function getIndexById (songs, songId) {
      var index;
      $.each(songs, function (i, song) {
        if(song.queueId() === songId) {
          index = parseInt(i, 10);
          return;
        }
      });
      return index;
    }

    /************************* 
     *  Search  *
     *************************/
    var loadMoreTimer = null,
        initTimer = null,
        moreLoading = false,
        pageCount = 1;

    function loadMore () {
      if (pageCount < 4) {
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

    self.searchPlayList = ko.observable(model.searchPlaylist);

    // used to replace TT results when switching back to playlist search
    self.lastViewedPlayList = ko.observable();

    self.searchQuery = ko.observable("");
    self.searchQuery.subscribe(function (query) {
      if (self.listSource() === "turntablesearch") {
        if (initTimer) clearTimeout(initTimer);
        if (loadMoreTimer) clearTimeout(loadMoreTimer);

        initTimer = setTimeout(self.initialSearch, 1000);
      }
    });

    self.initialSearch = function () {
      if (loadMoreTimer) clearTimeout(loadMoreTimer);
      pageCount = 1;

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
    };

    self.handleSearchResults = function (data) {
      console.log(data);
      if (moreLoading && data.query === self.searchQuery()) {
        // add
        self.songList(["paused"]);
        var currentSize = self.searchPlayList().songs().length;
        $.map(data.docs, function(model, i) {
          self.searchPlayList().songs.push(new tms.viewmodels.SongViewModel(model));
        });
      } else {
        // replace
        var songs = $.map(data.docs, function(model, i) {
          return new tms.viewmodels.SongViewModel(model);
        });

        self.searchPlayList().songs(songs);
      }

      self.searchPlayList().name("results for '" + self.searchQuery() + "'");

      // update viewing
      self.viewingPlayList(self.searchPlayList());
      self.songList(self.searchPlayList().songs());
    };

    /************************* 
     *  Playlist Management  *
     *************************/

    // finds index of song in selected songs by queueId
    function findSongIndex (position) {
      var match;

      for (var i in self.selectedSongs()) {
        if (i === position - 1) {
          match = parseInt(i, 10);
          break;
        }
      }
      return match;
    }

    self.playLists = model.playlists;
    self.playListsOpen = ko.observable(false);

    self.activePlayList = ko.observable(model.activeList);
    self.viewingPlayList = ko.observable(model.activeList);

    // track songlist separately for better control over table updates
    self.songList = ko.observableArray(self.viewingPlayList().songs());
    self.listSource = ko.observable("playlistsearch");
    self.selectedSongs = ko.observableArray([]);

    // TODO: use this to recover accidentally deleted songs
    self.recentlyRemoved = ko.observableArray([]);

    // the playlist that will be used while DJing
    self.topOfQueue = ko.computed(function(){
      return self.activePlayList().songs()[0];
    }); 

    // change playlist menu title when songs are selected to draw user
    self.playListMenuTitle = ko.computed(function () {
      if (self.selectedSongs().length > 0) {
        return "Add selected songs to a Playlist";
      } else {
        return "Playlists";
      }
    });

    self.listSource.subscribe(function (source) {
      if (source === "turntablesearch") {
        self.lastViewedPlayList(self.viewingPlayList());
        self.selectedSongs([]);    
        self.viewingPlayList(self.searchPlayList());
        self.songList(self.searchPlayList().songs());  
      } else if (self.lastViewedPlayList) {
        self.selectedSongs([]);
        self.viewingPlayList(self.lastViewedPlayList());
        self.songList(self.viewingPlayList().songs());
      }
    });

    self.toggleOpen = function () {
      self.playListsOpen(self.playListsOpen() ? false : true); 
    };
  
    // add or remove song from selected list
    self.rowSelectionToggle = function (songPosition, add) {
      if (add) {
        self.selectedSongs.push(self.viewingPlayList().songs()[parseInt(songPosition, 10) - 1]);
      } else {
        self.selectedSongs.splice(findSongIndex(songPosition), 1);
      }
    };

    // this is being set by the binding handler. Currently not in the best way.
    self.clearSelectedCallback = function() { };

    // clear array and unhighlight
    self.removeAllSelected = function () {
      self.clearSelectedCallback();
      self.selectedSongs([]);
    };

    // add songs in selected list to playlist and clear selected list
    self.addSelectedSongsToPlaylist = function (playlist) {
      self.addSongsToPlaylist(self.selectedSongs(), playlist, false)
          .done(self.removeAllSelected);
    };

    // TODO: test indexof is returning proper value
    self.removeSelectedSongsFromPlaylist = function () {
      var indices = $.map(self.selectedSongs(), function (song, i) { 
        return self.selectedSongs.indexOf(song); 
      });
      console.log("removing:");
      console.log(indices);
      self.removeSongsFromPlaylist(indices);
    };

    // change the songs in the data table
    self.changeSongList = function(playlist) {
      if (self.viewingPlayList().searchplaylist) {
        self.listSource("playlistsearch");
      }

      self.selectedSongs([]);
      self.viewingPlayList(playlist);
      self.songList(playlist.songs());
    };

    // send to top user action from song list
    self.sendSongToTop = function (songPosition) {
      var song = self.viewingPlayList().songs()[parseInt(songPosition, 10) - 1];
      self.updatePlayList(self.viewingPlayList, { _id: song.queueId() }, 0);
    };

    // send to bottom user action from song list
    self.sendSongToBottom = function (songPosition) {
      var song = self.viewingPlayList().songs()[parseInt(songPosition, 10) - 1];
      self.updatePlayList(self.viewingPlayList, { _id: song.queueId() }, self.viewingPlayList().songs().length-1);  
    };

    // updates a playlist bassed on passed params
    self.updatePlayList = function (playlist, songData, targetPos) {
      var location;

      // indicate to binding handler not to updated table
      self.songList(["paused"]);

      // determine location
      for (var i in playlist().songs()) {
        if (playlist().songs()[i].queueId() === songData._id) {
          location = parseInt(i, 10);
          break;
        }
      }

      // re-order
     self.eventBus.request(
        tms.events.tt.playlist.reorder,
        {
          api: "playlist.reorder",
          playlist_name: playlist().name(),
          index_from: location,
          index_to: targetPos
        },
        tms.events.ext.playlist.reorder
      )
      .done(function(data) {     
        var target = playlist().songs().splice(location, 1);
       
        // move in playlist
        if (targetPos > location) {
          playlist().songs().push(target[0]);
        } else {
          playlist().songs().reverse();
          playlist().songs().push(target[0]);
          playlist().songs().reverse();
        }

        // update song list
        self.songList(playlist().songs());
      });
    };

    self.addSongsToPlaylist = function (songs, playlist, updateViewing) {
      var songIds = $.map(songs, function (song, i) { return { fileid: song.queueId() }; }),
          playlistLength = playlist.songs().length;

      return self.eventBus.request(
        tms.events.tt.playlist.add,
        {
          api: "playlist.add",
          playlist_name: playlist.name(),
          index: playlistLength,
          song_dict: songIds
        },
        tms.events.ext.playlist.add
      ).done(function (data) {
        $.each(songs, function (i, song) {
          // if its a currentSongViewModel we need to convert
          if (song.upvotes) {
            var songModel = song.model.metadata.current_song;
            song = new tms.viewmodels.SongViewModel(songModel);
          } 

          playlist.songs.push(song);
        });

        // if the active list was passed in we need to update viewing as well
        if (updateViewing) {
          self.viewingPlayList(playlist);
          self.songList(playlist.songs());
        }
      });
    };

    // always assumes we want to remove from viewing list
    self.removeSongsFromPlaylist = function (songIndices) {
      self.eventBus.request(
        tms.events.tt.playlist.remove,
        {
          api: "playlist.remove",
          playlist_name: self.viewingPlayList().name(),
          index: songIndices
        },
        tms.events.ext.playlist.remove
      ).done(function (data) {
        // indicate to binding handler not to updated table
        self.songList(["paused"]);

        // remove song from playlist
        for (var i in songIndices) {
          self.viewingPlayList().songs.splice(songIndices[i], 1);  
        }

        // re-draw table
        self.songList(self.viewingPlayList().songs());
      })
      .fail(function (err) { console.log(err); });
    };

    // change the active playlist. also switch to this list in data table
    self.changeActiveList = function (playlist) {      
      self.eventBus.request(
        tms.events.tt.playlist.change,
        {
          api: "playlist.switch",
          playlist_name: playlist.name()
        },
        tms.events.ext.playlist.change
      )
      .done(function(data) {
        if (self.viewingPlayList().searchplaylist) {
          self.listSource("playlistsearch");
        }

        playlist.active(true);
        self.activePlayList().active(false);
        self.activePlayList(playlist);
        if (self.activePlayList().name() !== self.viewingPlayList().name()) {
          self.viewingPlayList(playlist);
          self.songList(playlist.songs());
        }
      });
    };

    // updates the active list after a song is played from it
    self.updateActiveList = function (songData) {
      // reset active playlist 
      //  because if you changed it via TMS it will 
      //  revert to what the TT panels thinks is active. 
      // TODO: find a better solution to this..
      self.eventBus.request(
        tms.events.tt.playlist.change,
        {
            api: "playlist.switch",
            playlist_name: self.activePlayList().name()
        },
        tms.events.ext.playlist.change
      )
      .done(function() {
        // indicate to binding handler not to updated table
        self.songList(["paused"]);

        // send to bottom
        var target = self.activePlayList().songs.splice(0, 1);
        self.activePlayList().songs.push(target[0]);

        // update the song list (table) if viewing active list
        if (self.activePlayList().name() === self.viewingPlayList().name()) {
          self.viewingPlayList(self.activePlayList());
          self.songList(self.activePlayList().songs());
        }
      })
      .fail(function (data) {
        console.log(data);
      });
    };

    /********************** 
     *   Song Previews    *
     *********************/

    var previewSong,
        previewStartedCallback,
        previewEndedCallback;
        playingPreview = false;

    // calls bindingHandler callbacks to start and stop preview visuals
    self.updatePreviewProgress = function (status) {
      var songPosition;
      if (status === "start" && !playingPreview) {
        playingPreview = true;

        songPosition = getIndexById(self.viewingPlayList().songs(), previewSong.queueId()) + 1;
        previewStartedCallback(songPosition);
      } else if (status === "stop") {
        songPosition = getIndexById(self.viewingPlayList().songs(), previewSong.queueId()) + 1;
        previewEndedCallback(songPosition);
      }
    };

    function playPreview (song, startedCallback, endedCallback) {
      previewSong = song;
      previewStartedCallback = startedCallback;
      previewEndedCallback = endedCallback;
      self.eventBus.postMessage(tms.events.tt.playSample, song.queueId());
    }

    self.toggleSongPreview = function (songPosition, startedCallback, endedCallback) {
      var song = self.viewingPlayList().songs()[parseInt(songPosition, 10) - 1];     

      if (!playingPreview) {
        playPreview(song, startedCallback, endedCallback);
      } else if (previewSong.queueId() !== song.queueId()) {
        self.updatePreviewProgress('stop');
        playingPreview = false;
        playPreview(song, startedCallback, endedCallback);
      } else {
        self.eventBus.postMessage(tms.events.tt.pauseSample);     
        playingPreview = false;
      }
    };
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.libraryFactory = function (model) {
    var searchPlaylistModel = {
      name: "Search",
      active: false,
      songIds: [],
      songs: [] 
    };

    model.searchPlaylist = new tms.viewmodels.PlaylistViewModel(searchPlaylistModel, model.eventBus);
    model.searchPlaylist.searchplaylist = true;

    model.playlists = $.map(model.playlistData, function (playlist, i) {
      var list = tms.factories.playlistFactory(playlist, model.eventBus);
      if (list.active()) {
        model.activeList = list;
      } 
      return list;
    });

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

    return library;
  };
}());