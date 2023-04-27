const allMusic = [

    {
        name : "1. hello",
        artist : "patric",
        img : "music_img01",
        audio : "1.mp3" 
    },{
        name : "1. nice to meet you",
        artist : "patric",
        img : "music_img02",
        audio : "2.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_img03",
        audio : "3.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_img04",
        audio : "4.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
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

let musicIndex = 2; //현재 음악 인덱스

//음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;            //뮤직이름
    musicArtist.innerText = allMusic[num-1].artist;        //뮤직아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;      //뮤직이미지
    musicView.alt = allMusic[num-1].name;                  //뮤직이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`; //뮤직파일

}
//


//재생버튼
const playMusic = () =>{
    playMusic();

}


//정지버튼
const pauseMusic = () =>{
    pauseMusic();

}

//이전 곡 듣기 버튼
const prevMusic = () =>{

    prevMusic();

}


//다음 곡 듣기 
const nextMusic = () =>{
    alert(nextMusic);

}


//플레이 버튼
musicPlay.addEventListener("click", () =>{
    playMusic();
})










window.addEventListener("load",() => {
    loadMusic(musicIndex);


    musicAudio.play();
})