$(function () {
    //이미지슬라이드
    let currentIndex = 0;
    $(".slideWrap").append($(".slider").first().clone(true));

    setInterval(function () {
        currentIndex++;
        $(".sliderWrap").animate(
            { marginLeft: -100 * currentIndex + "%" },
            600
        );

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".sliderWrap").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            });
        }
    }, 3000);

    //메뉴
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    //팝업
    $(".pupup-btn").click(function () {
        $(".popup-view").show();
    });
    $(".popup-close").click(function () {
        $(".popup-view").hide();
    });
});
