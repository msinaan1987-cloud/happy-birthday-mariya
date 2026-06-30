const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

    bgMusic.volume = 0.30;

    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            document.addEventListener(
                "click",
                () => {
                    bgMusic.play();
                },
                { once: true }
            );

        });

    }

}
