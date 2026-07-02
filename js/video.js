const video=document.getElementById("loveVideo");

const button=document.getElementById("proposalBtn");

video.onended=function(){

button.style.display="inline-block";

}

button.onclick=function(){

window.location.href="proposal.html";

}
