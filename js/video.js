const music = document.getElementById("bgMusic");

if(music){

music.pause();

}

const video=document.getElementById("loveVideo");

const button=document.getElementById("proposalBtn");

video.onended=function(){

  music.play().catch(() => {});
  
button.style.display="inline-block";

}

button.onclick=function(){

window.location.href="proposal.html";

}
