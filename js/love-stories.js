const stories=[

{

title:"Snape ❤️ Lily",

text:"Severus Snape loved Lily Potter from childhood until his very last breath. His love remained even when he knew it could never be returned. It was a love built on sacrifice, loyalty, and memories."

},

{

title:"Harry ❤️ Ginny",

text:"Harry and Ginny grew together through courage, friendship, and difficult times. They reminded everyone that even after darkness, happiness can bloom."

},

{

title:"Ron ❤️ Hermione",

text:"Ron and Hermione argued, laughed, protected each other, and slowly realized that love had always been quietly growing between them."

},

{

title:"Our Story ❤️",

text:"Their stories are beautiful... but I don't want ours to be remembered as someone else's reflection. I want people to look at us one day and say... 'That's Mariya and Sinaan's story.'"

}

];

let current=0;

const title=document.getElementById("title");

const text=document.getElementById("text");

const next=document.getElementById("nextBtn");

const pensieve=document.getElementById("pensieveBtn");

function loadStory(){

title.style.opacity=0;

text.style.opacity=0;

setTimeout(()=>{

title.innerHTML=stories[current].title;

text.innerHTML=stories[current].text;

title.style.opacity=1;

text.style.opacity=1;

},300);

if(current===stories.length-1){

next.style.display="none";

pensieve.style.display="inline-block";

}

}

loadStory();

next.onclick=function(){

current++;

loadStory();

}

pensieve.onclick=function(){

window.location.href="pensieve.html";

}
