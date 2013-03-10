// Mechanism for communicating between TT and extension using window events
(function () {
  function EventBus (subscriptions) {
    var self = this;

    self.subscriptions = subscriptions || [];

    // outbound message
    self.postMessage = function(eventName, data) {
      data = data || {};
      window.postMessage(JSON.stringify({ type: eventName, data: data }), "*");
    };

    // send a message that requires a response
    self.request = function (eventName, data, returnEventName) {
      data = data || {};

      var dfr = $.Deferred(),
          // create random name for callback to avoid collisions
          callbackName =  "callback" + Math.floor(1 + Math.random() * 10000000001);
          
          window[callbackName] = function(event) {  
            // needed to prevent parse errors from Facebook events 
            try {  
              var eventData = JSON.parse(event.data);
              if (eventData.type && (eventData.type == returnEventName)) {
                // dispose of listener when done
                window.removeEventListener("message", window[callbackName], false);
                
                // resolve and return
                dfr.resolve(eventData.data);
              }
            } catch (e) {}
          };

      // set up listener for response (inbound event)
      window.addEventListener("message", function(event) {
        window[callbackName](event);
      }, false);

      // trigger outbound event
      window.postMessage(JSON.stringify({ type: eventName, data: data }), "*");

      return dfr.promise();
    };


    function subscriptionCallback (event) {
      // needed to prevent parse errors from FB events 
      try {
        var eventData = JSON.parse(event.data);
        if (eventData.type && eventData.type.indexOf("tms") > -1) {
          for (var i in self.subscriptions) {
            if (eventData.type === self.subscriptions[i].name) {
              self.subscriptions[i].callback(eventData.data);
            }
          }
        }
      } catch (e) { }
    }

    // set up listener for subscriptions
    window.addEventListener("message", subscriptionCallback, false);
  }

  tms.EventBus = EventBus;
})();