(function () {
  function toggle(value, element) {
    if (value) {
      $(element).addClass("active");
    } else {
      $(element).removeClass("active");
    }
  }

  ko.bindingHandlers.yourBindingName = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      toggle(valueAccessor(), element);
    } 
  };
})();