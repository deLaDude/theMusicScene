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
    self.recentlyPlayed = ko.observableArray([]);
    
    self.songChange = function (roomData) {
      self.recentlyPlayed.push(self.currentSong());
      self.currentSong(new tms.viewmodels.CurrentSongViewModel(roomData));
    };
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.tmsFactory = function (model) {
    var app = new tms.viewmodels.tmsViewModel(model);


    // Event Dispatcher
    turntable.addEventListener("message", function (data) {
      var on = tms.constants.events.tt;

      if (data.command) {
        switch (data.command) {
          case on.songChange:
            app.songChange(data.room);
            break;
          case on.voteUpdate: 
            app.currentSong().updateVotes(data.room.metadata);
            break;
          case on.songSnag:
            app.currentSong().updateSnags();
            break;
          default:
            console.log("no actions for: " + data.command);
            break;
        }
      }

      if (data.snagid) {
        app.currentSong().updateSnags();
      }

      // console.log(data);
    }); 

    return app;
  };
})();