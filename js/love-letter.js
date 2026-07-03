const letter=`

Write your actual love letter here.

`;

const target=document.getElementById("letter");

let i=0;

const timer=setInterval(()=>{

target.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

document.getElementById("videoBtn").style.display="inline-block";

}

},30);

document.getElementById("videoBtn").onclick=function(){

window.location.href="video.html";

}
