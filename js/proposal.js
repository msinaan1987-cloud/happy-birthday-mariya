const countdown=document.getElementById("countdown");

const question=document.getElementById("questionBox");

const second=document.getElementById("secondQuestion");

const no=document.getElementById("noBtn");

let n=3;

const timer=setInterval(()=>{

n--;

if(n>0){

countdown.innerHTML=n;

}

else{

clearInterval(timer);

countdown.style.display="none";

question.style.display="block";

}

},1000);

no.addEventListener("mouseenter",moveButton);
no.addEventListener("click",moveButton);

function moveButton(){

const x=Math.random()*220-110;

const y=Math.random()*220-110;

no.style.transform=`translate(${x}px,${y}px)`;

}

document.getElementById("yesBtn").onclick=function(){

question.style.display="none";

confetti();

setTimeout(()=>{

second.style.display="block";

},1200);

};

document.getElementById("yes2").onclick=function(){

window.location.href="photo.html";

};

document.getElementById("no2").onclick=function(){

window.location.href="photo.html";

};

function confetti(){

for(let i=0;i<80;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize="24px";

c.style.transition="3s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},50);

setTimeout(()=>{

c.remove();

},3000);

}

}
