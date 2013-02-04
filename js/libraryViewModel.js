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

    // what is displayed in the data table
    self.songListTitle = ko.observable(model.activeList.name());
    self.songList = ko.observableArray(model.activeList.songs());

    // songsList converted to dataTables-consumable format
    self.tableData = ko.computed(function (){
      var data = [],
          songs = self.songList();

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

    self.activePlayList().songs.subscribe(function(){
      console.log("list change");
    });

    // change the songs in the data table
    self.changeSongList = function(playlist) {
      self.songList(playlist.songs());
      self.songListTitle(playlist.name());
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
          self.songList(playlist.songs());
      });
    };

    self.updateActiveList = function (songData) {
      // reset active playlist
      // TODO: find a better solution here
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

        if (self.activePlayList().name() === self.songListTitle()) {
          self.songsList(self.activePlayList().songs());
        }

        // dont need to update because its dont automatically
        // self.updatePlayList(self.activePlayList, songData, self.activePlayList().songs().length-1);
      })
      .fail(function (data) {
        console.log(data);
      });
    };

    // updates a playlist bassed on passed params
    self.updatePlayList = function (playlist, songData, targetPos) {
      var location,
          songs = playlist().songs();

      // determine location
      for (var i in songs) {
        if (songs[i].queueId() === songData._id) {
          console.log(songs[i]);
          location = parseInt(i, 10);
          break;
        }
      }

      console.log(location + " : " + targetPos);

      // re-order
      tms.utils.socket({
        api: "playlist.reorder",
        playlist_name: playlist().name(),
        index_from: location,
        index_to: targetPos
      })
      .done(function(data) {
        console.log(data);
        // move in playlist
        var target = playlist.splice(location, 1);
        playlist.push(target);    
      })
      .fail(function (err) { console.log(err); });
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
