//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var navOffset = $('.nav').height();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - navOffset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
