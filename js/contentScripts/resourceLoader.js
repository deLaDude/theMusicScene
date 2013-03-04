/**
 * Inject resources required to run the extension:
 * - templates
 * - eventBus
 */
(function () {
	// scripts
	var scripts = [
		"/js/tms.js",
		"/js/ttBroker.js"
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
			//  This is step one of two. Step two gets carried out by getTemplates() in bootstrapper.js

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

	// loop through scripts
	for(var i in scripts) {
		loadResource(scripts[i], false);
	}

	// loop through templates
	for(var x in templates) {
		loadResource(templates[x], true);
	}
}());