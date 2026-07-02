changeMusic("../assets/music/harry-potter-love-theme.mp3");

const pages=[

`"It all started on the day you came and sat behind my bench.",

"Looking back now, it feels like such a small moment.",

"But somehow, it changed everything.",

"From that day on, things moved so fast.",

"I never imagined that the girl sitting behind me...",

"Would become someone I could talk to for hours without ever getting bored.",

"Little by little, you became a part of my everyday life.",

"You laughed at my silly jokes.",

"Even the ones that weren't funny.",

"You listened to me whenever I had something to say.",

"And somehow...",

"You always knew how to comfort me whenever I needed it.",

"Those moments may have seemed ordinary.",

"But they meant so much to me.",

"You made me happier than you probably ever realized.",

"There is one memory that has stayed in my heart all these years.",

"And I don't know if you even remember it.",

"Back then, my friends and I used to play football with a sharpener during school.",

"One morning, while we were playing...",

"I got a cut on my leg from its blade.",

"It hurt.",

"But what hurt more was that nobody seemed to care.",

"Not even my friends asked me what happened.",

"But you did.",

"You were the first person to notice.",

"You were the first person to ask me...",

"'What happened?'",

"You even asked if I wanted to wrap it up.",

"It might have seemed like a small act of kindness to you.",

"But to me...",

"It was never small.",

"At that moment...",

"I felt seen.",

"I felt cared for.",

"And I felt important.",

"That memory still lives in my heart.",

"Because it was one of the first times I saw how beautiful your heart truly was.",

"As time passed...",

"My feelings for you only grew stronger.",

"Somewhere between our conversations...",

"Your laughter.",

"Your kindness.",

"And all those little moments we shared.",

"I found myself falling deeply in love with you.",

"And the funny thing is...",

"I knew it.",

"I knew exactly how I felt.",

"But I was terrified of telling you.",

"I even prepared a letter.",

"A letter that contained everything I wanted to say.",

"Every feeling.",

"Every hope.",

"Every piece of my heart.",

"But every time I thought about giving it to you...",

"Fear won.",

"I wasn't brave enough back then.",

"I wish I had been.",

"But I wasn't.",

"And then...",

"The last day of school arrived.",

"Out of all the memories from that day.",

"One moment shines brighter than the rest.",

"You gave me a Dairy Milk.",

"To anyone else...",

"It might have looked like a simple chocolate.",

"But to me...",

"It was never just a chocolate.",

"It became a memory.",

"A beautiful memory.",

"A memory I carried with me long after school ended.",

"And even now.",

"After all this time.",

"When I look back at where everything began.",

"I realize that some of the most beautiful chapters of my life...",

"Started with a girl.",

"A girl who simply came and sat behind my bench."
`,

`"I thought I could get over your absence.",

"I was wrong.",

"Every day felt a little quieter.",

"I kept opening our chats.",

"I kept rereading old messages.",

"I rode my cycle just to see you once.",

"Those few seconds made my entire day.",

"That's when I realized how much you meant to me. ❤️"

`,

`june 7
`

];

let current=0;

const text=document.getElementById("storyText");

const prev=document.getElementById("prevBtn");

const next=document.getElementById("nextBtn");

function typeWriter(content){

text.innerHTML="";

let i=0;

const timer=setInterval(()=>{

text.innerHTML+=content.charAt(i);

i++;

if(i>=content.length){

clearInterval(timer);

}

},25);

}

function loadPage(){

typeWriter(pages[current]);

prev.style.visibility=current===0?"hidden":"visible";

next.innerText=current===pages.length-1?

"Let's See The Stories Of Others"

:

"Next";

}

next.onclick=function(){

if(current<pages.length-1){

current++;

loadPage();

}

else{

window.location.href="love-stories.html";

}

}

prev.onclick=function(){

if(current>0){

current--;

loadPage();

}

}

loadPage();
