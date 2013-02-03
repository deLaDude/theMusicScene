(function () {
  /**
   * [LibraryViewModel]
   * @param {object} model [song list model]
   */
  tms.viewmodels.LibraryViewModel = function (model) {
    model = model || {};
    var self = this;

    self.tableOptions = model.tableOptions;

    self.playLists = model.playlists;

    self.playListsOpen = ko.observable(false);
    self.toggleOpen = function () {
      self.playListsOpen(self.playListsOpen() ? false : true); 
    };

    // what is displayed in the data table
    self.songListTitle = ko.observable(model.activeList.name());
    self.songList = ko.observableArray(model.activeList.songs());

    // the playlist that will be used while DJing
    self.activePlayList = ko.observable(model.activeList);
    self.topOfQueue = ko.computed(function(){
      var active = self.activePlayList(),
          top;
 
       for (var i in active.songs()) {
        if (active.songs()[i].queuePosition() === 1) {
          top = active.songs()[i];
          break;
        }
      }
      return top;
    }); 

    // change the songs in the data table
    self.changeSongList = function(playlist) {
      self.songList(playlist.songs());
      self.songListTitle(playlist.name());
    };

    // change the active playlist. also switch to this list in data table
    self.changeActiveList = function (playlist) {
       // TODO: make TT call first 

      self.activePlayList(playlist);
      self.songList(playlist.songs());
    };

    // TODO: 
    self.updatePlayList = function () {
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
