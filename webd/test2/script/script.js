$(function(){
    // 메뉴 : 하나씩 나오기
    $(".menu > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".menu > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    //슬라이드 : 페이드 효과
    let currentIndex = 0;
    const $slide = $(".slide");
    $slide.hide().first().show();  //모든 이미지 숨기고 첫번째 이미지 나타남
    setInterval(function(){
        let nextIndex = (currentIndex + 1) % $slide.length;
        $slide.eq(currentIndex).fadeOut(1200);
        $slide.eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    }, 3000)
    // 탭 메뉴



        //이미지슬라이드
        // let currentIndex = 0;
      
        // $(".slide__inner").append($(".slide").first().clone(true));
    
        // setInterval(function(){
        //     currentIndex++;
        //     $(".slide__inner").animate({marginLeft: -100*currentIndex+ "%" } ,600)
        
        //     if(currentIndex==3){
        //         setTimeout(function(){
        //             $(".slide__inner").animate({marginLeft: 0}, 0);
        //             currentIndex = 0;
        //         })
        //     }
        // },3000)
});