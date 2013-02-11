/**
 * Inject the scripts needed to run the extension
 */
(function () {
	// scripts
	var scripts = [
		"/js/lib/knockout.js",
		"/js/lib/jquery.dataTables.min.js",
		"/js/tms.js",
		"/js/lib/jquery.liveQuery.js",
		"/js/lib/jquery.idleTimer.js",
		"/js/dataTablesBindingHandler.js",
		"/js/ko.idleTimerBindingHandler.js",
		"/js/socketUtility.js",
		"/js/currentSongViewModel.js",
		"/js/songViewModel.js",
		"/js/playlistViewModel.js",
		"/js/libraryViewModel.js",
		"/js/tmsViewModel.js",
		"/js/bootstrapper.js"
	];

	var templates = [
		"/templates/songList.html",
		"/templates/playlists.html",
		"/templates/songBoard.html",
		"/templates/panelBase.html"
	];

	// loader utility - loads scripts into the TT sandbox
	function loadResource (source, isTemplate) {
	  var s = document.createElement('script');
	  s.src = chrome.extension.getURL(source);
		
		if (isTemplate) {
			// Knockout templates need to be handled differently than normal scripts
			//  This is step one of two. step two gets carried out by loadTemplates() in library.js
		  
			var startpoint = source.lastIndexOf("/") + 1;
		  var name = source.substring(startpoint, source.length-5);

		  s.id = name;
		  s.type = "text/html";
			(document.head||document.documentElement).appendChild(s);
		} else {
			// creates, runs and removes script
			s.type = "text/javascript";
			s.onload = function() {
		    this.parentNode.removeChild(this);
			};			
			(document.head||document.documentElement).appendChild(s);			
		}
	}

	// loop through templates
	for(var i in templates) {
		loadResource(templates[i], true);
	}
	
	// loop through scripts
	for(var x in scripts) {
		loadResource(scripts[x], false);
	}
})();
