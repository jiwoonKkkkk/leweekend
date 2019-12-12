$(function () {
    $(".like").click(function () {
        $(this).toggleClass("on");
    })



    var count = 0;
    $(".cart").click(function () {
        count++;
        $(".count").text(count);
    })

    $(".col1").mouseover(function () {
        $(".co1").stop().fadeIn(300);
    })
    $(".col1").mouseout(function () {
        $(".co1").stop().fadeOut(300);
    })

    $(".col2").mouseover(function () {
        $(".co2").stop().fadeIn(300);
    })
    $(".col2").mouseout(function () {
        $(".co2").stop().fadeOut(300);
    })

    $(".col3").mouseover(function () {
        $(".co3").stop().fadeIn(300);
    })
    $(".col3").mouseout(function () {
        $(".co3").stop().fadeOut(300);
    })
    $(".side").mouseover(function () {
        $("#pick").css("display", "none");
        $("#m-line").css("display", "none");
    })
    $(".side").mouseout(function () {
        $("#pick").css("display", "block");
        $("#m-line").css("display", "block");
    })

   

})
