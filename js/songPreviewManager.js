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
})();