/*
Write a JavaScript program to calculate number of days left until next Christmas.

Reference ( http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php )
*/

var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate()>25){
    xmas.setFullYear(xmas.getFullYear()+1);
}
var one_day = 1000*60*60*24;
console.log( Math.ceil( ( xmas.getTime() - today.getTime() ) / (one_day) ) + " days left until Christmas!");