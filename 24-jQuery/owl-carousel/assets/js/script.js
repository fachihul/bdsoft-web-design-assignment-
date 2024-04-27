$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 30,
        nav: true,
        navText: ["<button>Prev</button>", "<button>Next</button>"],
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
});
