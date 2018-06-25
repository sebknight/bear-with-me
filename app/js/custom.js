$(document).ready(function () {

//Daterange picker
$(function() {

  $('input[name="daterange"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          'format': 'DD/MM/YYYY',
          cancelLabel: 'Clear'
      },
      "minDate": moment(),
      "dateLimit":{'days':15}
  });

  $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

});


//UI transitions

$( ".form__continue--step-one").click(function(){
  $(".intro").hide();
  $(".form__dates").show();
  $(".details").show();
  $(".col-right__intro").removeClass("col-right__intro");
  $(".col-right").addClass("col-right__dates");
});


$( ".form__continue--step-two").click(function(){
  $("#date-range").hide();
  $(".form__passengers").show();
  $(".form__continue--step-two").hide();
  $(".col-right__dates").removeClass("col-right__dates");
  $(".col-right").addClass("col-right__passengers");
});

$( ".form__continue--step-three").click(function(){
  $(".form__passengers").hide();
  $(".form__destination").show();
  $("#map").show();
});

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
console.log(vehicles);

//DOM queries
// var datesForm = document.getElementById('form-dates');
// var passengers = document.querySelector(".input__passengers").value;
// var distance = document.querySelector(".mapbox");

var app = {
  data: {},
  arrStorage: [],
  init: function (){
    // var dates = datesForm.

    // var dates = document.querySelector(".input__starting-date").value;
    // var passengers = document.querySelector(".input__passengers").value;
    // var distance = document.querySelector(".mapbox");
    // parseInt(dates);
  }
};

app.init();

// var dates = document.getElementById('form-dates').value;

}()); //iife ENDS
