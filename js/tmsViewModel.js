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

    /********************** 
     *   Current Song     *
     *********************/
    self.currentSong = ko.observable(model.currentSong);
    self.recentlyPlayed = ko.observableArray([]);    
    self.songChange = function (roomData) {
      self.recentlyPlayed.push(self.currentSong());
      self.currentSong(new tms.viewmodels.CurrentSongViewModel(roomData));
      
      if (self.autoBopOn()) {
        setBopTimer(roomData.metadata.current_song.metadata.length);
      }
    };

    /********************** 
     *     Auto Bop       *
     *********************/
    var bopTimer = null,
        btn = $("#awesome-button");
    
    // sets a random time to bop based on songs length
    function setBopTimer () {
      bopTimer = setTimeout(bop, Math.floor(Math.random()*model.room.currentSong.metadata.length/4*1000));
    }

    // make request and set state upon success
    function bop () {
      var songId = $.sha1(model.room.roomId + 'up' + model.room.currentSong._id);

      tms.utils.socket({
        api: 'room.vote',
        roomid: model.room.roomId,
        section: model.room.section,
        val: 'up',
        vh: songId,
        th: $.sha1(Math.random() + ""),
        ph: $.sha1(Math.random() + "")
      })
      .done($.proxy(function(data) { 
        btn.addClass("selected");
      }))
      .fail(function(err){ console.log(err); });
    }

    // ui toggle
    self.autoBopOn = ko.observable(false);
    self.toggleAutoBop = function () {
      if (self.autoBopOn()) {
        clearTimeout(bopTimer);
        self.autoBopOn(false);
      } else {
        bop();
        self.autoBopOn(true);
      }
    };
  };

  /**
   * [The factory method for the library view model]
   * @return {viewmodel} [a library view model]
   */
  tms.factories.tmsFactory = function (model) {
    var app = new tms.viewmodels.tmsViewModel(model);

    // TT Event Dispatcher
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
    }); 

    return app;
  };
})();