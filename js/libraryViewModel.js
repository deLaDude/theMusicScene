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
  tms.factories.libraryFactory = function (model) {
    model.songList = {
      listHeaders: [
        "Artist",
        "Song",
        "Album",
        "Genre",
        "Length"
      ],
      songs: []
    };

    // create song viewmodels from cached data
    for(var i = model.playlist.queue.attributes.songids.length; i >= 0; i--) {
      var song = model.playlist.cache.getItem(model.playlist.queue.attributes.songids[i]);
      if (!song || !song.metadata) {
        console.log("no meta data found for songId: " + model.playlist.queue.attributes.songids[i]);
      } else {
        model.songList.songs.push(new tms.viewmodels.SongViewModel(song)); 
      }
    }   
    return new tms.viewmodels.LibraryViewModel(model);
  };
}());
