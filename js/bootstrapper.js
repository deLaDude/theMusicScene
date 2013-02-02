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
          console.log(id);

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

  /**
   * Initializes the extension in the TT sandbox
   */
  function buildModel () {
    // build up application model
    var model = {
      tt: turntable,
      api: tms.utils.socket,
      ttRoom: null,
      roomInfo: null,
      library: null
    };

    // get TT room obj
    for (var i in turntable) { 
      if (turntable[i].roomId) { 
        model.room = turntable[i]; 
        break; 
      } 
    }

    // get room info and user playlists
    try {
      var roomReq = {
            api: "room.info",
            roomid: model.room.roomId,
            section: model.room.section,
            userid: model.tt.user.id,
            userauth: model.tt.user.auth
          },
          playlistReq = { api: "playlist.list_all" };

      $.when(tms.utils.socket(roomReq), tms.utils.socket(playlistReq))
        .done($.proxy(function(roomInfo, playlists) {
          var libraryModel = {
            playlist: turntable.playlist,
            playlists: playlists.lists
          };

          console.log(playlists);

          // test code
          for (var j in playlists.files) {
            if (playlists.files.hasOwnProperty(j)) {
              var h = playlists.files[j];
              console.log(h);
            }
          }

          model.roomInfo = roomInfo;
          model.library = tms.factories.libraryFactory(libraryModel);

          init(model);
        }))
        .fail(function(err){ console.log(err); });     
    } catch (e) {
      console.log("API Exception!");
      console.log(e);

      // TODO: we'll need to update model params to avoid errors, 
      //   but extension should still start - maybe retry api call..
      // return new tms.viewmodels.tmsViewModel(model);
    }        
  }

  /**
   * Create and bind application view model
   * @param  {object} model    [app model]
   */
  function init (model) {
    console.log("here");
    model.currentSong = new tms.viewmodels.CurrentSongViewModel(model.roomInfo.room);

    // create library and bind to view
    tms.app.tmsViewModel = tms.factories.tmsFactory(model);
    ko.applyBindings(tms.app.tmsViewModel);

    // TODO: move datatables code to bindingHandler
    $("#tmsPanel").find("table").dataTable({
      "sScrollY": "352px",
      "bScrollCollapse": true,
      "bPaginate": false,
      "iTabIndex": 1, // keybaord navigation for column sorting (tab > enter)
      "sDom": '<"songListHead"if>t',
      "aoColumnDefs": [
        { "aDataSort": [ 0, 2 ], "aTargets": [ 0 ] }, // when sorting artist, secondary sort is on album
        { "aDataSort": [ 4, 0 ], "aTargets": [ 4 ] }, // when sorting genre, secondary sort is on artist
        { "sWidth": "20%", "aTargets": [ 0 ]  },
        { "sWidth": "33%", "aTargets": [ 1 ]  },
        { "sWidth": "22%", "aTargets": [ 2 ]  },
        { "sWidth": "17%", "aTargets": [ 3 ]  },
        { "sWidth": "8%", "aTargets": [ 4 ]  }
      ],
      "bAutoWidth" : false
    });

    // data tables clean-up
    $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
    $("#DataTables_Table_0_filter input").attr("placeholder", "Library Search");

    console.log("tms ready");   
  }

  $(function(){
    // wait till dynamically generated TT markup is ready
    $("#bigboard").livequery(function () {
      $.when.apply(null, getTemplates()).done(buildModel);
      $("#bigboard").expire();
    });
  });
}());