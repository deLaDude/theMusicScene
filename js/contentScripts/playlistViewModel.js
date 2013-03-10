(function () {
  tms.viewmodels.PlaylistViewModel = function (model, eventBus) {
    model = model || {};
    var self = this;
    self.eventBus = eventBus;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);

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