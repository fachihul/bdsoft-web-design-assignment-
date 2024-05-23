$(document).ready(function () {
    // Mobile menu
    $(".mobile-menu-toggle").click(function name(params) {
        $(".mobile-menu").slideToggle();
    });
    $(".mobile-menu nav li.has-submenu").click(function () {
        $(this).children("ul").slideToggle();
    });
    // Video Popup
    $(".video-btn a").magnificPopup({
        type: "iframe",
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com/",

                    src: "https://www.youtube.com/embed/%id%?autoplay=1",
                },
            },
        },
    });
});
// counter-up plugin
$(".counter").counterUp({
    delay: 10,
    time: 1000,
});
