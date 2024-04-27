$(function () {
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            '<button  class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:
            '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // Isotope-Filter-plugin
    // init Isotope
    var $grid = $(".grid").isotope({
        // options
    });
    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });
    // Pie-Chart-Plugin
    $(".circle-progress").easyPieChart({
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "transparent",
        lineWidth: "10",
    });
});
