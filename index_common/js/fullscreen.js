$(document).ready(function () {
    hsize = $(window).height();
    $("#main-visual").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#main-visual").css("height", hsize + "px");
});
