/**
 * Extension's bootstrapper functions
 */
(function () {
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
        if (id === "panelBase") {
          $("#turntable .roomView").append(payload);
        } else if (id === "songBoard") {
          $("#bigboard").append(payload);
        } else {
          $("body").append("<script id='" + id + "-template' type='text/html'>" + payload + "</script>");
        }
      }));
    });

    return templates;
  }

  // generate array of deferred objects for playlist requests
  function compilePlaylistRequests (playlists) {
    var reqs = [];
    for(var i in playlists) {
      reqs.push(tms.utils.socket({
        api: "playlist.all",
        playlist_name: playlists[i].name,
        minimal: true
      }));
    }
    return reqs;      
  }

  /**
   * Initializes the extension in the TT sandbox
   */
  function buildModels () {
    // build up application models
    var models = {
      tmsModel: {
        tt: turntable,
        room: null,
        roomInfo: null
      },
      libraryModel: {
        ttPlaylist: turntable.playlist,
        playlistData: [],
        tableOptions: {
          "sScrollY": "341px",
          "bScrollCollapse": true,
          "bPaginate": false,
          "iTabIndex": 1, // keybaord navigation for column sorting (tab > enter)
          "sDom": '<"songListHead"if>t',
          "aoColumnDefs": [
            // column names
            { "sTitle": "#", "aTargets": [ 0 ] },
            { "sTitle": "Artist", "aTargets": [ 1 ] },
            { "sTitle": "Song", "aTargets": [ 2 ] },
            { "sTitle": "Album", "aTargets": [ 3 ] },
            { "sTitle": "Genre", "aTargets": [ 4 ] },
            { "sTitle": "Length", "aTargets": [ 5 ] },
            // column widths
            { "sWidth": "5%", "aTargets": [ 0 ] },
            { "sWidth": "20%", "aTargets": [ 1 ] },
            { "sWidth": "32%", "aTargets": [ 2 ] },
            { "sWidth": "15%", "aTargets": [ 3 ] },
            { "sWidth": "15%", "aTargets": [ 4 ] },
            { "sWidth": "8%", "aTargets": [ 5 ] },
            //column classes
            { "sClass": "pos", "aTargets": [ 0 ] },
            { "sClass": "artist", "aTargets": [ 1 ] },
            { "sClass": "songname", "aTargets": [ 2 ] },
            { "sClass": "album", "aTargets": [ 3 ] },
            { "sClass": "genre", "aTargets": [ 4 ] },
            { "sClass": "length", "aTargets": [ 5 ] },
            // sort and filter options
            { "aDataSort": [ 1, 3 ], "aTargets": [ 1 ] }, // when sorting artist, secondary sort is on album
            { "aDataSort": [ 5, 1 ], "aTargets": [ 5 ] }, // when sorting genre, secondary sort is on artist
            { "bSearchable": false, "aTargets": [ 0 ] },  // prevent filtering on # column
            { "sType": "numeric", "aTargets": [ 0 ] }     // enabled numeric sort on # column
          ],
          "bAutoWidth" : false
        }
      }
    },
    ttPlaylists;

    // get TT room obj
    for (var i in turntable) { 
      if (turntable[i].roomId) { 
        models.tmsModel.room = turntable[i]; 
        break; 
      } 
    }

    // initial requests
    var roomReq = {
          api: "room.info",
          roomid: models.tmsModel.room.roomId,
          section: models.tmsModel.room.section,
          userid: models.tmsModel.tt.user.id,
          userauth: models.tmsModel.tt.user.auth
        },
        playlistReq = { api: "playlist.list_all" };

    // get room info and user playlists
    try {
      $.when(tms.utils.socket(roomReq), tms.utils.socket(playlistReq))
        .then($.proxy(function(roomInfo, playlists) {
          models.tmsModel.roomInfo = roomInfo;

          ttPlaylists = playlists.list;
          // compile requests and return $.when()
          var loadLists = compilePlaylistRequests(ttPlaylists);
          return $.when.apply($, loadLists);
        }), $.proxy(function(err){ console.log(err); }))  
        .done($.proxy(function() {
          // compile playlist data 
          for (var i in arguments) {
            // only if the argument is a playlist
            if (arguments[i].list) {
              models.libraryModel.playlistData.push({
                list: arguments[i].list,
                name: ttPlaylists[i].name,
                active: ttPlaylists[i].active
              });
            }
          }

          init(models); 
        }))
        .fail($.proxy(function(err){ console.log(err); }));
    } catch (e) {
      console.log("API Exception!");
      console.log(e);
    }        
  }

  /**
   * Create and bind application view model
   * @param  {object} model    [app model]
   */
  function init (models) {
    models.tmsModel.currentSong = new tms.viewmodels.CurrentSongViewModel(models.tmsModel.roomInfo.room);
    models.tmsModel.library = tms.factories.libraryFactory(models.libraryModel);

    // create library and bind to view
    tms.app.tmsViewModel = tms.factories.tmsFactory(models.tmsModel);   
    ko.applyBindings(tms.app.tmsViewModel);
    
    console.log("tms ready");   
  }

  $(function(){
    // wait till dynamically generated TT markup is ready
    $("#bigboard").livequery(function () {
      $.when.apply(null, getTemplates()).done(buildModels);
      $("#bigboard").expire();
    });
  });
}());