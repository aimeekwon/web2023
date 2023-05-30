$(function () {
    // 메뉴 : 하나씩 나오기
    $(".nav > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    // //슬라이드 : 페이드 효과
    // let currentIndex = 0;
    // const $slider = $(".slider");
    // $slider.hide().first().show(); //모든 이미지 숨기고 첫번째 이미지 나타남
    // setInterval(function () {
    //     let nextIndex = (currentIndex + 1) % $slider.length;
    //     $slider.eq(currentIndex).fadeIn(3000);
    //     $slider.eq(nextIndex).fadeOut(3000);
    //     currentIndex = nextIndex;
    // }, 5000);
    // // 탭 메뉴

    //이미지슬라이드
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function () {
        currentIndex++;
        $(".sliderWrap").animate(
            { marginTop: -400 * currentIndex + "px" },
            600
        );

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".sliderWrap").animate({ marginTop: 0 }, 0);
                currentIndex = 0;
            });
        }
    }, 3000);
});
