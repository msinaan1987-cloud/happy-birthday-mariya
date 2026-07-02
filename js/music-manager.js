const audio = document.getElementById("bgMusic");

if(audio){

const savedSong = localStorage.getItem("currentSong");
const savedTime = localStorage.getItem("currentTime");

if(savedSong){

audio.src = savedSong;

}

audio.addEventListener("loadedmetadata",()=>{

if(savedTime){

audio.currentTime = parseFloat(savedTime);

}

audio.play().catch(()=>{});

});

setInterval(()=>{

localStorage.setItem("currentSong",audio.getAttribute("src"));

localStorage.setItem("currentTime",audio.currentTime);

},1000);

}

function changeMusic(song){

if(!audio) return;

audio.pause();

audio.src = song;

audio.currentTime = 0;

audio.play();

localStorage.setItem("currentSong",song);

localStorage.setItem("currentTime",0);

}
