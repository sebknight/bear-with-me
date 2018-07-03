//DOM queries
var detailsConfirm = document.getElementById("selected-details");
var destinationConfirm = document.getElementById("selected-destination");
var vehicleConfirm = document.getElementById("selected-vehicle");
var possibleVehicles = [];
// var passengersNumber;
// var datesNumber;
//UI transitions

// Datepicker
// var dateFormat = "dd/mm/yy";
// var dateToday = new Date();
// var dates = $("#from, #to").datepicker({
//     // defaultDate: 1,
//
//     changeMonth: true,
//     numberOfMonths: 2,
//     minDate: dateToday,
//     maxDate: +15 })
//    onSelect: function selectedDate() {
//         var option = this.id == "from" ? "minDate" : "maxDate",
//             instance = $(this).data("datepicker"),
//             date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
//         dates.not(this).datepicker("option", option, date);
//     };
//   function calcDatesNumber() {
//    var date1 = $("#from").datepicker("getDate");
//    var date2 = $("#to").datepicker("getDate");
//     datesNumber = 0;
//    if (date1 && date2) {
//      datesNumber = Math.floor((date2.getTime() - date1.getTime()) / 86400000);
//    }
//  };

$( function() {
  var dateFormat = "mm/dd/yy",
  // var dateToday = new Date();
    from = $( "#from" )
      .datepicker({
        defaultDate: 1,
        minDate: 0,
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
      maxDate: "+15"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }
    return date;
  }
} );

  function calcDatesNumber() {
   var date1 = $("#from").datepicker("getDate");
   var date2 = $("#to").datepicker("getDate");
    datesNumber = 0;
   if (date1 && date2) {
     datesNumber = Math.floor((date2.getTime() - date1.getTime()) / 86400000);
   }
 };

//   // Aaaah section
  // check data.js is called
  console.log(vehicles);

  // function showPossibleVehicles(x,y){
  //   ($).css("x","y");
  // }
  //
  // UI transition to show vehicle selection
  // $("#selected-details").click(function (){
  //   $(".form__dates").hide();
  //   $(".form__passengers").hide();
  //   $(".form__vehicles").show();
  //   // $(".vehicle-options").css("display","flex");
  //   $(".vehicle-options").show();
  //
  //   // map.invalidateSize();
  // });

//UI transition to show date and passenger selection
function moveToDetails(){
    $("#start-button").click(function(){
      $(".intro").hide();
      $(".form__dates").show();
      $(".form__passengers").show();
      $(".details").show();
      $(".col-right__intro").removeClass("col-right__intro");
      $(".col-right").addClass("col-right__dates");
    });

}

//UI transition to show vehicle options
  function moveToVehicles(){
      $(".form__dates").hide();
      $(".form__passengers").hide();
      $(".vehicles").show();
      $(".form__vehicles").show();
      $(".vehicle-options").css("display","flex");
  };


  // UI transition to show map
  function moveToMap(){
    $(".vehicles").hide();
    $(".form__vehicles").hide();
    // $(".vehicle-options").css("display","none");
    $(".vehicle-options").hide();
    $(".form__destination").show();
    $("#map").show();
  };


  // Take dates and passenger inputs and make them numbers
  function getPassengerNumber(){
    // datesString = document.getElementById("#calculated").value;
    // console.log(datesString);
    passengersString = document.getElementById("passengers").value;
    console.log(passengersString);
    // datesNumber = parseInt(datesString);
    passengersNumber = parseInt(passengersString);
    // console.log(typeof datesNumber);
    console.log(typeof passengersNumber);
  };


  // pushing available vehicles to array based on passenger number and days
  function findPossibleVehicles() {
    if (passengersNumber < 3 && datesNumber < 6){
      possibleVehicles.push(vehicles.motorbike, vehicles.smallCar);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".motorbike").show();
      $(".small-car").show();
    }
    else if (passengersNumber < 3 && datesNumber < 6){
      possibleVehicles.push(vehicles.motorbike, vehicles.smallCar);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".motorbike").show();
      $(".small-car").show();
    }
    else if (passengersNumber < 3 && datesNumber > 2 && datesNumber < 11){
      possibleVehicles.push(vehicles.smallCar, vehicles.bigCar);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".small-car").show();
      $(".big-car").show();
    }
    else if (passengersNumber > 1 && datesNumber > 2 && datesNumber < 11){
      possibleVehicles.push(vehicles.smallCar, vehicles.bigCar, vehicles.camper);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".small-car").show();
      $(".big-car").show();
      $(".camper").show();
    }
    else if (passengersNumber < 6 && datesNumber > 2 && datesNumber < 11){
      possibleVehicles.push(vehicles.bigCar, vehicles.camper);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".big-car").show();
      $(".camper").show();
    }
    else if (passengersNumber > 1 && datesNumber > 1){
      possibleVehicles.push(vehicles.camper);
      console.log(possibleVehicles);
      moveToVehicles();
      $(".camper").show();
    }
    else {
      console.log(possibleVehicles);
      console.log("no vehicles available");
      alert("Oops! We don't have vehicles available based on these selections. Please try altering your dates/passenger numbers.")
    }
  }

  $(".vehicle-options").children().click(function(){
    $(this).toggleClass("is-selected");
    $(this).siblings().removeClass("is-selected");
  });

