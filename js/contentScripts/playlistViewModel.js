(function () {
  tms.viewmodels.PlaylistViewModel = function (model) {
    model = model || {};
    var self = this;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);
  };

  tms.factories.playlistFactory = function(ttListData) {
    return new tms.viewmodels.PlaylistViewModel(ttListData);
  };
})();