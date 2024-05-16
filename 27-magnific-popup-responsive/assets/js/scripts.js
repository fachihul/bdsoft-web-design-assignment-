$(document).ready(function () {
    // Mobile menu
    $(".mobile-menu-toggle").click(function name(params) {
        $(".mobile-menu").slideToggle();
    });
    $("mobile-menu nav li.has-submenu").click(function () {
        $(this).children().slideToggle();
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
