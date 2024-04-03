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

let inputValue = $("input").val();
console.log(inputValue);
$(".box-2").before("before text");
$(".box-2").after("after text");
$(".heading").prepend("Hello prepend");
$(".heading").append("Hello append");
$("input").remove();
// $(".box-3").empty();
$("h3").css({
    color: "red",
    fontSize: "42px",
});
$(".add-class").click(function () {
    $(".box-3").addClass("notun-box");
});

$(".remove-class").click(function () {
    $(".box-3").removeClass("notun-box");
});
let boxWidth = $(".box-4").width();
console.log(boxWidth);
