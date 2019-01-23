var columns = Array.from(document.getElementsByClassName('column'));
var numHeight = 50;
var h = 0,
    m = 0,
    s = 0;

window.onload = startTime();

function startTime() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    console.log(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    } 
    return i;
}
