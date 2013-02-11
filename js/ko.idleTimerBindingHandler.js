(function () {
  ko.bindingHandlers.idleTimer = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      // var data = valueAccessor();

      // $(element).idleTimer(10000);
        
      // $(element).bind("idle.idleTimer", function(){
      //   data.isIdle(true);  
      // });
        
      // $(element).bind("active.idleTimer", function(){
      //   data.isIdle(false);
      // });
    }, update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) { 
      var data = valueAccessor();
      
      // only if acitve and not idle
      if (data.isOpen() && !data.isIdle()) {
        $(element).idleTimer(90000); // 1.5mins
        data.isIdle(false);
        
        $(element).bind("idle.idleTimer", function(){
          viewModel.isContentIdle(true);  
        });
          
        $(element).bind("active.idleTimer", function(){
          viewModel.isContentIdle(false);
        });
      }    
    }
  };
})();