(function () {
  tms.viewmodels.PlaylistViewModel = function (model) {
    model = model || {};
    var self = this;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);
    self.songIds = ko.observableArray(model.list);
  };

  tms.factories.playlistFactory = function(ttListData) {
    // flatten array objects to just the songId
    ttListData.list = $.map(ttListData.list, function(song){
      return song._id;
    });

    return new tms.viewmodels.PlaylistViewModel(ttListData);
  };
})();