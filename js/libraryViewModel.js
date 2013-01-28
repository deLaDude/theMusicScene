(function () {
  /**
   * [LibraryViewModel]
   * @param {object} model [song list model]
   */
  tms.viewmodels.LibraryViewModel = function (model) {
    model = model || {};
    var self = this;

    self.songList = {
      listHeaders: ko.observableArray(model.songList.listHeaders || []),
      songs: ko.observableArray(model.songList.songs || [])
    };
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.libraryFactory = function (playlist) {
    var libraryModel = {
      playlist: playlist,
      songList: {
        listHeaders: [
          "Artist",
          "Song",
          "Album",
          "Genre",
          "Length"
        ],
        songs: []
      }
    };

    // create song viewmodels from cached data
    for(var i = playlist.queue.attributes.songids.length; i >= 0; i--) {
      var song = playlist.cache.getItem(playlist.queue.attributes.songids[i]);
      if (!song || !song.metadata) {
        console.log("no meta data found for songId: " + playlist.queue.attributes.songids[i]);
      } else {
        libraryModel.songList.songs.push(new tms.viewmodels.SongViewModel(song)); 
      }
    }   

    return new tms.viewmodels.LibraryViewModel(libraryModel);
  };
})();
