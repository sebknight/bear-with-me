//DOM queries
var detailsConfirm = document.getElementById("selected-details");
var destinationConfirm = document.getElementById("selected-destination");
var vehicleConfirm = document.getElementById("selected-vehicle");
var rightColumn = document.getElementById("right-column");
// var button = document.querySelectorAll(".btn-primary");

//Turn off Bootstrap outline on click
$(".btn-primary").click(function (){
  $(".btn-primary").blur();
});
// var possibleVehicles = [];
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

// $( function() {
//   var dateFormat = "mm/dd/yy",
//   // var dateToday = new Date();
//     from = $( "#from" )
//       .datepicker({
//         defaultDate: 1,
//         minDate: 0,
//         // maxDate: "+15D",
//         changeMonth: true,
//         numberOfMonths: 2
//       })
//       .on( "change", function() {
//         to.datepicker( "option", "minDate", getDate( this ) );
//       }),
//     to = $( "#to" ).datepicker({
//       defaultDate: "+1w",
//       changeMonth: true,
//       numberOfMonths: 2,
//       minDate: +1,
//       maxDate: "+15D"
//     })
//     .on( "change", function() {
//       from.datepicker( "option", "maxDate", getDate( this ) );
//     });
//
//   function getDate( element ) {
//     var date;
//     try {
//       date = $.datepicker.parseDate( dateFormat, element.value );
//     } catch( error ) {
//       date = null;
//     }
//     return date;
//   }
// } );

 //  function calcDatesNumber() {
 //   var date1 = $("#from").datepicker("getDate");
 //   var date2 = $("#to").datepicker("getDate");
 //    datesNumber = 0;
 //   if (date1 && date2) {
 //     datesNumber = Math.floor((date2.getTime() - date1.getTime()) / 86400000);
 //   }
 // };

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
  }


  // UI transition to show map
  function moveToMap(){
    $(".vehicles").hide();
    $(".form__vehicles").hide();
    // $(".vehicle-options").css("display","none");
    $(".vehicle-options").hide();
    $(".form__destination").show();
    // $("#map").show();
  }


  // Take dates and passenger inputs and make them numbers
  function getDetails(){
    datesString = document.getElementById("dates").value;
    console.log(datesString);
    passengersString = document.getElementById("passengers").value;
    console.log(passengersString);
    datesNumber = parseInt(datesString);
    passengersNumber = parseInt(passengersString);
    console.log(typeof datesNumber);
    console.log(typeof passengersNumber);
  }


  // pushing available vehicles to array based on passenger number and days
  function findPossibleVehicles() {
    if (datesNumber < 1){
      alert("Your trip must be more than one day");
    }
    else if (passengersNumber === 1 && datesNumber < 3){
      moveToVehicles();
      $(".small-car").show();
      $(".motorbike").show();
    }
    else if (passengersNumber === 1 && datesNumber < 6){
      moveToVehicles();
      $(".small-car").show();
      $(".motorbike").show();
      $(".big-car").show();
    }
    else if (passengersNumber === 1 && datesNumber < 11) {
      $(".small-car").show();
      $(".big-car").show();
    }
    else if (passengersNumber === 2 && datesNumber === 1) {
      moveToVehicles();
      $(".small-car").show();
    }
    else if (passengersNumber === 2 && datesNumber === 2){
      moveToVehicles();
      $(".small-car").show();
      $(".camper").show();
    }
    else if (passengersNumber === 2 && datesNumber > 2 && datesNumber < 11){
      moveToVehicles();
      $(".small-car").show();
      $(".big-car").show();
      $(".camper").show();
    }
    else if (passengersNumber < 6 && datesNumber > 2 && datesNumber < 11) {
      moveToVehicles();
      $(".big-car").show();
      $(".camper").show();
    }
    else if (passengersNumber > 1 && datesNumber > 1){
      moveToVehicles();
      $(".camper").show();
    }
    else {
      // console.log(possibleVehicles);
      console.log("no vehicles available");
      alert("Oops! We don't have vehicles available based on these selections. Please try altering your dates/passenger numbers.");
    }
  }

  $(".vehicle-options").children().click(function(){
    $(this).toggleClass("is-selected");
    $(this).siblings().removeClass("is-selected");
  });

