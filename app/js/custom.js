//DOM queries
var detailsForm = document.getElementById('details-form');
var distanceButton = document.getElementById('distance-button');
var possibleVehicles = [];
// var passengersNumber;
// var datesNumber;
//UI transitions

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

// Take dates and passenger inputs and make them numbers
function makeNumber(){
  datesString = document.getElementById('dates').value;
  console.log(datesString);
  passengersString = document.getElementById('passengers').value;
  console.log(passengersString);
  datesNumber = parseInt(datesString);
  passengersNumber = parseInt(passengersString);
  console.log(typeof datesNumber);
  console.log(typeof passengersNumber);
};

// pushing available vehicles to array based on passenger number and days
function findPossibleVehicles() {
  if (passengersNumber === 1 && datesNumber < 3) {
    possibleVehicles.push(vehicles.motorbike, vehicles.smallCar);
    console.log(possibleVehicles);
  }
  else if (passengersNumber < 3 && datesNumber < 11){
    possibleVehicles.push(vehicles.smallCar,vehicles.bigCar);
    console.log(possibleVehicles);
  }
  else if (passengersNumber < 6 && datesNumber > 2){
    possibleVehicles.push(vehicles.bigCar, vehicles.camper);
    console.log(possibleVehicles);
  }
  else if (passengersNumber > 1 && datesNumber > 1){
    possibleVehicles.push(vehicles.camper);
    console.log(possibleVehicles);
  }
  else {
    console.log(possibleVehicles);
    console.log('no vehicles available');
  }
}

var app = {
  data: {},
  arrStorage: [],
  init: function (){

        detailsForm.addEventListener("submit", function(event){
            event.preventDefault();
            // hide detail form and show map
              $(".form__dates").hide();
              $(".form__passengers").hide();
              $(".form__destination").show();
              $("#map").show();
            // convert passenger and date strings to numbers
            makeNumber();
            // determine available vehicles based on passenger numbers and dates
            findPossibleVehicles();

        // details submit button function ENDS
        });

        distanceButton.addEventListener("submit", function(event){
          event.preventDefault();
          $(".form__destination").hide();
          $("#map").hide();
          $(".form__vehicles").show();
          $(".vehicle-options").addClass('is-visible');
          $(".vehicle").addClass('is-disabled');
          //hide map, show vehicle choices
          // function getDistance(){
          //   var distanceString = document.querySelector('div.mapbox-directions-route-summary > h1').value;
          //   console.log(distanceString);
          //   var distanceString = parseInt(distanceNumber);
          //   console.log(distanceNumber);
          // }

          // getDistance();
        });


  // init ENDS
  }
  // var app ENDS
};

app.init();




// }()); //iife ENDS
