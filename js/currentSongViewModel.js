(function () {
  /**
   * [CurrentViewModel]
   * @param {object} model [room meta data]
   */
  tms.viewmodels.CurrentSongViewModel = function (model) {
    model = model || {};
    var self = this;
    self.model = model;
    
    if (model.metadata && model.metadata.current_song) {
      // dynamic variables
      self.downvotes = ko.observable(model.metadata.downvotes || 0);
      self.upvotes = ko.observable(model.metadata.upvotes || 0);
      self.snags = ko.observable(0);

      // related dj
      self.djId = ko.observable(model.metadata.current_song.djid  || "n/a");
      self.djName = ko.observable(model.metadata.current_song.djname  || "n/a");
      
      // song data
      self.queuePosition = ko.observable(0);
      self.queueId = ko.observable(model.metadata.current_song.fileId || model.metadata.current_song._id);
      self.song = ko.observable(model.metadata.current_song.metadata.song || "n/a");
      self.artist = ko.observable(model.metadata.current_song.metadata.artist || "n/a");
      self.album = ko.observable(model.metadata.current_song.metadata.album || "n/a");
      self.genre = ko.observable(model.metadata.current_song.metadata.genre || "n/a");
      self.art = ko.observable(model.metadata.current_song.metadata.coverart || "n/a");
      self.length = ko.observable(model.metadata.current_song.metadata.length || "n/a");
      self.snaggable = ko.observable(model.metadata.current_song.snaggable || true);
    } else {
      // if no song playing set default values
      self.downvotes = ko.observable(0);
      self.upvotes = ko.observable(0);
      self.snags = ko.observable(0);
      self.djId = ko.observable("n/a");
      self.djName = ko.observable("n/a");
      self.id = ko.observable("n/a");
      self.song = ko.observable("n/a");
      self.artist = ko.observable("n/a");
      self.album = ko.observable("n/a");
      self.genre = ko.observable("n/a");
      self.art = ko.observable("n/a");
      self.length = ko.observable("n/a");
      self.snaggable = ko.observable(false);
    }

    self.updateVotes = function (eventData) {
      self.upvotes(eventData.upvotes);
      self.downvotes(eventData.downvotes);  
    };

    self.updateSnags = function () {
      self.snags(self.snags() + 1);
    };
  };

  // tms.factories.songFactory = function (roomInfo) {
  //   return new tms.viewmodels.SongViewmodel(model);
  // };
})();
