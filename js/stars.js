const popup=document.getElementById("popup");

const popupTitle=document.getElementById("popupTitle");

const popupText=document.getElementById("popupText");

let opened=[];

document.querySelectorAll(".star").forEach(star=>{

star.onclick=function(){

const id=this.dataset.id;

this.classList.add("active");

if(!opened.includes(id))

opened.push(id);

switch(id){

case"1":

popupTitle.innerHTML="Reason One ❤️";

popupText.innerHTML="Write your first reason here.";

break;

case"2":

popupTitle.innerHTML="Reason Two ❤️";

popupText.innerHTML="Write your second reason here.";

break;

case"3":

popupTitle.innerHTML="My Secret Star ⭐";

popupText.innerHTML="Out of every star in the universe... I love YOU the most.";

break;

case"4":

popupTitle.innerHTML="100 Reasons ❤️";

let html="<ol>";

for(let i=1;i<=100;i++){

html+="<li>Reason "+i+"</li>";

}

html+="</ol>";

popupText.innerHTML=html;

break;

}

popup.style.display="flex";

};

});

document.getElementById("closeBtn").onclick=function(){

popup.style.display="none";

};

document.getElementById("futureBtn").onclick=function(){

if(opened.length<4){

alert("Have you clicked all the stars? ⭐");

return;

}

window.location.href="future.html";

};
