(function () {
  /***************************
   *   Song Preview Manager  *
   ***************************/
  // note: keeping module in broker to avoid load order issues4o0 
  function PreviewManager () {
    var self = this;

    var previewTimer = null,
        previewProgressTimer = null,
        previewSound,
        previewCallback,
        masterVolume;

    function fade (sound, target) {
      var dfr = $.Deferred(),
          fader = setInterval(function() {
            var currentVol = Math.round(sound.volume);

            if (currentVol > target) {
              sound.setVolume(currentVol - 1);
            } else if (currentVol < target) {
              sound.setVolume(currentVol + 1);
            } else if (currentVol === target) {
              clearInterval(fader);
              dfr.resolve(sound);
            }
          }, 75);       

      return dfr.promise();
    }

    self.playSample = function (songId, callback) {
      if (previewSound) {
        // clean up previous before starting new
        clearTimeout(previewTimer);
        clearInterval(previewProgressTimer);
        fade(previewSound, 0).done(function(sound) { sound.destruct(); });
      } else {
        // set master volume and fade master sound
        masterVolume = Math.round(httpStream.volume);
        fade(httpStream, 0);
      }

      // setup timers and callback
      previewCallback = callback;     
      previewTimer = setTimeout(self.stopSample, 30 * 1000); // 30 second preview

      // create sound obj
      var url = window.location.protocol + "//" + MEDIA_HOST + "/previewfile/?fileid=" + songId;
      previewSound = soundManager.createSound({
          id: "preview" + songId,
          url: url
      });

      // begin preview
      previewCallback("start");
      previewSound.setVolume(1);
      previewSound.play();
      fade(previewSound, masterVolume);
    };

    self.stopSample = function () {
      if (previewTimer) {
        clearTimeout(previewTimer);
        clearInterval(previewProgressTimer);
        previewTimer = null;
        previewProgressTimer = null;
        fade(previewSound, 0).done(function(sound) { sound.destruct(); });
        previewSound = null;

        // set master sound back when done
        fade(httpStream, masterVolume);

        if (previewCallback) {
          previewCallback("stop");
          previewCallback = null;
        } 
      }
    };
  }

  tms.previewManager = new PreviewManager();
})();

