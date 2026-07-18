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

popupText.innerHTML="Your smile makes even my hardest days brighter.";

break;

case"2":

popupTitle.innerHTML="Reason Two ❤️";

popupText.innerHTML="You make me feel understood in a way nobody else does.";

break;

case"3":

popupTitle.innerHTML="My Secret Star ⭐";

popupText.innerHTML="Out of every star in the universe... I love YOU the most.";

break;

case"4":

popupTitle.innerHTML="100 Reasons ❤️";

    const reasons = [

"Your beautiful smile.",

"Your kind heart.",

"The way you always cared about others.",

"Your laugh always made me smile.",

"You're stronger than you realize.",

"You make ordinary moments feel special.",

"You always made me feel comfortable.",

"You have a beautiful soul.",

"You inspire me to become a better person.",

"Your eyes always spoke more than words.",

"The way you treated everyone with kindness.",

"Your honesty.",

"Your innocence.",

"The way you listened whenever I spoke.",

"You noticed the little things.",

"You made me feel important.",

"You believed in people.",

"You never tried to be someone else.",

"You're beautifully unique.",

"Your gentle nature.",

"The memories we created together.",

"The way you laughed at my jokes.",

"Even the bad jokes.",

"The way you made school feel exciting.",

"You made every conversation worth remembering.",

"You were always yourself.",

"Your caring personality.",

"The way you looked at people.",

"You have a beautiful heart.",

"You always brought peace with you.",

"Your patience.",

"Your positivity.",

"You always made my day better.",

"The way you encouraged people.",

"You made difficult days easier.",

"The way you remembered little things.",

"You cared when others didn't.",

"You asked if I was okay.",

"That one moment when you cared about my injury.",

"You made me feel seen.",

"You made me feel valued.",

"You made me feel understood.",

"You made me feel happy without even trying.",

"You became part of my happiest memories.",

"Your kindness never felt fake.",

"Your respect for others.",

"You have a beautiful personality.",

"You make people feel welcome.",

"You always had a calming presence.",

"The way you smiled when you were happy.",

"You made me believe in love.",

"You became my favourite person.",

"You gave me memories I'll never forget.",

"You taught me what genuine kindness looks like.",

"You made me appreciate the smallest moments.",

"Your little habits always made me smile.",

"You always remained humble.",

"Your confidence.",

"Your simplicity.",

"Your maturity.",

"You never needed to be perfect.",

"You were already perfect to me.",

"You changed my life without realizing it.",

"You became my safe place.",

"You made me dream about the future.",

"You gave me hope.",

"You showed me what real care feels like.",

"You never stopped inspiring me.",

"You made my heart feel full.",

"You gave me countless reasons to smile.",

"You became the reason I looked forward to school.",

"You made every meeting memorable.",

"You made distance feel impossible.",

"You remained in my thoughts for years.",

"You taught me patience.",

"You made waiting feel worthwhile.",

"You made me believe some people are truly special.",

"You reminded me that kindness matters.",

"You never knew how much you meant to me.",

"You became my favourite memory.",

"You gave meaning to ordinary days.",

"You made silence feel comfortable.",

"You made conversations effortless.",

"You always felt like home.",

"You accepted people for who they were.",

"You never failed to make me smile.",

"You made me appreciate life more.",

"You helped me grow.",

"You made my world brighter.",

"You became my biggest inspiration.",

"You made me believe in forever.",

"You made every heartbeat feel meaningful.",

"You were worth every wait.",

"You were worth every prayer.",

"You were worth every memory.",

"You were worth every page of this website.",

"You are worth every word I've ever written.",

"You are the reason this story exists.",

"You'll always have a special place in my heart.",

"And simply because you're Mariya. ❤️"

];
    
let html = "<ol>";

reasons.forEach(reason => {

    html += `<li>${reason}</li>`;

});

html += "</ol>";

popupText.innerHTML = html;

break;

popup.style.display="flex";

};


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
