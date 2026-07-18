document.querySelectorAll(".lantern").forEach(lantern=>{

lantern.onclick=function(){

alert(this.dataset.text);

};

});

const secret="I LOVE YOU SINAAN FOR A 100 YEARS";

const popup=document.getElementById("letterPopup");

const text=document.getElementById("futureLetter");

const letter=

`**To My Dearest Mariya,**

If you're reading this in 2036, then ten years have passed since the version of me who is writing these words today.

Right now, I'm just a seventeen-year-old boy sitting in front of a computer, hoping that one day you'll read this and smile. I don't know what life looks like in 2036. I don't know where we are, what we're doing, or what dreams we've achieved. But I do know one thing.

I loved you enough to write to the future.

Life must have changed us. Maybe we've grown wiser. Maybe we've faced challenges we couldn't imagine today. Maybe we've celebrated victories together, or maybe we've learned difficult lessons along the way. Whatever happened, I hope we never forgot how everything began.

I hope we still remember the classroom where you sat behind my bench.

I hope we still remember the little conversations that meant so much more than they seemed.

I hope we still remember the Dairy Milk, the award ceremony, the bicycle rides, and all the tiny moments that slowly became some of the happiest memories of my life.

Those memories may have been ordinary to the world, but they were extraordinary to me.

If we're still walking through life together, I hope I still make you laugh the way I always wanted to. I hope I still remind you how beautiful your smile is. I hope that after all these years, you still feel safe, loved, respected, and appreciated every single day.

I hope I've become the man you deserve.

Not a perfect man, because perfection doesn't exist, but someone who keeps choosing you every single day.

Someone who still looks at you with the same admiration he had when he was seventeen.

Someone who never stops learning how to love you better.

And if life didn't unfold the way we dreamed, I still want you to know something.

Meeting you changed my life.

You taught me what kindness looked like.

You taught me how small moments could leave the biggest impact.

You became a chapter of my life that time could never erase.

Thank you for every smile.

Thank you for every conversation.

Thank you for every memory you unknowingly gave me.

No matter where life takes us, a part of my heart will always be grateful that our story began with one simple moment...

A girl who came and sat behind my bench.

With all my love,

**Muhammed Sinaan**

**Age 17**

Writing to you with hope from 2026 ❤️
`;

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
