//DOM queries

var formOne = document.querySelector('.people-dates');
var passengers = document.querySelector('.passengers').value;
var dateStart = document.querySelector('.start-date').value;
var dateEnd = document.querySelector('.end-date').value;
var possibleVehicles = ['motorbike','small car','big car','camper'];

//vehicle data
var vehicles = {
  motorbike: {
    capacity: 1,
    days: [1, 2, 3, 4, 5],
    price: 109,
    fuel: 3.7
  },

  smallCar: {
    capacity: [1, 2],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    price: 129,
    fuel: 8.5
  },

  bigCar: {
    capacity: [1, 2, 3, 4, 5],
    days: [3, 4, 5, 6, 7, 8, 9, 10],
    price: 144,
    fuel: 9.7
  },

  camper: {
    capacity: [2, 3, 4, 5, 6],
    days: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    price: 200,
    fuel: 17
  }
}


function vehicleOptions(){
  console.log('test');
  //limit vehicle options by number of passengers - filter
  if (passengers > 1) {

  }


  //limit those vehicle options by days - filter


  //print options - new array from those?
}


formOne.addEventListener("submit", function(event){
    event.preventDefault();
    vehicleOptions();
});


//parse dates and passengers into numbers
//if statements - options are available - if passengers <2
