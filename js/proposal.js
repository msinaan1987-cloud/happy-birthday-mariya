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

document.getElementById("yesBtn").onclick = function(){

    question.style.display = "none";

    confettiBlast();

    document.getElementById("thankYou").style.display = "flex";

    setTimeout(()=>{

        document.getElementById("thankYou").style.display = "none";

        second.style.display = "block";

    },3000);

};

document.getElementById("yes2").onclick=function(){

window.location.href="photo.html";

};

document.getElementById("no2").onclick=function(){

window.location.href="photo.html";

};

function confettiBlast() {

    confetti({

        particleCount: 180,

        spread: 120,

        startVelocity: 45,

        origin: { y: 0.65 }

    });

}
