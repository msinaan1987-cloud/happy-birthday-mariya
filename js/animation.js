const revealBtn = document.getElementById("revealBtn");

const magicContainer = document.getElementById("magicContainer");

const magicPath = document.getElementById("magicPath");

const footprints = document.getElementById("footprints");

const finalMessage = document.getElementById("finalMessage");

const subText = document.getElementById("subText");

const startBtn = document.getElementById("startBtn");

revealBtn.addEventListener("click", () => {

    revealBtn.style.display = "none";
    
document.getElementById("quoteContainer").style.animation = "fadeOut 1s forwards";

    setTimeout(() => {

document.getElementById("quoteContainer").style.display = "none";

},1000);
    
    magicContainer.style.display = "block";

    footprints.style.display = "block";

    magicPath.style.animation = "drawLine 5s linear forwards";

    setTimeout(() => {

        magicContainer.style.opacity = "0";

        footprints.style.opacity = "0";

    }, 5200);

    setTimeout(() => {

    finalMessage.style.visibility = "visible";
    finalMessage.style.opacity = "1";

},6200);

    setTimeout(() => {

        subText.style.animation = "fadeIn 1.5s forwards";

    }, 7000);

   startBtn.style.animation="buttonGlow 2s infinite";

});

startBtn.onclick = function(){

    document.body.style.transition = "1.2s";
    document.body.style.opacity = "0";

    setTimeout(function(){

        window.location.href = "pages/hogwarts.html";

    },1200);

};
