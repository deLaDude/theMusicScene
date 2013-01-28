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
   * Create and bind application view model
   * @param  {object} model    [app model]
   */
  function build (model) {
    model.currentSong = tms.viewmodels.CurrentSongViewModel(model.roomInfo);

    $("#turntabl .room-veiw").ready(function(){
      // create library and bind to view
      var tmsViewModel = tms.factories.tmsFactory(model);
      console.log(tmsViewModel);
      ko.applyBindings(tmsViewModel);

      // TODO: move datatables code to bindingHandler
      $("#tmsPanel").find("table").dataTable({
        "sScrollY": "352px",
        "bPaginate": false,
        "bScrollCollapse": true,
        "sDom": '<"songListHead"if>t'
      });

      // data tables clean-up
      $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
      $("#DataTables_Table_0_filter input").attr("placeholder", "Search");

      console.log("ready");  
    });
  }

  /**
   * Initializes the extension in the TT sandbox
   */
  function init () {
    // build up application model
    var model = {
      tt: turntable,
      ttRoom: null,
      roomInfo: null,
      library: tms.factories.libraryFactory(turntable.playlist)
    };

    // get TT room obj
    for (var i in turntable) { 
      if (turntable[i].roomId) { 
        model.room = turntable[i]; 
        break; 
      } 
    }

    // get room info from TT api
    // NOTE: wrapped in catch in case api identifier changes.
    // .. we need to figure out a long term solution for this.
    try {
      turntable.fASrAToS({
          api: "room.info",
          roomid: model.room.roomId,
          section: model.room.section
      })
      .done($.proxy(function(data) { 
        model.roomInfo = data;
        build(model);
      }))
      .fail(function(err){ console.log(err); })
      .always(function(data) {
        console.log("always:");
        console.log(data);
      });     
    } catch (e) {
      console.log(e);

      // TODO: we'll need to update model params to avoid errors, 
      //   but extension should still start - maybe retry api call..
      // return new tms.viewmodels.tmsViewModel(model);
    }

        
  }


  /**
   * Loop until TT is initialized then init extension
   */
  tms.app.bootstrapper = function () {
    var playlist = turntable.playlist;

    if (!playlist || !playlist.queue || !playlist.queue.attributes || !playlist.queue.attributes.songids || playlist.queue.attributes.songids.length === 0) {
      console.log("...");
      setTimeout(tms.app.bootstrapper, 250);
    } else { // initialize 
      $.when.apply(null, getTemplates()).done(init);
    } 
  };
})();


// GO!
$(function(){
  tms.app.bootstrapper();
});