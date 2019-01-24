
var columns = Array.from(document.getElementsByClassName('column'));
var numHeight = 100;

var Time =
[
    0, 0, // Hours
    0, 0, // Minutes
    0, 0  // Seconds
];


function StartTime() {

    var tempTime = GetDate();

    // Loop through hours, minutes, seconds.
    for (var i = 0; i < tempTime.length; i++) {

        // If hours, minutes or seconds is less then 10, add a 0 to the first digit.
        if (tempTime[i] < 10) {
            Time[i + i] = 0;
            Time[i + i + 1] = tempTime[i];
        } else {
            Time[i + i] = parseInt(tempTime[i].toString().split('')[0]);
            Time[i + i + 1] = parseInt(tempTime[i].toString().split('').pop());
        }
    }
    console.log(Time[0] + "" + Time[1] + ":" + Time[2] + "" + Time[3] + ":" + Time[4] + "" + Time[5]);

    MoveRow();
    setTimeout(StartTime, 500);
}


// Returns a array of hours, minutes, seconds.
function GetDate() {
    var newTime = new Date();
    return [newTime.getHours(), newTime.getMinutes(), newTime.getSeconds()];
}


// Moves the rows to the correct position.
function MoveRow() {
    columns.forEach(function (element, i) {
            var offset = -Time[i] * numHeight;
            element.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + numHeight + 'px))';
            columns.forEach(function (element, i) {

                }
            );
        }
    );
}


// Start timer when the page loads.
window.onload = StartTime();


