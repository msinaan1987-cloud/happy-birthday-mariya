const letter=`

My Dearest Mariya,

Today is your birthday.

And before anything else,
I just want to thank you.

Thank you for becoming one of
the most beautiful parts of my life.

Thank you for every smile.

Thank you for every memory.

Thank you for simply being you.

The truth is...

somewhere along this journey,

you became much more than
just another person in my life.

You became someone I care about deeply.

Someone I pray for.

Someone I dream about.

Someone I imagine a future with.

And today,

with all my heart,

I want you to know that

I love you.

❤️
`;

const target=document.getElementById("letter");

let i=0;

const timer=setInterval(()=>{

target.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

document.getElementById("videoBtn").style.display="inline-block";

}

},30);

document.getElementById("videoBtn").onclick=function(){

window.location.href="video.html";

}
