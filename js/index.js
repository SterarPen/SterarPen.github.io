window.onload = function() {
    fetch("/data/music.json").then(response => response.json()).then(data => {
        const bgm = document.getElementById("bgm");
        bgm.setAttribute("src", data[0]);
        bgm.setAttribute("autoplay", true);

        document.onclick = function() {
            document.querySelector("audio").play();
            const message = document.getElementById("message");
            message.style.display = "none";
        };
    });

    // setTimeout(function() {
    //     const message = document.getElementById("message");
    //     message.style.display = "none";
    // }, 5000);
}