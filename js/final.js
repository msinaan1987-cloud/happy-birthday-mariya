const message=`Everything you've seen today was digital...

Every animation.

Every memory.

Every smile.

Every little surprise.

But one thing isn't.

The very first love letter I ever wrote for you...

The one I wrote back in Class 7...

Is waiting for you...

Under your bed. ❤️

Go and find it.

Happy Birthday, Mariya.

I love you.
Forever.`;

const target=document.getElementById("finalText");

let i=0;

const timer=setInterval(()=>{

target.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

setTimeout(()=>{

document.getElementById("ending").style.display="flex";

},2500);

}

},35);

for(let i=0;i<45;i++){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(s);

}
