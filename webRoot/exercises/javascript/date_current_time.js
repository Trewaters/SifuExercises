// link to exercise source
// http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

var today = new Date();

// debug
//console.log( "var today = " + today);

var day = today.getDay();

var date = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

// debug
//console.log( "var day = " + day);

var daylist = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];


// debug
//console.log( "var daylist[] = " + daylist[0] + ", " + daylist[1] + ", " + daylist[2] + ", " + daylist[3] + ", " + daylist[4] + ", " + daylist[5] + ", " + daylist[6] + ".");

console.log("Today is : " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM":" AM";

hour = (hour >=12)? hour - 12: hour;

if (hour === 0 && prepand === ' PM ')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = ' Noon';
    }
    else
    {
        hour = 12;
        prepand = ' PM ';
    }
}
if (hour === 0 && prepand === ' AM ')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = ' Midnight';
    }
    else
    {
        hour = 12;
        prepand = ' AM'
    }
}

console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second + "; date : " + date + "; month : " + month + "; year : " + year );