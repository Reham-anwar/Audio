var audioo1 = document.getElementById("audio");
var range = document.getElementById("range1");
var img = document.getElementById("img");
var srcaudio = document.getElementById("srcaudio");
var divSongs = document.getElementById("div3");
var ul = document.getElementsByTagName("ul");

var arrSongs = [
    ["mario.mp3", "mario.jpg"],
    ["ahmedgamal.mp3", "ahmedgamalimg.jpg"],
    ["amrdiab.mp3", "amrdiabimg.jpg"],
    ["hamaky.mp3", "hamakyimg.jpg"],
    ["karmin.mp3", "karminimg.jpg"],

];
//Add list of songs to playlist
arrSongs.forEach(function (index, i) {
    if (Array.isArray(arrSongs[i][0])) {
        arrSongs[i][0].forEach(function (index1, j) {
            var li = document.createElement("li");
            li.textContent = index1;
            ul[0].appendChild(li);
        });
    }
    else {
        var li2 = document.createElement("li");
        li2.textContent = arrSongs[i][0];
        ul[0].appendChild(li2);
    }
});
//play song and display img when click on it
$("li").click(function (e) {
    console.log(e.target);
    audioo1.pause();
    audioo1.setAttribute("src", e.target.textContent);
    audioo1.load();
    arrSongs.forEach(function (index, i) {
        if (Array.isArray(arrSongs[i][0])) {
            arrSongs[i][0].forEach(function (index1, j) {
                if (arrSongs[i][0].includes(e.target.textContent)) {
                    img.src = arrSong[i][1];
                }
            });
        } else {
            if (arrSongs[i].includes(e.target.textContent)) {
                img.src = arrSongs[i][1];
            }
        }
    });
});


function play() {
    //console.log("audi");
    audioo1.play();
}
function pause() {
    audioo1.pause();
}
function stop() {
    audioo1.load();
    audioo1.pause();
}
function myfun() {
    audioo1.volume = range.value;
}



