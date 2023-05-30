function start() {
    //시간 나타내기
    function printTime() {
        const time = document.querySelector(".time");
        const now = new Date();

        time.innerHTML =
            now.getFullYear() +
            "년 " +
            (now.getMonth() + 1) +
            "월 " +
            now.getDate() +
            "일 " +
            now.getHours() +
            "시 " +
            now.getMinutes() +
            "분 ";
        setTimeout(printTime, 1000);
    }
    // function printTime() {
    //     const clock = document.querySelector("#header .time");
    //     let now = new Date();
    //     clock.innerHTML = now.getFullYear() + "년 " +
    //     (now.getMonth()+1) + "월 " +
    //     now.getDate() + "일 " +
    //     now.getHours() + "시 " +
    //     now.getMinutes() + "분 " +
    //     now.getSeconds() + "초 ";
    //     setTimeout("printTime()", 1000);
    // };
    function printAgent() {
        // 운영체제 정보 알아내기
        let os = navigator.userAgent.toLowerCase();
        let sw = screen.width;
        let sh = screen.height;
        let info = document.querySelector(".info");
        if (os.indexOf("windows") >= 0) {
            info.innerHTML =
                "현재 윈도우를 사용하고 있으며, 화면 크기는 " +
                sw +
                "x" +
                sh +
                " 입니다.";
        } else if (os.indexOf("macintosh") >= 0) {
            info.innerHTML =
                "현재 맥을 사용하고 있으며, 화면 크기는 " +
                sw +
                "x" +
                sh +
                " 입니다.";
        } else if (os.indexOf("iphone") >= 0) {
            info.innerHTML =
                "현재 아이폰을 사용하고 있으며, 화면 크기는 " +
                sw +
                "x" +
                sh +
                " 입니다.";
        } else if (os.indexOf("android") >= 0) {
            info.innerHTML =
                "현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 " +
                sw +
                "x" +
                sh +
                " 입니다.";
        }
    }

    document.querySelector(".icon1").addEventListener("click", () => {
        let audio = new Audio("audio/1.mp3");
        audio.play();
    });
    document.querySelector(".icon2").addEventListener("click", () => {
        let audio = new Audio("audio/2.mp3");
        audio.play();
    });
    document.querySelector(".icon3").addEventListener("click", () => {
        let audio = new Audio("audio/3.mp3");
        audio.play();
    });
    document.querySelector(".icon4").addEventListener("click", () => {
        let audio = new Audio("audio/4.mp3");
        audio.play();
    });

    // $( "#draggable3" ).draggable({ containment: ".icon_box", scroll: false });
    $(".icon1").draggable({
        containment: ".icon_box",
        scroll: false,
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse01.png");
            $("#header").css("background-color", "#ff5c5c87");
        },
    });
    $(".icon2").draggable({
        containment: ".icon_box",
        scroll: false,
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse02.png");
            $("#header").css("background-color", "#4d7bff87");
        },
        drag: function () {
            $(".info").html("뮤직을 드래그 중입니다.");
        },
        stop: function () {
            $(".info").html("뮤직 드래그가 끝났습니다.");
            $("#header").animate({ backgroundColor: "#F08E33" });
            setInterval(printAgent, 5000);
        },
    });
    $(".icon3").draggable({
        containment: ".icon_box",
        scroll: false,
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse03.png");
            $("#header").css("background-color", "#7fff5b78");
        },
    });
    $(".icon4").draggable({
        containment: ".icon_box",
        scroll: false,
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse04.png");
            $("#header").css("background-color", "#ffff5091");
        },
    });
    $(".music__wrap").draggable({
        containment: "#contents",
        scroll: false,
        // start: function() {
        //    $(".cursor img").attr("src", "images/game_mouse04.png")

        //   },
    });
    // 페이지 로딩 후
    window.onload = function () {
        window.addEventListener("mousemove", (e) => {
            gsap.to(".cursor", {
                duration: 0,
                left: e.pageX - 7,
                top: e.pageY - 10,
            });
        });
        printTime(); //오른쪽 상단 시간
        printAgent(); //하단 중앙에
    };
}

export default start;
