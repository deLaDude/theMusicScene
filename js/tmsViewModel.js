(function () {
  /**
   * [tmsViewModel]
   */
  tms.viewmodels.tmsViewModel = function (model) {
    model = model || {};
    var self = this;
    self.tt = model.tt;
    self.room = model.room;
    self.roomView = model.roomView;
    self.library = model.library;

    // handle opening/closing the content panel
    self.isContentOpen = ko.observable(true);
    self.isContentIdle = ko.observable(false);
    self.toggleOpen = function () {
      self.isContentOpen(self.isContentOpen() ? false : true); 
    };

    /********************** 
     *   Current Song     *
     *********************/
    self.currentSong = ko.observable(model.currentSong);
    self.recentlyPlayed = ko.observableArray([]);    
    self.songChange = function (roomData) {
      self.songSnagged(false);

      // if user is DJing, updated playlist
      if (roomData.metadata.current_dj === self.tt.user.id) {
        self.library.updateActiveList(roomData.metadata.current_song);
      }

      self.recentlyPlayed.push(self.currentSong());
      self.currentSong(new tms.viewmodels.CurrentSongViewModel(roomData));
      
      if (self.autoBopOn()) {
        setBopTimer(roomData.metadata.current_song.metadata.length);
      }
    };

    self.songSnagged = ko.observable(false);
    self.snagSong = function () {
      if (self.currentSong().snaggable() && !self.songSnagged()) {
        var thing1 = $.sha1(Math.random() + ""), 
            thing2 = $.sha1(Math.random() + ""),
            inPlaylist = "true", // we don't want TT to try and add it for us
            site = "queue", 
            location = "board",
            soup = [
              self.tt.user.id, 
              self.currentSong().djId(), 
              self.currentSong().queueId(), 
              self.room.roomId, 
              site, 
              location, 
              inPlaylist, 
              self.currentSong().snaggable(), 
              thing1
              ],
              snagReq = {
                api: "snag.add",
                djid: self.currentSong().djId(),
                songid: self.currentSong().queueId(),
                roomid: self.room.roomId,
                section: self.room.section,
                site: site,
                location: location,
                in_queue: inPlaylist,
                blocked: self.currentSong().snaggable() ? "true" : "false",
                vh: $.sha1(soup.join("/")),
                sh: thing1,
                fh: thing2
              };

        tms.utils.socket(snagReq).done(function () {
           self.roomView.showHeart(self.tt.user.id);

          // update playlist
          self.library.addSongsToPlaylist([self.currentSong()], self.library.activePlayList(), true);

          // maintain turntable GA event tracking
          _gaq.push(["_trackEvent", "song", "snag", site, (self.currentSong().snaggable() ? 0: 1)]);
        }).fail(function(err){ console.log(err); });        
      } else {
        if (!self.currentSong().snaggable()) {
          self.roomView.showRoomTip("This song is not snaggable :(", 3);
        } else {
          self.roomView.showRoomTip("You already snagged this song!", 3);
        }
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
    // get TT room actions obj
    for (var i in model.room) { 
      if (model.room[i] && model.room[i].showHeart) { 
        model.roomView = model.room[i]; 
        break; 
      } 
    }
    
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
          case on.searchCompleted:
            app.library.handleSearchResults(data);
            break;
          case on.searchFailed:
            console.log(data);
            break;
          default:
            // console.log("no actions for: " + data.command);
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