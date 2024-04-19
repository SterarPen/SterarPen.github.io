window.onload = function() {
    fetch("/data/music.json").then(response => response.json()).then(data => {
        const bgm = document.getElementById("bgm");
        bgm.setAttribute("src", data[0]);
        bgm.play();
    });
}