function selectVehicle() {
  vehicleChoice = document.querySelector(".is-selected");
  if (vehicleChoice === null){
    alert("Please select a vehicle");
  }
  else {
    selectedVehicle = (vehicleChoice.className).replace(" is-selected","");
    // packageTitle = vehicleChoice.getElementsByTagName("h2");
    // packageSubtitle = vehicleChoice.getElementsByTagName("h3");
    // packageTitleText = $(packageTitle).text;
    moveToMap();
    createMap();
  }
}

function createMap(){
  mapContainer = document.createElement("div");
  mapContainer.style.width = "800px";
  mapContainer.style.height = "600px";
  mapContainer.setAttribute("id","map") ;
  rightColumn.appendChild(mapContainer);
  mapboxgl.accessToken = "pk.eyJ1Ijoic2Via25pZ2h0IiwiYSI6ImNqaTNuNDFodTAwYjQzcHIxNXB5YWFxNDEifQ.wpTWbTXyg2OGtiM9G1UvrA";
  var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/sebknight/cjintebre1ihi2rnpwvmoa7y7",
      center: [174.02, -41.09],
      zoom: 5
  });

  map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit:"metric"
  }), "top-left");
  // map.resize();
}
//gets distance output from mapbox directions API
function calculateDistance(){
  container = document.querySelector(".mapbox-directions-route-summary");
  if (container === null) {
    alert("Please enter an origin and destination");
  }
    else { distanceOutput = container.getElementsByTagName("h1");
      distanceText = $(distanceOutput).text();
      distance = parseInt(distanceText);
      selectVehicleData();
      calculateCost();
      $(".form__destination").hide();
      $("#map").hide();
      $(".form__confirm").show();
      outputDetails();
    }
}

function selectVehicleData(){
  if (selectedVehicle === "vehicle motorbike") {
    packageName = "Riding solo (motorbike)";
    hireCost = vehicles.motorbike.price;
    fuelCost = vehicles.motorbike.fuel;
  }
  else if (selectedVehicle === "vehicle small-car") {
    packageName = "Couples (small car)";
    hireCost = vehicles.smallCar.price;
    fuelCost = vehicles.smallCar.fuel;
  }
  else if (selectedVehicle === "vehicle big-car") {
    packageName = "Magnum (4WD)";
    hireCost = vehicles.bigCar.price;
    fuelCost = vehicles.bigCar.fuel;
  }
  else {
    packageName = "Group fun (camper van)";
    hireCost = vehicles.camper.price;
    fuelCost = vehicles.camper.fuel;
  }
}

function calculateCost(){
  totalHire = hireCost * datesNumber;
  totalHireTruncated = totalHire.toFixed(2);
  totalFuel = fuelCost * (distance/100);
  totalFuelTruncated = totalFuel.toFixed(2);
  totalCost = totalHire + totalFuel;
  totalCostTruncated = totalCost.toFixed(2);
}

function outputDetails(){
  $("#list-package").text
  (packageName+" package");
  if (datesNumber === 1) {
    $("#list-dates").text("Hired for 1 day");
  }
  else {$("#list-dates").text("Hired for "+datesNumber+" days");
}
  if (passengersNumber === 1) {
    $("#list-passengers").text("1 passenger");
  }
    else {$("#list-dates").text(passengersNumber+" passengers");
}
  $("#list-distance").text("Travel distance: "+distanceText);
  $("#list-hire-cost").text("Hireage cost: $"+totalHireTruncated);
  $("#list-fuel-cost").text("Estimated fuel cost: $"+totalFuelTruncated);
  $("#list-total-cost").text("Estimated total cost: $"+totalCostTruncated);
}

var app = {
  data: {},
  arrStorage: [],
  init: function (){
        moveToDetails();
        // adds listener to take form data about passenger numbers and dates
        detailsConfirm.addEventListener("click", function(event){
            event.preventDefault();
            // calculate number of days between selected dates
            // calcDatesNumber();
            // convert passenger and date strings to number
            getDetails();
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
          // moveToMap();
          // createMap();
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
          // selectVehicleData();
          // calculateCost();
          // $(".form__destination").hide();
          // $("#map").hide();
          // $(".form__confirm").show();
          // outputDetails();
          // outputDetails(datesNumber,"#list-dates","day");
          // console.log(totalCost);
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
