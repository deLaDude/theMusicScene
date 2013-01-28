(function () {
  /**
   * [tmsViewModel]
   */
  tms.viewmodels.tmsViewModel = function (model) {
    model = model || {};
    var self = this;
    self.tt = model.tt;
    self.room = model.room;
    self.library = model.library;

    // handle opening/closing the content panel
    self.isContentOpen = ko.observable(false);
    self.toggleOpen = function () {
      self.isContentOpen(self.isContentOpen() ? false : true); 
    };

    self.currentSong = ko.observable(model.currentSong);
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.tmsFactory = function (model) {
    return new tms.viewmodels.tmsViewModel(model);

    // Event Dispatcher
    // turntable.addEventListener("message", function (data) {
    //   // console.log(data);
    // }); 
  };
})();