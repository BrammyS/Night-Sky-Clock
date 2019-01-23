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
    console.log(h + ":" + m + ":" + s);
    MoveRow();
    var t = setTimeout(startTime, 500);
}

function MoveRow() {
    columns.forEach(function (element, i) {
        var offset = -parseInt(s.toString().split('').pop()) * numHeight;
        element.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + numHeight / 2 + 'px))';
        }
    );
}
