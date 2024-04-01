$(".hide").click(function () {
    $("h2").hide();
});
$(".show").click(function () {
    $("h2").show();
});
$(".toggle").click(function () {
    $("h2").toggle();
});
$(".fadein").click(function () {
    $("h1").fadeIn();
});
$(".fadeout").click(function () {
    $("h1").fadeOut();
});
$(".fadetoggle").click(function () {
    $("h1").fadeToggle();
});
$(".slide-up").click(function () {
    $(".box").slideUp();
});
$(".slide-down").click(function () {
    $(".box").slideDown();
});
$(".slide-toggle").click(function () {
    $(".box").slideToggle();
});

function newFunc() {
    alert("animation done");
}
$(".animate").click(function () {
    $(".box").animate(
        {
            left: "200px",
            height: "300px",
            width: "200px",
        },
        5000,
        newFunc
    );
});
$(".chain").click(function () {
    $(".box").slideUp().slideDown();
});
$(".chain").click(function name(params) {
    
});
