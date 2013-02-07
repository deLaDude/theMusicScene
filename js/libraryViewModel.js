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

    // find song in viewingPlaylist by its posistion
    self.findSongByPosition = function (position) {
      var songs = self.viewingPlayList().songs(),
          match;

      for (var i in songs) {
        if (songs[i].queuePosition() == position) {
          match = songs[i];
          break;
        }
      }

      return match;
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

    self.viewingPlayList = ko.observable(model.activeList);
    // songsList converted to dataTables-consumable format
    self.tableData = ko.computed(function (){
      var data = [],
          songs = self.viewingPlayList().songs();

      for (var i in songs) {
        data.push([
          songs[i].queuePosition(),
          songs[i].artist(),
          songs[i].song(),
          songs[i].album(),
          songs[i].genre(),
          songs[i].formatedLength()
        ]);
      }

      return data;
    });

    // change the songs in the data table
    self.changeSongList = function(playlist) {
      self.viewingPlayList(playlist);
    };

    // change the active playlist. also switch to this list in data table
    self.changeActiveList = function (playlist) {      
      tms.utils.socket({
          api: "playlist.switch",
          playlist_name: playlist.name()
      })
      .done(function(data) {
          playlist.active(true);
          self.activePlayList().active(false);
          self.activePlayList(playlist);
          self.viewingPlayList(playlist);
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
        }
      })
      .fail(function (data) {
        console.log(data);
      });
    };

    // send to top user action from song list
    self.sendSongToTop = function (songPosition) {
      var song = self.findSongByPosition(songPosition);
      self.updatePlayList(self.viewingPlayList, { _id: song.queueId() }, 0);
    };

    // send to bottom user action from song list
    self.sendSongToBottom = function (songPosition) {
      var song = self.findSongByPosition(songPosition);
      self.updatePlayList(self.viewingPlayList, { _id: song.queueId() }, self.viewingPlayList().songs().length-1);  
    };

    // updates a playlist bassed on passed params
    self.updatePlayList = function (playlist, songData, targetPos) {
      var location;

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
          playlist().songs.push(target[0]);
        } else {
          playlist().songs.reverse();
          playlist().songs.push(target[0]);
          playlist().songs.reverse();
        }

        // update queue positions 
        for (var i in playlist().songs()) {
          playlist().songs()[i].queuePosition(parseInt(i, 10) + 1);
        }    
      })
      .fail(function (err) { console.log(err); });
    };

    self.addSongsToPlaylist = function (songs, playlist, updateViewing) {
      var songIds = $.map(songs, function (song, i) { return { fileid: song.queueId() }; }),
          playlistLength = playlist().songs().length;

      tms.utils.socket({
        api: "playlist.add",
        playlist_name: playlist().name(),
        index: playlistLength,
        song_dict: songIds
      }).done(function (data) {
        console.log(data);

        // update queue positions of new songs
        $.each(songs, function (i, song) {
          var qPos = playlistLength + (1 + parseInt(i, 10));

          // if its a currentSongViewModel we need to convert
          if (song.upvotes()) {
            var songModel = song.model.metadata.current_song;
            songModel.queuePosition = qPos;
            song = new tms.viewmodels.SongViewModel(songModel);
          } else {
            song.queuePosition(qPos);
          }

          playlist().songs.push(song);
        });

        // if the active list was passed in we need to update viewing as well
        if (updateViewing) {
          self.viewingPlayList(playlist());
        }
      })
      .fail(function (err) { console.log(err); });
    };

    /********************** 
     *   Song Previews    *
     *********************/

    var previewSong;
    var previewStartedCallback;
    var previewEndedCallback;

    // calls bindingHandler callbacks to start and stop preview visuals
    function updatePreviewProgress (data) {
      if (data === "progress" && !self.playingPreview()) {
        self.playingPreview(true);
        previewStartedCallback(previewSong.queuePosition());
      } else if (data === "stop") {
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
      var song = self.findSongByPosition(songPosition);     

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
