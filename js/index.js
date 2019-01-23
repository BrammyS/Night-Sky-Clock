var columns = Array.from(document.getElementsByClassName('column'));
var numHeight = 50;

window.onload = startTime();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    console.log(h + ":" + m + ":" + s + ":" + ms);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    } 
    return i;
}
