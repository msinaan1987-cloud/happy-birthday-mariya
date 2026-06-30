const quoteText = "I solemnly swear that I am up to no good.";

const quoteElement = document.getElementById("quote");

let currentIndex = 0;

function typeQuote() {

    if (currentIndex < quoteText.length) {

        quoteElement.innerHTML += quoteText.charAt(currentIndex);

        currentIndex++;

        setTimeout(typeQuote, 70);

    } else {

        setTimeout(() => {

            document.getElementById("revealBtn").style.display = "block";

        }, 800);

    }

}
