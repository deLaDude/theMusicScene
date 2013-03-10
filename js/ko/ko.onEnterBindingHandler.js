ko.bindingHandlers.onEnter = {
    init: function(element, valueAccessor) {
        var value = valueAccessor();
        $(element).keypress(function(event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                value.call(ko.dataFor(this));
                return false;
            }
            return true;
        });
    }
};