(function () {
  ko.bindingHandlers.idleTimer = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var data = valueAccessor();

      // only start timer if acitve
      if (data.isOpen()) {
        $(element).idleTimer(1000*10); 
      }  

      $(element).bind("idle.idleTimer", function(){
        data.isIdle(true);  
      });
          
      $(element).bind("active.idleTimer", function(){
        data.isIdle(false);
      });
    }
  };
})();