//DOM queries




// var distance =



// $(document).ready(function () {


//Daterange picker
// $(function() {
//
//   $('#date-input').daterangepicker({
//       autoUpdateInput: false,
//       locale: {
//           'format': 'DD/MM/YYYY',
//           cancelLabel: 'Clear'
//       },
//       "minDate": moment(),
//       "dateLimit":{'days':15}
//   });
//
//   $('#date-input').on('apply.daterangepicker', function(ev, picker) {
//       $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
//   });
//
//   $('#date-input').on('cancel.daterangepicker', function(ev, picker) {
//       $(this).val('');
//   });
// });

//UI transitions

$( ".form__continue--step-one").click(function(){
  $(".intro").hide();
  $(".form__dates").show();
  $(".form__passengers").show();
  $(".details").show();
  $(".col-right__intro").removeClass("col-right__intro");
  $(".col-right").addClass("col-right__dates");
});


// $( ".form__continue--step-two").click(function(event){
//   event.preventDefault();
//   $(".form__passengers").show();
//   $(".form__continue--step-two").hide();
//   $(".col-right__dates").removeClass("col-right__dates");
//   $(".col-right").addClass("col-right__passengers");
// });

// $( ".form__continue--step-three").click(function(event){
//   event.preventDefault();
//   $(".form__dates").hide();
//   $(".form__passengers").hide();
//   $(".form__destination").show();
//   $("#map").show();
// });

$(".form__continue--step-four").click(function(){
  $(".form__destination").hide();
  $("#map").hide();
  $(".form__vehicles").show();
  $(".vehicle-options").addClass('is-visible');
  $(".vehicle").addClass('is-disabled');
})

$(".form__continue--step-five").click(function(){
  $(".form__vehicles").hide();
  $(".form__confirm").show();
});


// Aaaah section
// check data.js is called
console.log(vehicles);

// DOM query for passenger and date details
var detailsForm = document.getElementById('details-form');
//take passenger and date values and make them numbers
function makeNumber(){
  var datesString = document.getElementById('dates').value;
  console.log(datesString);
  var passengersString = document.getElementById('passengers').value;
  console.log(passengersString);
  var datesNumber = function number(datesString){};
  var passengersNumber = function number(passengersString){};
};

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
            makeNumber();
        });
      }
};

app.init();




// }()); //iife ENDS
