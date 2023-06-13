$(function () {
    // 메뉴 : 하나씩 나오기
    $(".nav > li").mouseover(function () {
        $(".submenu").stop().slideDown(200);
    });
    $(".nav > li").mouseout(function () {
        $(".submenu").stop().slideUp(200);
    });

    // //슬라이드 : 페이드 효과
    // let currentIndex = 0;
    // // const $sliderWrap = $(".sliderWrap")
    // const $slider = $(".slider");
    // $slider.hide().first().show(); //모든 이미지 숨기고 첫번째 이미지 나타남
    // // $sliderWrap.append($slider.first().clone(true));
    // setInterval(function () {
    //     let nextIndex = (currentIndex + 1) % $slider.length;
    //     $slider.eq(currentIndex).fadeIn(300);
    //     $slider.eq(nextIndex).fadeOut(300);
    //     currentIndex = nextIndex;
    // }, 2000);
    // 슬라이더
    let currentIndex = 0;
    const $sliderWrap = $(".sliderWrap"); //이미지 부모 : 움직이는 영역
    const $slider = $(".slider"); //각각의 이미지
    const $sliderHeight = $slider.height(); //이미지 가로값
    $sliderWrap.append($slider.first().clone(true));
    setInterval(function () {
        currentIndex++; //현재 이미지를 1씩 증가
        $sliderWrap.animate({ marginTop: - $sliderHeight * currentIndex }, 600);
        if (currentIndex === $slider.length) {
            setTimeout(function () {
                $sliderWrap.animate({ marginTop: 0 }, 0);
                currentIndex = 0;
            }, 500);
        }
    }, 2000);
    // 탭 메뉴
    const tabBtn = $(".section__menu > a");
    const tabCont = $(".section__cont > ul");
    tabCont.hide().eq(0).show();
    tabBtn.on("click", function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});