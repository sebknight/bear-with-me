$(document).ready(function () {
  console.log(vehicles);

  // $('#form').parsley();
  // $(function () {

//   var $sections = $('.form-section');
//
//   function navigateTo(index) {
//     // Mark the current section with the class 'current'
//     $sections
//       .removeClass('current')
//       .eq(index)
//         .addClass('current');
//     // Show only the navigation buttons that make sense for the current section:
//     $('.form-navigation .previous').toggle(index > 0);
//     var atTheEnd = index >= $sections.length - 1;
//     $('.form-navigation .next').toggle(!atTheEnd);
//     $('.form-navigation [type=submit]').toggle(atTheEnd);
//   }
//
//   function curIndex() {
//     // Return the current index by looking at which section has the class 'current'
//     return $sections.index($sections.filter('.current'));
//   }
//
//   // Previous button is easy, just go back
//   $('.form-navigation .previous').click(function() {
//     navigateTo(curIndex() - 1);
//   });
//
//   // Next button goes forward iff current block validates
//   $('.form-navigation .next').click(function() {
//     $('.demo-form').parsley().whenValidate({
//       group: 'block-' + curIndex()
//     }).done(function() {
//       navigateTo(curIndex() + 1);
//     });
//   });
//
//   // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
//   $sections.each(function(index, section) {
//     $(section).find(':input').attr('data-parsley-group', 'block-' + index);
//   });
//   navigateTo(0); // Start at the beginning
// });




//
//
// $('#datepicker').datepicker({
//     format: "dd/mm/yyyy",
//     startDate: "-Infinity",
//     maxViewMode: 2,
//     // multidate: false,
//     // keyboardNavigation: false,
//     todayHighlight: true,
//     // toggleActive: true
// });
//

//UI transitions

$( ".form__continue--step-one").click(function(){
  $(".intro").hide();
  $(".form__dates").show();
  $(".details").show();
  $(".col-right__intro").removeClass("col-right__intro");
  $(".col-right").addClass("col-right__dates");
});

$( ".form__continue--step-two").click(function(){
  $(".form__dates").hide();
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

var app = {
  data: {},
  arrStorage: [],
  init: function (){

  }
};

app.init();

}()); //iife ENDS
