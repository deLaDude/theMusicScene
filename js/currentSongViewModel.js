(function () {
  /**
   * [CurrentViewModel]
   * @param {object} model [room meta data]
   */
  tms.viewmodels.CurrentSongViewModel = function (model) {
    model = model || {};
    var self = this;

    if (model.metadata) {
      // dynamic variables
      self.downvotes = ko.observable(model.metadata.downvotes);
      self.upvotes = ko.observable(model.metadata.upvotes);
      self.snags = ko.observable(0);

      // related dj
      self.djId = ko.observable(model.metadata.current_song.djid);
      self.djName = ko.observable(model.metadata.current_song.djname);
      
      // song data
      self.id = ko.observable(model.metadata.current_song.metadata.id);
      self.song = ko.observable(model.metadata.current_song.metadata.song);
      self.artist = ko.observable(model.metadata.current_song.metadata.artist);
      self.album = ko.observable(model.metadata.current_song.metadata.album);
      self.genre = ko.observable(model.metadata.current_song.metadata.genre);
      self.art = ko.observable(model.metadata.current_song.metadata.coverart);
      self.length = ko.observable(model.metadata.current_song.metadata.length);
    } else {
      console.log("ERROR: metadata not provided for song change");
    }
  };

  // tms.factories.songFactory = function (roomInfo) {
  //   return new tms.viewmodels.SongViewmodel(model);
  // };
})();
