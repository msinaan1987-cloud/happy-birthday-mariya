document.querySelectorAll(".lantern").forEach(lantern=>{

lantern.onclick=function(){

alert(this.dataset.text);

};

});

const secret="I LOVE YOU SINAAN FOR A 100 YEARS";

const popup=document.getElementById("letterPopup");

const text=document.getElementById("futureLetter");

const letter=

`Write your future letter here.`;

document.getElementById("unlockBtn").onclick=function(){

const value=document.getElementById("codeInput").value.trim();

if(value===secret){

popup.style.display="flex";

text.innerHTML="";

let i=0;

const timer=setInterval(()=>{

text.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},30);

}

else{

alert("That's not the secret sentence ❤️");

}

};

document.getElementById("closeLetter").onclick=function(){

popup.style.display="none";

};

document.getElementById("nextBtn").onclick=function(){

window.location.href="love-letter.html";

};
