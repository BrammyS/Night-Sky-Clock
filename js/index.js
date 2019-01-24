
// Get all columns on the page.
var columns = Array.from(document.getElementsByClassName('column'));

// All the classes with different opacities.
var Distances = ['distance1', 'distance2', 'distance3', 'distance4'];

var numHeight = 80;

var Time =
    [
        0, 0, // Hours.
        0, 0, // Minutes.
        0, 0  // Seconds.
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

    // console.log(Time[0] + "" + Time[1] + ":" + Time[2] + "" + Time[3] + ":" + Time[4] + "" + Time[5]);

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

            // Move the row of numbers up/down.
            element.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + numHeight + 'px))';

            // Change opacity of the numbers.
            Array.from(element.children).forEach(function (element2, number) {
                    element2.className = 'number ' + GetDistanceClass(Time[i], number);
                }
            );
        }
    );
}


// Returns a opacity class.
function GetDistanceClass(time, number) {

    if (time === number) return Distances[0];
    if (time === number + 1 || time === number - 1) return Distances[1];
    if (time >= number + 1 && time <= number + 3 || time >= number - 3 && time <= number - 1) return Distances[2];
    return Distances[3];
}


// Start timer when the page loads.
window.onload = StartTime();









