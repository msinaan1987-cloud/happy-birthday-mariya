// ============================
// Hogwarts Page
// ============================

const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");

// Set music volume
music.volume = 0.30;

// Try autoplay (Android fallback)
music.play().catch(() => {

    document.addEventListener("click", () => {
        music.play();
    }, { once: true });

});

// Fade in page
document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = "1";

});

// Enter Button
enterBtn.addEventListener("click", () => {

    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "detective.html";

    }, 1200);

});
