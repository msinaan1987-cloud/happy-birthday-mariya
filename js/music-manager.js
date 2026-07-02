const audio = document.getElementById("bgMusic");

if (audio) {

    const source = audio.querySelector("source");

    const savedSong = localStorage.getItem("currentSong");
    const savedTime = localStorage.getItem("currentTime");

    if (savedSong) {
        source.src = savedSong;
        audio.load();
    }

    audio.addEventListener("loadedmetadata", () => {

        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        audio.play().catch(() => {});

    });

    setInterval(() => {

        localStorage.setItem("currentSong", source.getAttribute("src"));
        localStorage.setItem("currentTime", audio.currentTime);

    }, 1000);

}

function changeMusic(song) {

    if (!audio) return;

    const source = audio.querySelector("source");

    source.src = song;

    audio.load();

    audio.currentTime = 0;

    audio.play().catch(() => {});

    localStorage.setItem("currentSong", song);
    localStorage.setItem("currentTime", 0);

}
