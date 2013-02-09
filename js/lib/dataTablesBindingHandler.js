// Datatables (jquery plugin) binding handler
(function($){
  ko.bindingHandlers.dataTable = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
      var previewActive = false;

      // activate song preview
      function previewStarted (position) {
        var $btn = $("div[data-pos=" + position + "]");
        if ($btn.size() > 0) {
          $btn.parents("tr").addClass("previewActive").find(".playPause").attr("title", "Stop song preview.");
        }
        previewActive = true;
      }

      // deactivate song preview
      function previewEnded (position) {
        var $btn = $("div[data-pos=" + position + "]");
        if ($btn.size() > 0) {
          if ($btn.parents("tr").hasClass("previewActive")) {
            $btn.parents("tr").removeClass("previewActive").find(".playPause").attr("title", "Play song preview.");
          }
        }
        previewActive = false;
      }

      /* button events */

      function upBtnClick (event) {
        var position = $(event.target).parents("[data-pos]").attr("data-pos");
        viewModel.sendSongToTop(position);
      }

      function downBtnClick (event) {
        var position = $(event.target).parents("[data-pos]").attr("data-pos");
        viewModel.sendSongToBottom(position);
      }

      function playPauseBtnClick (event) {
        var position = $(event.target).parents("[data-pos]").attr("data-pos");
        if (!previewActive) {
          $(this).attr("title", "Loading preview...");  
        }

        viewModel.toggleSongPreview(position, previewStarted, previewEnded);
      }

      $(element).find(".toTop").live("click", upBtnClick).end()
                .find(".toBottom").live("click", downBtnClick).end()
                .find(".playPause").live("click", playPauseBtnClick).end();
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel){
      var options = valueAccessor().options,
          data = valueAccessor().data(),
          tableData = [],
          table = $(element),
          songPosition;

      // set scroll stat params
      table.data("scrollPos", table.parents(".dataTables_scrollBody").scrollTop());
      table.data("resetScrollPos", true);

      if (data[0] !== "paused") {
        // format data for data tables 
        for (var i in data) {
          tableData.push([
            data[i].queuePosition(),
            data[i].artist(),
            data[i].song(),
            data[i].album(),
            data[i].genre(),
            data[i].formatedLength()
          ]);
        }

        // add action buttons to dataset
        for (var x in tableData) {
          songPosition = tableData[x][0];
          tableData[x].push("<div data-pos='" + songPosition + "'><div class='toTop' title='Move to top.'><div></div></div><div class='toBottom' title='Move to bottom.'><div></div></div><div class='playPause' title='Play song preview.'><div></div></div></div>");           
        }

        // create new datatable if needed. otherwise replace contents
        if (!$.fn.DataTable.fnIsDataTable(element) ) { 
          // add data to options
          options.aaData = tableData;

          // in order to reset the scroll position after updating we have to 
          //  do some funky things as a result of using the Scroller addon for performance
          options.fnDrawCallback = function( oSettings ) {
            // if we don't set our own flag we will interfere with Scroller
            if (table.data("resetScrollPos")) {
              table.data("resetScrollPos", false);               
              // if we don't add a delay it won't set the scroll position
              setTimeout(function () {
                table.parents(".dataTables_scrollBody").scrollTop(table.data("scrollPos"));          
              }, 1);
            } 
          };
  
           // draw table
          table.dataTable(options);

          // custom header adjustments
          $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
          $("#DataTables_Table_0_filter input").attr("placeholder", "Search");
        } else {
          // re-draw table
          var dt = table.dataTable();
          dt.fnClearTable();
          dt.fnAddData(tableData);     
        }
      }
    }
  };
})(jQuery);