(function () {
  /**
   * [LibraryViewModel]
   * @param {object} model [song list model]
   */
  tms.viewmodels.LibraryViewModel = function (model) {
    model = model || {};
    var self = this;

    self.model = self.model;
    self.ttPlaylist = model.ttPlaylist;
    self.tableOptions = model.tableOptions;

    self.playLists = model.playlists;
    self.playListsOpen = ko.observable(false);
    self.toggleOpen = function () {
      self.playListsOpen(self.playListsOpen() ? false : true); 
    };

    // the playlist that will be used while DJing
    self.activePlayList = ko.observable(model.activeList);
    self.topOfQueue = ko.computed(function(){
      var activeSongs = self.activePlayList().songs(),
          top;
 
       for (var i in activeSongs) {
        if (activeSongs[i].queuePosition() === 1) {
          top = activeSongs[i];
          break;
        }
      }
      return top;
    }); 

    /************************* 
     *  Search  *
     *************************/    
    var loadMoreTimer = null,
        initTimer = null,
        moreLoading = false,
        pageCount = 1;
    
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
      
      tms.utils.socket({
        api: "file.search",
        query: self.searchQuery(),
        page: pageCount
      });
    };

    function loadMore () {
      if (pageCount < 4) {
        pageCount++;
        moreLoading = true;
               
        tms.utils.socket({
          api: "file.search",
          query: self.searchQuery(),
          page: pageCount
        });
        
        setTimeout(loadMore, 1000);
      } else {
        moreLoading = false;
        loadMoreTimer = null;
      }
    }

    self.handleSearchResults = function (data) {
      console.log(data);
      if (moreLoading && data.query === self.searchQuery()) {
        // add
        self.songList(["paused"]);
        var currentSize = self.searchPlayList().songs().length;
        $.map(data.docs, function(model, i) {
          model.queuePosition = currentSize + parseInt(i, 10) + 1;
          self.searchPlayList().songs.push(new tms.viewmodels.SongViewModel(model));
        });
      } else {
        // replace
        var songs = $.map(data.docs, function(model, i) {
          model.queuePosition = parseInt(i, 10) + 1;
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

    self.viewingPlayList = ko.observable(model.activeList);

    // track songlist separately for better control over table updates
    self.songList = ko.observableArray(self.viewingPlayList().songs());
  
    self.listSource = ko.observable("playlistsearch");
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

    self.selectedSongs = ko.observableArray([]);

    // finds index of song in selected songs by queueId
    function findSongIndex (position) {
      var match;

      for (var i in self.selectedSongs()) {
        if (self.selectedSongs()[i].queuePosition() === self.viewingPlayList().songs()[position - 1].queuePosition()) {
          match = parseInt(i, 10);
          break;
        }
      }
      return match;
    }

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

    self.removeSelectedSongsFromPlaylist = function () {
      var indices = $.map(self.selectedSongs(), function (song, i) { 
        var index = parseInt(song.queuePosition(), 10)-1;
        return index; 
      });
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
      tms.utils.socket({
        api: "playlist.reorder",
        playlist_name: playlist().name(),
        index_from: location,
        index_to: targetPos
      })
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

        // update queue positions 
        for (var i in playlist().songs()) {
          playlist().songs()[i].queuePosition(parseInt(i, 10) + 1);
        }    

        // update song list
        self.songList(playlist().songs());
      })
      .fail(function (err) { console.log(err); });
    };

    self.addSongsToPlaylist = function (songs, playlist, updateViewing) {
      var songIds = $.map(songs, function (song, i) { return { fileid: song.queueId() }; }),
          playlistLength = playlist.songs().length;

      return tms.utils.socket({
        api: "playlist.add",
        playlist_name: playlist.name(),
        index: playlistLength,
        song_dict: songIds
      }).done(function (data) {
        // update queue positions of new songs
        var qPos;
        $.each(songs, function (i, song) {
          qPos = playlistLength + (1 + parseInt(i, 10));
          // if its a currentSongViewModel we need to convert
          if (song.upvotes) {
            var songModel = song.model.metadata.current_song;
            songModel.queuePosition = qPos;
            song = new tms.viewmodels.SongViewModel(songModel);
          } else {
            song.queuePosition(qPos);
          }

          playlist.songs.push(song);
        });

        // if the active list was passed in we need to update viewing as well
        if (updateViewing) {
          self.viewingPlayList(playlist);
          self.songList(playlist.songs());
        }
      })
      .fail(function (err) { console.log(err); });
    };

    // always assumes we want to remove from viewing list
    self.removeSongsFromPlaylist = function (songIndices) {
      // if its a single id we need to make it an array
      if (!$.isArray(songIndices)) {
        songIndices = [songIndices];
      }
      
      tms.utils.socket({
        api: "playlist.remove",
        playlist_name: self.viewingPlayList().name(),
        index: songIndices
      }).done(function (data) {
        // indicate to binding handler not to updated table
        self.songList(["paused"]);

        // remove song from playlist
        for (var i in songIndices) {
          self.viewingPlayList().songs.splice(songIndices[i], 1);  
        }

        // update queue positions 
        for (var x in self.viewingPlayList().songs()) {
          self.viewingPlayList().songs()[x].queuePosition(parseInt(x, 10) + 1);
        }    

        // re-draw table
        self.songList(self.viewingPlayList().songs());
      })
      .fail(function (err) { console.log(err); });
    };

    // TODO: use this to recover accidentally deleted songs
    self.recentlyRemoved = ko.observableArray([]);


    /********************** 
     *    Active List     *
     *********************/

    // change the active playlist. also switch to this list in data table
    self.changeActiveList = function (playlist) {      
      tms.utils.socket({
          api: "playlist.switch",
          playlist_name: playlist.name()
      })
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
      tms.utils.socket({
          api: "playlist.switch",
          playlist_name: self.activePlayList().name()
      })
      .done(function() {
        // indicate to binding handler not to updated table
        self.songList(["paused"]);

        // send to bottom
        var target = self.activePlayList().songs.splice(0, 1);
        self.activePlayList().songs.push(target[0]);

        // update queue position 
        for (var i in self.activePlayList().songs()) {
          self.activePlayList().songs()[i].queuePosition(parseInt(i, 10) + 1);
        }

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

    var previewSong;
    var previewStartedCallback;
    var previewEndedCallback;

    // calls bindingHandler callbacks to start and stop preview visuals
    function updatePreviewProgress (status, progress) {
      if (status === "progress" && !self.playingPreview()) {
        self.playingPreview(true);
        previewStartedCallback(previewSong.queuePosition());
      } else if (status === "stop") {
        previewEndedCallback(previewSong.queuePosition());
      }
    }

    function playPreview (song, startedCallback, endedCallback) {
      previewSong = song;
      previewStartedCallback = startedCallback;
      previewEndedCallback = endedCallback;
      turntablePlayer.samplePlay(song.queueId(), updatePreviewProgress);
    }

    self.playingPreview = ko.observable(false);
    self.toggleSongPreview = function (songPosition, startedCallback, endedCallback) {
      var song = self.viewingPlayList().songs()[parseInt(songPosition, 10) - 1];     

      if (!self.playingPreview()) {
        playPreview(song, startedCallback, endedCallback);
      } else {
        turntablePlayer.sampleStop();
        self.playingPreview(false);
        
        // if stopping preview to start another
        if (previewSong.queueId() !== song.queueId()) {
          playPreview(song, startedCallback, endedCallback);
        }
      }
    };
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.libraryFactory = function (model) {
    model.playlists = [];

    var searchPlaylistModel = {
      name: "Search",
      active: false,
      songIds: [],
      songs: []
    };
    model.searchPlaylist = new tms.viewmodels.PlaylistViewModel(searchPlaylistModel);
    model.searchPlaylist.searchplaylist = true;

    // create playlist for each entry
    for (var i in model.playlistData) {    
      var playlist = tms.factories.playlistFactory(model.playlistData[i], model.ttPlaylist);
      model.playlists.push(playlist);

      if (playlist.active()) {
        model.activeList = playlist;
      }
    }

    return new tms.viewmodels.LibraryViewModel(model);
  };
}());
