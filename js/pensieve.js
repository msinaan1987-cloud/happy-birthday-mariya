const memories={

award:{

title:"The Award Ceremony",

text:"You wore a black dress.Black nail polish.And I couldn't stop looking at you."

},

cycle:{

title:"Cycle Ride",

text:"I rode all the way just to see you.Only for a few seconds.Yet it felt completely worth it."

},

sharpener:{

title:"Sharpener Cut",

text:"Nobody noticed.Nobody asked.But you did.And I never forgot it."

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
