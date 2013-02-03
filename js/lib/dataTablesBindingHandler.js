// Datatables binding handles tailored for TMS
(function($){
  ko.bindingHandlers.dataTable = {
    update: function(element, valueAccessor){
      var songs = valueAccessor().data(),
          options = valueAccessor().options,
          tableData = [];

      // transfer songs into a dataTables-consumable format
      for (var i in songs) {
        tableData.push([
          songs[i].queuePosition,
          songs[i].artist(),
          songs[i].song(),
          songs[i].album(),
          songs[i].genre(),
          songs[i].formatedLength()
        ]);
      }
      
      if (!$.fn.DataTable.fnIsDataTable(element) ) {
        options.aaData = tableData;
        $(element).dataTable(options);
        $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
        $("#DataTables_Table_0_filter input").attr("placeholder", "Library Search");
      } else {
        var table = $(element).dataTable();
        table.fnClearTable();
        table.fnAddData(tableData);
      }
    }
  };
})(jQuery);