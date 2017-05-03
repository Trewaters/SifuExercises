/*
7 planets in a year

Sun
Moon
Mars
Mercury
Jupiter
Venus
Saturn
*/

// base date-time variables
var today = new Date();
const day_milli = 1000*60*60*24; // day in milliseconds
const periods = 52 * day_milli; // days in each period

// birthday this year and next year
var bday = new Date(today.getFullYear(),2,6);
var bday_next = new Date(today.getFullYear()+1,2,6);

// planets
// reference for creating JS objects ( http://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor )
// javascript objects ( https://www.w3schools.com/js/js_object_definition.asp )
function planet(pName,pSDate,pEDate,pDesc){
    this.pName = pName;
    this.pSDate = pSDate;
    this.pEDate = pEDate;
    this.pDesc = pDesc;
    this.getpName = function(){
        return this.pName
    }
    this.getpSDate = function(){
        return this.pSDate
    }
    this.getpEDate = function(){
        return this.pEDate
    }
    this.getpDesc = function(){
        return this.pDesc
    }
};

var period1 = new planet("Sun");
var period2 = new planet("Moon");
var period3 = new planet("Mars");
var period4 = new planet("Mercury");
var period5 = new planet("Jupiter");
var period6 = new planet("Venus");
var period7 = new planet("Saturn");

// period_start_date and period_end_date
var period_start_date = [new Date()];
var period_end_date = [new Date()];

//
var date_calc = 0;

// add planet periods to birthday, birthday is day 1.
// create a period_start_date and period_end_date
// assign period_start_date and period_end_date to a planet

// console.log - period_start_date, period_end_date, Planet, description of planetary influence

//... write more pseudo code


