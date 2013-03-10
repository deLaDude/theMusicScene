(function () {
  tms.viewmodels.PlaylistViewModel = function (model, eventBus) {
    model = model || {};
    var self = this;
    self.eventBus = eventBus;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);

    self.activeSongInList = ko.observable(false);

    self.getSongData = function (songId) {
      var returnEvent = tms.events.ext.api.songdata + self.name().split(' ').join('_');
      return self.eventBus.request(
        tms.events.tt.api.songdata,
        {
          api: "playlist.get_metadata",
          playlist_name: self.name(),
          files: [songId]
        },
        returnEvent
      );
    };

    self.getSongIds = function () {
      var playlistName = self.name(),
          returnEvent = tms.events.ext.api.playlist + playlistName.split(' ').join('_');
        
      return self.eventBus.request(
        tms.events.tt.api.playlist,
        {
          api: "playlist.all",
          playlist_name: playlistName,
          minimal: true
        },
        returnEvent
      );
    };

    self.playlistInput = ko.observable(model.name);
    self.editInProgress = ko.observable(false);

    self.saveName = function () {
      if (self.playlistInput() !== self.name()) {
        self.eventBus.request(
          tms.events.tt.playlist.renamePlaylist,
          {
            api: "playlist.rename",
            old_playlist_name: self.name(),
            new_playlist_name: self.playlistInput()
          },
          tms.events.ext.playlist.renamePlaylist)
          .done(function () {
            self.name(self.playlistInput());
            self.editInProgress(false);
          });        
      }
    };

    self.editName = function () {
      self.editInProgress(self.editInProgress() ? false : true);
    };
  };

  tms.factories.playlistFactory = function(ttListData, eventBus) {
    return new tms.viewmodels.PlaylistViewModel(ttListData, eventBus);
  };
})();