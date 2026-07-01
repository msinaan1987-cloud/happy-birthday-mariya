const memories={

award:{

title:"The Award Ceremony",

text:"Write your memory of the award ceremony here."

},

cycle:{

title:"Cycle Ride",

text:"Write your cycle ride memory here."

},

sharpener:{

title:"Sharpener Cut",

text:"Write your sharpener cut memory here."

}

};

const popup=document.getElementById("popup");

const title=document.getElementById("popupTitle");

const text=document.getElementById("popupText");

const continueBtn=document.getElementById("continueBtn");

let opened=0;

document.querySelectorAll(".orb").forEach(orb=>{

orb.onclick=function(){

const key=this.dataset.memory;

title.innerHTML=memories[key].title;

text.innerHTML=memories[key].text;

popup.style.display="flex";

if(!this.classList.contains("done")){

this.classList.add("done");

this.style.boxShadow="0 0 50px gold";

opened++;

}

if(opened===3){

continueBtn.style.display="inline-block";

}

}

});

document.getElementById("closePopup").onclick=function(){

popup.style.display="none";

}

continueBtn.onclick=function(){

window.location.href="stars.html";

}
