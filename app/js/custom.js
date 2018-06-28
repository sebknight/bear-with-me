//DOM queries
var detailsForm = document.getElementById('details-form');
var distanceButton = document.getElementById('distance-button');
var possibleVehicles = [];
// var passengersNumber;
// var datesNumber;
//UI transitions

// Datepicker
var dateToday = new Date();
var dates = $("#from, #to").datepicker({
    // defaultDate: 1,
    changeMonth: true,
    numberOfMonths: 2,
    minDate: dateToday,
    maxDate: +15 })
   onSelect: function selectedDate() {
        var option = this.id == "from" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
    };
  function calcDatesNumber() {
   var date1 = $('#from').datepicker('getDate');
   var date2 = $('#to').datepicker('getDate');
    datesNumber = 0;
   if (date1 && date2) {
     datesNumber = Math.floor((date2.getTime() - date1.getTime()) / 86400000);
   }
   // $('#calculated').val(datesNumber);
 };

$( ".form__continue--step-one").click(function(){
  $(".intro").hide();
  $(".form__dates").show();
  $(".form__passengers").show();
  $(".details").show();
  $(".col-right__intro").removeClass("col-right__intro");
  $(".col-right").addClass("col-right__dates");
});


$(".form__continue--step-five").click(function(){
  $(".form__vehicles").hide();
  $(".form__confirm").show();
});


// Aaaah section
// check data.js is called
console.log(vehicles);

// UI transition to show mapbox, called if user data validates
function moveToMap(){
  $(".form__dates").hide();
  $(".form__passengers").hide();
  $(".form__destination").show();
  $("#map").show();
};


// Take dates and passenger inputs and make them numbers
function getPassengerNumber(){
  // datesString = document.getElementById('#calculated').value;
  // console.log(datesString);
  passengersString = document.getElementById('passengers').value;
  console.log(passengersString);
  // datesNumber = parseInt(datesString);
  passengersNumber = parseInt(passengersString);
  // console.log(typeof datesNumber);
  console.log(typeof passengersNumber);
};


// pushing available vehicles to array based on passenger number and days
function findPossibleVehicles() {
  if (passengersNumber === 1 && datesNumber < 3) {
    possibleVehicles.push(vehicles.motorbike, vehicles.smallCar);
    console.log(possibleVehicles);
    moveToMap();
  }
  else if (passengersNumber < 3 && datesNumber < 11){
    possibleVehicles.push(vehicles.smallCar,vehicles.bigCar);
    console.log(possibleVehicles);
    moveToMap();
  }
  else if (passengersNumber < 6 && datesNumber > 2 && datesNumber <11){
    possibleVehicles.push(vehicles.bigCar, vehicles.camper);
    console.log(possibleVehicles);
    moveToMap();
  }
  else if (passengersNumber > 1 && datesNumber > 10){
    possibleVehicles.push(vehicles.camper);
    console.log(possibleVehicles);
    moveToMap();
  }
  else {
    console.log(possibleVehicles);
    console.log('no vehicles available');
    $();
  }
}

var app = {
  data: {},
  arrStorage: [],
  init: function (){
        // adds listener to take form data about passenger numbers and dates
        detailsForm.addEventListener("submit", function(event){
            event.preventDefault();

            // calculate number of days between selected dates
            calcDatesNumber();
            // convert passenger string to number
            getPassengerNumber();
            // determine available vehicles based on passenger numbers and dates
            findPossibleVehicles();
        // details submit button function ENDS
        });

        // adds event listener to take map data
        distanceButton.addEventListener("submit", function(event){
          event.preventDefault();
          $(".form__destination").hide();
          $("#map").hide();
          $(".form__vehicles").show();
          $(".vehicle-options").addClass('is-visible');
          $(".vehicle").addClass('is-disabled');
        // destination input function ENDS
        });


  // init ENDS
  }
  // var app ENDS
};

app.init();




// }()); //iife ENDS
