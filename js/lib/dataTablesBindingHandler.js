// Datatables (jquery plugin) binding handler
(function($){
  ko.bindingHandlers.dataTable = {
    update: function(element, valueAccessor){
      var options = valueAccessor().options,
          data = valueAccessor().data();

      // create new datatable if needed. otherwise replace contents
      if (!$.fn.DataTable.fnIsDataTable(element) ) {
        options.aaData = data;
        $(element).dataTable(options);

        // TMS specific post-processing
        $("#DataTables_Table_0_filter label").replaceWith($("#DataTables_Table_0_filter label input"));
        $("#DataTables_Table_0_filter input").attr("placeholder", "Search");
      } else {
        var table = $(element).dataTable();
        table.fnClearTable();
        table.fnAddData(data);
      }
    }
  };
})(jQuery);