$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

    var myElement = $('#banner'); // the element to act on if viewable
    $(window).scroll(function() {
        if(isScrolledIntoView(myElement)) {
            $('#banner').css("visibility", "hidden");
        } else {
            $('#banner').css("visibility", "visible");
        }
    });
});