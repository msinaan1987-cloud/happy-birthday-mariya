const questions = [

{

question:"Where did we want to go together the most?",

answer:"Switzerland",

options:[
"Switzerland",
"Japan",
"Paris",
"London"
]

},

{

question:"Which is the first book you gave me to read?",

answer:"Caraval",

options:[
"Harry Potter",
"Caraval",
"The Alchemist",
"It Ends With Us"
]

},

{

question:"Who am I to you?",

answer:"Lover",

options:[
"Lover",
"Friend",
"Stranger",
"Relative"
]

}

];

let current = 0;

const question = document.getElementById("question");

const options = document.getElementById("options");

const number = document.getElementById("questionNumber");

function loadQuestion(){

number.textContent=current+1;

question.textContent=questions[current].question;

options.innerHTML="";

questions[current].options.forEach(option=>{

const btn=document.createElement("button");

btn.className="option";

btn.innerText=option;

btn.onclick=()=>checkAnswer(option);

options.appendChild(btn);

});

}

function checkAnswer(selected){

if(selected===questions[current].answer){

current++;

if(current<questions.length){

loadQuestion();

}

else{

question.style.display="none";

options.style.display="none";

number.parentElement.style.display="none";

document.getElementById("successScreen").style.display="block";

}

}

else{

alert("That's not it. Try again ❤️");

}

}

loadQuestion();

document.getElementById("storyBtn").onclick=function(){

window.location.href="story.html";

}
