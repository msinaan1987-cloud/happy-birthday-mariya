document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = "opacity 1s";

    document.body.style.opacity = "1";

};

document.getElementById("continueBtn").onclick = function(){

    document.body.style.opacity = "0";

    setTimeout(function(){

        window.location.href = "quiz.html";

    },1000);

};