// Facilicates communication between content scripts and turntable
(function () {
  /*********************
   *   inbound events  *
   *********************/
  var room,
      roomView,
      playlistCache = turntable.playlist.cache;

  /*********************
   * Basic TT Requests *
   *********************/

  function getInitInfo () {
    var data;

    // get TT room obj
    for (var i in turntable) { 
      if (turntable[i] && turntable[i].roomId) { 
        room = turntable[i]; 
        break; 
      } 
    }

    // get TT room actions obj
    for (var x in room) { 
      if (room[x] && room[x].showHeart) { 
        roomView = model.room[x]; 
        break; 
      } 
    }

    data = {
      roomId: room.roomId,
      section: room.section,
      userId: turntable.user.id,
      userAuth: turntable.user.auth     
    };

    eventBus.postMessage(tms.events.ext.initInfo, data);
  }

  function addToCache (data) {
    playlistCache.setItem(data.key, data.song);
  }

  function previewStatus (data) {
    eventBus.postMessage(tms.events.ext.sampleProgress, data);
  }

  function playPreview (songId) {
    tms.previewManager.playSample(songId, previewStatus);
  }

  function stopPreview () {
    tms.previewManager.stopSample(); 
  }

  /*** Init EventBus ****/

  // event subscriptions
   var extEvents = [

    /*** page events ***/
    {
      name: tms.events.tt.initInfo,
      callback: getInitInfo
    },
    {
      name: tms.events.tt.showHeart,
      callback: function () {
        console.log("show heart " + turntable.user.id);
        roomView.showHeart(turntable.user.id);
      }
    },
    {
      name: tms.events.tt.showMessage,
      callback: function (message) {
        roomView.showRoomTip(message, 3);
      }
    },
    {
      name: tms.events.tt.playSample,
      callback: playPreview
    },
    {
      name: tms.events.tt.pauseSample,
      callback: stopPreview
    },

    /*** api events ***/
    {
      name: tms.events.tt.api.room,
      callback: function (request) {
        tms.utils.socket(request)
          .done(function(data) { eventBus.postMessage(tms.events.ext.api.room, data); })
          .fail(function (err) { console.log(err); });
      }
    },
    {
      name: tms.events.tt.api.playlists,
      callback: function (request) {
        tms.utils.socket(request)
          .done(function(data) { eventBus.postMessage(tms.events.ext.api.playlists, data); })
          .fail(function (err) { console.log(err); });
      }
    },
    {
      name: tms.events.tt.api.playlist,
      callback: function (request) {
        tms.utils.socket(request)
          .done(function(data) {
            // playlist requests require a unique return event
            var returnEvent = tms.events.ext.api.playlist + request.playlist_name.split(' ').join('_');
            eventBus.postMessage(returnEvent, data);
          })
          .fail(function (err) { console.log(err); });
      }
    },
    {
      name: tms.events.tt.api.vote,
      callback: function (request) {
        // leverage TT's encryption algorithm 
        request.vh = $.sha1(request.roomid + 'up' + request.vh);
        request.th = $.sha1(Math.random() + "");
        request.ph = $.sha1(Math.random() + "");

        tms.utils.socket(request)
          .done(function(data) {
            eventBus.postMessage(tms.events.ext.api.vote, data);
          })
          .fail(function (err) { console.log(err); });   
      }
    },
    {
      name: tms.events.tt.api.snag,
      callback: function (request) {
        tms.utils.socket(request)
          .done(function(data) {
            eventBus.postMessage(tms.events.ext.api.snag, data);
          })
          .fail(function (err) { console.log(err); });   
      }
    },
    {
      name: tms.events.tt.api.search,
      callback: function (request) {
        tms.utils.socket(request).done(function(data) {
          eventBus.postMessage(tms.events.ext.api.search, data);
        }).fail(function (err) { console.log(err); });   
      }
    },

    /*** Playlist Events ***/
    {
      name: tms.events.tt.playlist.change,
      callback: function (request) {
        tms.utils.socket(request).done(function(data) {
          eventBus.postMessage(tms.events.ext.playlist.change, data);
        }).fail(function (err) { console.log(err); });   
      }
    },
    {
      name: tms.events.tt.playlist.reorder,
      callback: function (request) {
        tms.utils.socket(request).done(function(data) {
          eventBus.postMessage(tms.events.ext.playlist.reorder, data);
        }).fail(function (err) { console.log(err); });   
      }
    },
    {
      name: tms.events.tt.playlist.add,
      callback: function (request) {
        tms.utils.socket(request).done(function(data) {
          eventBus.postMessage(tms.events.ext.playlist.add, data);
        }).fail(function (err) { console.log(err); });   
      }
    },
    {
      name: tms.events.tt.playlist.remove,
      callback: function (request) {
        tms.utils.socket(request).done(function(data) {
          eventBus.postMessage(tms.events.ext.playlist.remove, data);
        }).fail(function (err) { console.log(err); });   
      }
    },

    /*** cache evets ***/
    {
      name: tms.events.tt.cache.get,
      callback: function (key) {
        var returnEvent = tms.events.ext.cache.get + key;
        eventBus.postMessage(returnEvent, playlistCache.getItem(key));
      }
    }
  ];

  var eventBus = new tms.EventBus(extEvents);


  /**********************
   *  Turntable events  *
   **********************/    
  var ttEvents = {
    songChange: "newsong",
    songSnag: "snagged",
    voteUpdate: "update_votes",
    userUpdate: "update_user", // fired when someone is fanned    
    chatMessage: "speak",
    userEnter: "registered",
    userLeave: "deregistered",
    searchCompleted: "search_complete",
    searchFailed: "search_failed",
    ttErrors: {
      alreadyVoted: "User has already voted up",
      alreadySnagged: "Duplicate song request has already been logged"
    }
  };

  // listen for TT events to send to content scripts
  turntable.addEventListener("message", function (data) {
    var on = ttEvents;

    if (data.command) {
      switch (data.command) {
        case on.songChange:
          eventBus.postMessage(tms.events.ext.songChange, data.room);
          break;
        case on.voteUpdate: 
          eventBus.postMessage(tms.events.ext.vote, data.room.metadata);
          break;
        case on.songSnag:
          console.log(data);
          eventBus.postMessage(tms.events.ext.snag);  
          break;
        case on.searchCompleted:
          eventBus.postMessage(tms.events.ext.search, data);
          break;
        case on.searchFailed:
          console.log(data);
          break;
        case on.userEnter:
          eventBus.postMessage(tms.events.ext.registered, data);
          break;
        default:
          // console.log("no actions for: " + data.command);
          break;
      }
    }

    if (data.snagid) {
      eventBus.postMessage(tms.events.ext.snag, data);
    }
  }); 
})();