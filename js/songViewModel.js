(function () {
	/**
	 * [SongViewmodel]
	 * @param {object} model [tt song model]
	 */
	tms.viewmodels.SongViewModel = function (model) {
    model = model || {};
		var self = this;
    
    // queueId maps to the songIds in playlist viewmodel to determine position in playlist(queue)
    //  its also used to access local storage data
    self.queueId = ko.observable(model.fileId || model._id);
    self.queuePosition = ko.observable(model.queuePosition);

		if (model.metadata) {
      // TODO: add releasedate and label properties
			self.artist = ko.observable(model.metadata.artist || "");
			self.song = ko.observable(model.metadata.song || "");
			self.album = ko.observable(model.metadata.album || "");
			self.art = ko.observable(model.metadata.coverart || "");
			self.genre = ko.observable(model.metadata.genre || "");
			self.length = ko.observable(model.metadata.length || 0);
			self.source = ko.observable(model.source || "");
			self.snaggable = ko.observable(model.snaggable || "");
		} 

		// formats raw seconds to mm:ss format for display
    self.formatedLength = ko.computed(function () {
      var sec_numb = self.length();
      var hours = Math.floor(sec_numb / 3600);
      var minutes = Math.floor((sec_numb - (hours * 3600)) / 60);
      var seconds = sec_numb - (hours * 3600) - (minutes * 60);

      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time = minutes+':'+seconds;
      return time;
    });
	};
})();