function selectVehicle() {
  vehicleChoice = document.querySelector('.is-selected');
  selectedVehicle = (vehicleChoice.className).replace(" is-selected","");
}

//gets distance output from mapbox directions API
function calculateDistance(){
  container = document.querySelector(".mapbox-directions-route-summary");
  if (container == null) {
    alert("Please enter an origin and destination");
  };
  distanceOutput = container.getElementsByTagName("h1");
  distanceText = $(distanceOutput).text();
  distance = parseInt(distanceText);
}

function selectVehicleData(){
  if (selectedVehicle === "motorbike") {
    hireCost = vehicles.motorbike.price;
    fuelCost = vehicles.motorbike.fuel;
  }
  else if (selectedVehicle === "small-car") {
    hireCost = vehicles.smallCar.price;
    fuelCost = vehicles.smallCar.fuel;
  }
  else if (selectedVehicle === "big-car") {
    hireCost = vehicles.bigCar.price;
    fuelCost = vehicles.bigCar.fuel;
  }
  else {
    hireCost = vehicles.camper.price;
    fuelCost = vehicles.camper.fuel;
  }
};

function calculateCost(){
  totalHire = hireCost * datesNumber;
  totalFuel = fuelCost * (distance/100);
  totalCost = totalHire + totalFuel;
};

// var biggerSmaller;
// map.on('load', function() {
//     var mapCanvas = document.getElementsByClassName('mapboxgl-canvas')[0];
//     var mapDiv = document.getElementById('map');
//     var breakButton = document.getElementById('resizeDiv');
//     var fixButton = document.getElementById('resizeMap');
//     breakButton.onclick = function() {
//         if (biggerSmaller !== 'smaller') {
//             mapDiv.style.width = '50%';
//             mapCanvas.style.width = '100%';
//             biggerSmaller = 'smaller';
//         } else {
//             mapDiv.style.width = '150%';
//             mapCanvas.style.width = '100%';
//             biggerSmaller = 'bigger';
//         }
//     }
//     fixButton.onclick = function() {
//         map.resize();
//     }
// });


var app = {
  data: {},
  arrStorage: [],
  init: function (){
        moveToDetails();
        // adds listener to take form data about passenger numbers and dates
        detailsConfirm.addEventListener("click", function(event){
            event.preventDefault();
            // calculate number of days between selected dates
            calcDatesNumber();
            // convert passenger string to number
            getPassengerNumber();
            // determine available vehicles based on passenger numbers and dates
            findPossibleVehicles();
        // details submit button function ENDS
            console.log("working");
        });

        vehicleConfirm.addEventListener("click", function(event){
          event.preventDefault();
          console.log("working");
          selectVehicle();

          //show map
          moveToMap();
          // $(".form__vehicles").hide();
          // $(".vehicle-options").css("display","none");
          // $(".form__destination").show();
          // $("#map").show();
        });
        // adds event listener to take map data
        destinationConfirm.addEventListener("click", function(event){
          event.preventDefault();
          console.log("working");
          calculateDistance();
          selectVehicleData();
          calculateCost();
          $(".form__destination").hide();
          $("#map").hide();
          console.log(totalCost);
        });


  // init ENDS
  }
  // var app ENDS
};

app.init();



//Fuel cost based on selected vehicle
// DOM - select vehicles - output form options based on availalbe
// UI - images
//Output costs/details into DOM
//UI - back, plus empty arrays


// }()); //iife ENDS
