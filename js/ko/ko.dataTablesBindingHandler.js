// Datatables (jquery plugin) binding handler
(function($){
  ko.bindingHandlers.dataTable = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
      var previewActive = false;

      // activate song preview
      function previewStarted (position) {
        var $btnBar = $("#songList div[data-pos=" + position + "]");
        if ($btnBar.size() > 0) {
          $btnBar.addClass("previewActive").find(".playPause").attr("title", "Stop song preview.");
        }
        previewActive = true;
      }

      // deactivate song preview
      function previewEnded (position) {
        var $btnBar = $("#songList div[data-pos=" + position + "]");
        if ($btnBar.size() > 0) {
          if ($btnBar.hasClass("previewActive")) {
            $btnBar.removeClass("previewActive").find(".playPause").attr("title", "Play song preview.");
          }
        }
        previewActive = false;
      }

      /* selecting song rows */

      function selectToggle (event) {
        var $row = $(event.target).parents("tr"),
            position = parseInt($row.find("[data-pos]").attr("data-pos"), 10);

        if ($row.hasClass("selected")) {
          $row.removeClass("selected");
          viewModel.rowSelectionToggle(position, false);
        } else {
          $row.addClass("selected");
          viewModel.rowSelectionToggle(position, true);
        }
      }

      viewModel.clearSelectedCallback = function () {
        $("#songList .selected").removeClass("selected");  
      };
      
      /* button events */

      function removeClick (event) {
        event.stopPropagation();
        
        var position = parseInt($(event.target).parents("[data-pos]").attr("data-pos"), 10);
        viewModel.removeSongsFromPlaylist([position]);
      }

      function upBtnClick (event) {
        event.stopPropagation();

        var position = parseInt($(event.target).parents("[data-pos]").attr("data-pos"), 10);
        viewModel.sendSongToTop(position);
      }

      function downBtnClick (event) {
        event.stopPropagation();

        var position = parseInt($(event.target).parents("[data-pos]").attr("data-pos"), 10);
        viewModel.sendSongToBottom(position);
      }

      function playPauseBtnClick (event) {
        event.stopPropagation();

        var position = parseInt($(event.target).parents("[data-pos]").attr("data-pos"), 10);
        if (!previewActive) {
          $(this).attr("title", "Loading preview...");  
        }

        viewModel.toggleSongPreview(position, previewStarted, previewEnded);
      }

      $(element)
        .on("click", ".toTop", upBtnClick)
        .on("click", ".toBottom", downBtnClick)
        .on("click", ".playPause", playPauseBtnClick)
        .on("click", ".remove", removeClick)
        .on("click", "tr", selectToggle);
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
            parseInt(i, 10) + 1,
            data[i].artist(),
            data[i].song(),
            data[i].album(),
            data[i].genre(),
            data[i].formatedLength()
          ]);
        }

        // add action buttons to dataset with some metadata to support the events
        for (var x in tableData) {
          if (viewModel.listSource() === "turntablesearch") {
            tableData[x].push("<div data-pos='" + (tableData[x][0] -1) + "'><div class='playPause' title='Play song preview.'><div></div></div><div class='ticker'></div></div>");
          } else {
            tableData[x].push("<div class='songFlyout' data-pos='" + (tableData[x][0] -1) + "'><div class='playPause' title='Play song preview.'><div></div></div><div class='toTop' title='Move to top.'><div></div></div><div class='toBottom' title='Move to bottom.'><div></div></div><div class='remove' title='Remove song.'><div></div></div><div class='ticker'></div></div>");           
          }
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
          $("#DataTables_Table_0_filter input").attr("placeholder", "Search Playlist");
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