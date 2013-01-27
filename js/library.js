(function () {
  /**
   * Loop until TT is initialized then init extension
   */
  function bootstrapper () {
    var playlist = turntable.playlist;

    if (!playlist || !playlist.queue || !playlist.queue.attributes || !playlist.queue.attributes.songids || playlist.queue.attributes.songids.length === 0) {
      setTimeout(bootstrapper, 750);
    } else { // initialize 
      $.when.apply(null, getTemplates()).done(init);
    } 
  }

  /**
   * Initializes the extension in the TT sandbox
   */
  function init () {
    var playlist = turntable.playlist,
        $ttHeader = $("#header");

    // apply TT styles
    var $libraryView = $("#tmsLibrary");

    // create library and bind to view
    var libraryViewModel = createLibrary(playlist);
    ko.applyBindings(libraryViewModel, $libraryView[0]);

    $libraryView.find("table").dataTable({
      "sScrollY": "352px",
      "bPaginate": false,
      "bScrollCollapse": true,
      "sDom": '<"songListHead"if>t'
    });

    // data tables clean-up
    $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
    $("#DataTables_Table_0_filter input").attr("placeholder", "Search");

    console.log("ready");      
  }

	/**
	 * [createLibrary is the factory method for the library extension]
	 * @return {viewmodel} [a library view model]
	 */
	function createLibrary (playlist) {
		var libraryModel = {
      playlist: playlist,
      songList: {
        listHeaders: [
          "Artist",
          "Song",
          "Album",
          "Genre",
          "Length"
        ],
        songs: []
      }
    };

		// create song viewmodels from cached data
		for(var i = playlist.queue.attributes.songids.length; i >= 0; i--) {
      var song = playlist.cache.getItem(playlist.queue.attributes.songids[i]);
      if (!song || !song.metadata) {
        console.log("no meta data found for songId: " + playlist.queue.attributes.songids[i]);
      } else {
        libraryModel.songList.songs.push(new SongViewModel(song)); 
      }
		}		

		return new LibraryViewModel(libraryModel);
	}

  /**
   * Scraps page for templates loaded by content script and reloads them to privide acess in the TT sandbox
   * @return {[type]} [description]
   */
  function getTemplates () {
    var templates = [];

    $("script[type='text/html']").each(function(i, el){
      var $t = $(el),
          src = $t.attr("src"),
          id = $t.attr("id");

      $t.remove();

      templates.push($.get(src, function (payload, status, xhr) {
        if (id === "base") {
          // append base html to DOM
         $("#turntable .roomView").append(payload);
        } else {
          $("body").append("<script id='" + id + "-template' type='text/html'>" + payload + "</script>");
        }
      }));
    });

    return templates;
  }

	/**
	 * [SongViewmodel]
	 * @param {object} model [tt song model]
	 */
	var SongViewModel = function (model) {
		model = model || {};
		var self = this;

		if (model.metadata) {
			self.artist = ko.observable(model.metadata.artist || "");
			self.song = ko.observable(model.metadata.song || "");
			self.album = ko.observable(model.metadata.album || "");
			self.art = ko.observable(model.metadata.coverart || "");
			self.genre = ko.observable(model.metadata.genre || "");
			self.length = ko.observable(model.metadata.length || 0);
			self.source = ko.observable(model.source || "");
			self.snaggable = ko.observable(model.snaggable || "");
		} 

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

	/**
	 * [LibraryViewModel]
	 * @param {object} model [song list model]
	 */
	var LibraryViewModel = function (model) {
		model = model || {};
		var self = this;

    self.isOpen = ko.observable(false);

    self.songList = {
      listHeaders: ko.observableArray(model.songList.listHeaders || []),
      songs: ko.observableArray(model.songList.songs || [])
    };

    self.toggleOpen = function () {
      self.isOpen(self.isOpen() ? false : true); 
    };
	};
	
	// go!
	$(function(){ bootstrapper();	});
})();	