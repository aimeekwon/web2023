const allMusic = [

    {
        name: "1. Surfin' USA",
        artist: "The Beach Boys",
        img: "music_img01",
        audio: "music01"
    }, {
        name: "2. Wipe Out",
        artist: "The Surfaris",
        img: "music_img02",
        audio: "music02"
    }, {
        name: "3. hello",
        artist: "patric",
        img: "music_img03",
        audio: "music03"
    }, {
        name: "4. hello",
        artist: "patric",
        img: "music_img04",
        audio: "music04"
    }, {
        name: "5. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music01"
    }, {
        name: "6. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music02"
    }, {
        name: "7. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music03"
    }, {
        name: "8. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music04"
    }, {
        name: "9. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music01"
    }, {
        name: "10. hello",
        artist: "patric",
        img: "music_view01",
        audio: "music02"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");

const musicListBtn = musicWrap.querySelector("#control-list");
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicWrap.querySelector(".music__list ul");
const musicListClose = musicWrap.querySelector(".music__list h3 .close");

let musicIndex = 1; //현재 음악 인덱스

//음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num - 1].name;            //뮤직이름
    musicArtist.innerText = allMusic[num - 1].artist;        //뮤직아티스트
    musicView.src = `img/${allMusic[num - 1].img}.png`;      //뮤직이미지
    musicView.alt = allMusic[num - 1].name;                  //뮤직이미지 alt
    musicAudio.src = `audio/${allMusic[num - 1].audio}.mp3`; //뮤직파일
};
//재생
const playMusic = () => {
    musicWrap.classList.add("paused");//정지속성 주기
    musicPlay.setAttribute("title", "정지");//속성바꾸기
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};
//정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");//정지속성 지우기
    musicPlay.setAttribute("title", "재생");//속성바꾸기
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();//자바스크립트 속성 : 정지기능
};
//이전곡 듣기 버튼
const prevMusic = () => {
    musicIndex--;//이전곡으로
    if (musicIndex == 0) musicIndex = allMusic.length;
    //(삼항연산자)musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;

    loadMusic(musicIndex);//플레이되는 음악
    playMusic();//음악재생
};
//다음곡 듣기 
const nextMusic = () => {
    musicIndex++;
    if (musicIndex == allMusic.length + 1) musicIndex = 1;
    //(삼항연산자) musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++

    loadMusic(musicIndex);
    playMusic();
};

//뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {//e : 리액트 , 
    console.log(e);
    const currentTime = e.target.currentTime; //현재 재생되는 시간
    const duration = e.target.duration;       //오디오의 총길이
    let progressWidth = (currentTime / duration) * 100;


    musicProgressBar.style.width = `${progressWidth}%`;
    //전체길이에서 현재진행되는 시간
    //console.log(currentTime); //시간 가져옴

    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    //진행시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin} : ${currentSec}`;
});

//진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth; //진행바 전체길이
    let clickedOffsetX = e.offsetX;  //진행바를 기준으로 측정되는 x좌표값
    let songDuration = musicAudio.duration;

    //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
})


//반복버튼
musicRepeat.addEventListener("click", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr){
        case "repeat" :

        musicRepeat.setAttribute("class", "repeat_one");
        musicRepeat.setAttribute("title", "한곡반복");
        break;
        case "repeat_one" :

        musicRepeat.setAttribute("class", "shuffle");
        musicRepeat.setAttribute("title", "랜덤반복");
        break;
        case "shuffle" :

        musicRepeat.setAttribute("class", "repeat");
        musicRepeat.setAttribute("title", "전체반복");
        break;
    }
})

//오디오가 끝나면
musicAudio.addEventListener("ended", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr){
        case "repeat":
            nextMusic();
        break;
        case "repeat_one":
            playMusic();
        break;

        case "shuffle":

        let randomIndex = Math.floor(Math.random() * allMusic.length + 1);    // 랜덤 인덱스 생성
            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex == randomIndex);
            musicIndex = randomIndex;   // 현재 인덱스를 랜덤 인덱스로 변경
            loadMusic(musicIndex);
            playMusic();
            break;
    }
})


//플레이 버튼
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");//음악재생중
    isMusicPaused ? pauseMusic() : playMusic();
});
//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});
//다음곡 버튼클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});



//뮤직리스트 버튼

musicListBtn.addEventListener("click", () => {
    musicList.classList.add("show");
});

musicListClose.addEventListener("click", () => {
    musicList.classList.remove("show");
});


// 뮤직 리스트 구현하기
for(let i=0; i<allMusic.length; i++){
    let li = `
        <li>
            <span class="img">
                <img class="img" src="img/${allMusic[i].img}.png" alt=${allMusic[i].name}>
            </span>
            <span class="title">
                <strong>${allMusic[i].name}</strong>
                <em>${allMusic[i].artist}</em>
                <audio class="${allMusic[i].audio}" src="audio/${allMusic[i].audio}.mp3"></audio>
            </span>
            <span class="audio-duration" id="${allMusic[i].audio}">3:04</span>
        </li>
    `;
    // musicListUl.innerHTML += li;
    musicListUl.insertAdjacentHTML("beforeend", li);
    // 리스트에 음악 시간 불러오기
    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`);   //리스트에서 시간을 표시할 선택자
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);           //리스트에서 오디오 파일 선택
    liAudio.addEventListener("loadeddata", () => {
        let audioDuration = liAudio.duration;
        // console.log(audioDuration)
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
    });
}






window.addEventListener("load", () => {
    loadMusic(musicIndex);
    musicAudio.play();
});
// 여름재즈 10
// Summertime - Ella Fitzgerald & Louis Armstrong
// My Funny Valentine - Chet Baker
// Fly Me to the Moon - Frank Sinatra
// Take Five - Dave Brubeck
// Desafinado - Stan Getz & João Gilberto
// Night and Day - Cole Porter
// The Girl from Ipanema - Astrud Gilberto, João Gilberto, Stan Getz
// Blue Skies - Ella Fitzgerald
// Corcovado - Antonio Carlos Jobim
// Autumn Leaves - Cannonball Adderley

//surf10
// Surfin' USA - The Beach Boys
// Wipe Out - The Surfaris
// California Girls - The Beach Boys
// Surf City - Jan & Dean
// Good Vibrations - The Beach Boys
// Kokomo - The Beach Boys
// Little Deuce Coupe - The Beach Boys
// Pipeline - The Chantays
// Surfing Safari - The Beach Boys
// Fun, Fun, Fun - The Beach Boys