ko.bindingHandlers.hasfocus.update = function(element, valueAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor());
    setTimeout(function() {
        if (value
            && element.offsetWidth && element.offsetHeight
            && document.activeElement && document.activeElement != element)
        {
            element.focus();
            ko.utils.triggerEvent(element, "focusin"); // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
        }
    });
};