(function () {
  ko.bindingHandlers.hoverintent = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var value = valueAccessor();
      $(element).hoverIntent({
        over: value, 
        timeout: 300,
        out: value
      });
    } 
  };
})();