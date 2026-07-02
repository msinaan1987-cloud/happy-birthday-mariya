const popup=document.getElementById("popup");

const title=document.getElementById("memoryTitle");

const text=document.getElementById("memoryText");

const opened=[];

const memories={

1:{
title:"Our First Memory ❤️",
text:"Write your memory here."
},

2:{
title:"The Funniest Moment 😂",
text:"Write your memory here."
},

3:{
title:"A Moment I'll Never Forget 💖",
text:"Write your memory here."
},

4:{
title:"One More Forever Memory 🌸",
text:"Write your memory here."
}

};

document.querySelectorAll(".gift").forEach(gift=>{

gift.onclick=function(){

const id=this.dataset.id;

this.innerHTML="🎀";

if(!opened.includes(id))

opened.push(id);

title.innerHTML=memories[id].title;

text.innerHTML=memories[id].text;

popup.style.display="flex";

if(opened.length===4){

document.getElementById("continueBtn").style.display="inline-block";

}

};

});

document.getElementById("closeMemory").onclick=function(){

popup.style.display="none";

};

document.getElementById("continueBtn").onclick=function(){

window.location.href="memory.html";

};
