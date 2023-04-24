
            const slide = document.querySelectorAll(".slide");
            const slideInner = document.querySelector(".slider__inner");

            let index = 0;
            let viewIndex= 0;
            slideInner.style.transition = "all 0.6s";
            slideInner.style.transform = "translateY("+(-1536)+"px)"; // 초기값 설정
            setInterval(()=>{
                viewIndex = (index%slide.length)+1;
                if(viewIndex==0){
                    slideInner.style.transform = "translateY("+(-1536)+"px)" // 0이면 처음으로 돌아가기
                };
                console.log(-1900+(384*viewIndex),"____",viewIndex);
                slideInner.style.transform = "translateY("+(-1920+(384*viewIndex))+"px)"; //계산해서 -이동
                index++;
            },1000);
