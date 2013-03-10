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

    // <top of active preview>
      self.previewActive = ko.observable(false);
      self.toggleTopOfQueuePreview = function () {
        if (self.previewActive()) {        
          self.previewActive(false);
          self.eventBus.postMessage(tms.events.tt.pauseSample);
        } else {
          if (self.library.playingPreview()) {
            self.library.updatePreviewProgress('stop');
          }

          self.previewActive(true);
          self.eventBus.postMessage(tms.events.tt.playSample, self.library.topOfActive().fileId());
        }
      };

      // if we're playing a preview, turn it off
      //  otherwise forward to library 
      self.updatePreviewProgress = function (status) {
        if (self.previewActive() && status === "stop") {
          self.previewActive(false);  
        } else if (!self.previewActive()) {
          self.library.updatePreviewProgress(status);
        }
      };

      // need to de-activate preview visual in-case 
      //  another preview starts before this one ends
      self.library.playingPreview.subscribe(function (value) {
        if (value && self.previewActive()) {
          self.previewActive(false);  
        }
      });

      // turn off preview state if top of active changes
      self.library.topOfActive.subscribe(function (song) {
        if (self.previewActive()) {
          self.previewActive(false);
        }
      });    

    // </top of active preview>

    // <current song>
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
        self.library.currentSong(self.currentSong());
      };

      // helper functions for events
      self.updateVotes = function (data) { self.currentSong().updateVotes(data); };
      self.updateSnags = function (data) { self.currentSong().updateSnags(data); };

      self.snagSong = function () {
        self.library.addSnagToPlaylist(self.library.activePlaylist());
      };
    // </current song>

    // <auto bop>
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
    // </auto bop>
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
      },
      {
        name: tms.events.ext.sampleProgress,
        callback: app.updatePreviewProgress
      }
    ];

    for (var i in subscriptions) {
      app.eventBus.subscriptions.push(subscriptions[i]);
    }

    return app;
  };
})();