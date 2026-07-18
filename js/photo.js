const popup=document.getElementById("popup");

const title=document.getElementById("memoryTitle");

const text=document.getElementById("memoryText");

const opened=[];

const memories={

1:{
title:"The Memory Literally Stopped My Haert ❤️",
text:"Do You Remember that Anandu Proposed you??For a second i thought I'm Dead.But you said you rejected. That made me feel Alive again."
},

2:{
title:"The Day I Realized Your Beauty 😂",
text:"That award ceremony.You kept saying you weren't beautiful.I spent the entire day thinking the opposite."
},

3:{
title:"A Moment I'll Never Forget 💖",
text:"When i rode the cycle To your house.I didn't Know Where would I End up.But i wanted to see you Soo Badly."
},

4:{
title:"One More Forever Memory 🌸",
text:"A few seconds seeing you was enough to make an entire day better."
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
