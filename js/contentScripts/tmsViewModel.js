(function () {
  /**
   * [tmsViewModel]
   */
  tms.viewmodels.tmsViewModel = function (model) {
    model = model || {};
    var self = this;
    self.tt = model.tt;
    self.eventBus = model.eventBus;
    self.library = model.library;

    // handle opening/closing the content panel
    self.isContentOpen = ko.observable(true);
    self.isContentIdle = ko.observable(false);
    self.toggleOpen = function () {
      if (self.isContentOpen()) {
        self.isContentOpen(false);
      } else {
        self.isContentIdle(false); 
        self.isContentOpen(true); 
      }
    };

    /********************** 
     *   Current Song     *
     *********************/
    self.currentSong = ko.observable(model.currentSong);
    self.recentlyPlayed = ko.observableArray([]);    
    self.songChange = function (roomData) {
      if (self.autoBopOn()) {
        setBopTimer(roomData.metadata.current_song.metadata.length);
      }

      // if user is DJing, update playlist
      if (roomData.metadata.current_dj === self.tt.userId) {
        self.library.updateActive();
      } else {
        self.library.resetActiveList();
      }

      self.recentlyPlayed.push(self.currentSong()); // currently not in use
      self.currentSong(new tms.viewmodels.CurrentSongViewModel(roomData));

      // check if its in our active playlist
      self.library.getActiveSongIds().done(function(listData){
        var inPlaylist = false;
        $.each(listData.list, function (i, id) {
          if (listData.list[0]._id === self.currentSong().fileId()) {
            inPlaylist = true;
          }
        });

        self.songSnagged(inPlaylist);
      }); 
    };

    // when the active list changes see if the current song is in it
    self.library.songList.subscribe(function (songs) {
      if (self.library.viewingPlaylist().active() && songs[0] !== "paused") {
        var inPlaylist = false;
        $.each(songs, function (i, song) {
          if (song.fileId() === self.currentSong().fileId()) {
            inPlaylist = true;
          }
        });

        self.songSnagged(inPlaylist);
      } else if (songs[0] !== "paused") {
        self.songSnagged(false);
      }
    });

    // helper functions for events
    self.updateVotes = function (data) { self.currentSong().updateVotes(data); };
    self.updateSnags = function (data) { self.currentSong().updateSnags(data); };

    self.songSnagged = ko.observable(false);
    self.snagSong = function () {
      if (self.currentSong().snaggable() && !self.songSnagged()) {
        var thing1 = $.sha1(Math.random() + ""), 
            thing2 = $.sha1(Math.random() + ""),
            inPlaylist = "true", // we don't want TT to try and add it for us
            site = "queue", 
            location = "board",
            soup = [
              self.tt.userId, 
              self.currentSong().djId(), 
              self.currentSong().fileId(), 
              self.tt.roomId, 
              site, 
              location, 
              inPlaylist, 
              self.currentSong().snaggable(), 
              thing1
              ],
              snagReq = {
                api: "snag.add",
                djid: self.currentSong().djId(),
                songid: self.currentSong().fileId(),
                roomid: self.tt.roomId,
                section: self.tt.section,
                site: site,
                location: location,
                in_queue: inPlaylist,
                blocked: self.currentSong().snaggable() ? "true" : "false",
                vh: $.sha1(soup.join("/")),
                sh: thing1,
                fh: thing2
              };

        
        self.eventBus.request(tms.events.tt.api.snag, snagReq, tms.events.ext.api.snag)
          .done(function () {
            self.eventBus.postMessage(tms.events.tt.showHeart);
            self.songSnagged(true);
            
            // update playlist
            self.library.addSnagToPlaylist(self.currentSong());
        });        
      } else {
        if (!self.currentSong().snaggable()) {
          // $("#tmsTrigger")
          //   .attr("data-action", "showMessage")
          //   .attr("data-message", "This song is not snaggable :(").click();
        } else {
          // $("#tmsTrigger")
          //   .attr("data-action", "showMessage")
          //   .attr("data-message", "You already snagged this song!").click();
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
      bopTimer = setTimeout(bop, Math.floor(Math.random() * self.currentSong().length()/4*1000));
    }

    // make request and set state upon success
    function bop () {
      var request = {
            api: 'room.vote',
            roomid: self.tt.roomId,
            section: self.tt.section,
            val: 'up',
            vh: self.currentSong().fileId(),
            th: null,
            ph: null
          };

      self.eventBus.request(tms.events.tt.api.vote, request, tms.events.ext.api.vote)
        .done(function(data) { 
          btn.addClass("selected");
        });
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

    // add event subscriptions
    var subscriptions = [
      {
        name: tms.events.ext.songChange,
        callback: app.songChange
      },
      {
        name: tms.events.ext.vote,
        callback: app.updateVotes
      },
      {
        name: tms.events.ext.snag,
        callback: app.updateSnags
      }
    ];

    for (var i in subscriptions) {
      app.eventBus.subscriptions.push(subscriptions[i]);
    }

    return app;
  };
})();