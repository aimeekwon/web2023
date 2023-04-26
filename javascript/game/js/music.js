const allMusic = [

    {
        name : "1. hello",
        artist : "patric",
        img : "music_img01",
        audio : "music_audio01.mp3" 
    },{
        name : "1. nice to meet you",
        artist : "patric",
        img : "music_img02",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_img03",
        audio : "music_audio01.mp3" 
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_img04",
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
    },{
        name : "1. hello",
        artist : "patric",
        img : "music_view01",
        audio : "music_audio01.mp3" 
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p")
const musicView = musicWrap.querySelector(".music__view .image img")
const musicAudio = musicWrap.querySelector("#main-audio")

let musicIndex = 4; //현재 음악 인덱스

//음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;            //뮤직이름
    musicArtist.innerText = allMusic[num-1].artist;        //뮤직아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;      //뮤직이미지
    musicView.alt = allMusic[num-1].name;                  //뮤직이미지 alt
     musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`; //뮤직파일
}

window.addEventListener("load",() => {
    loadMusic(musicIndex);


    musicAudio.play();
})