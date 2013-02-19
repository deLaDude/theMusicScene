(function () {
  tms.viewmodels.PlaylistViewModel = function (model) {
    model = model || {};
    var self = this;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);
    self.songs = ko.observableArray(model.songs);
  };


  // TODO: debug
  tms.factories.playlistFactory = function(ttListData, eventBus) {
    var model = {
      name: ttListData.name,
      active: ttListData.active,
      songs: $.map(ttListData.list, function(song, i) { return new tms.viewmodels.SongViewModel(song); }),
      eventBus: eventBus
    };  

    return new tms.viewmodels.PlaylistViewModel(model);
  };
})();