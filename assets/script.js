$(document).ready(function () {
  // $('#form').parsley();
  // const picker = datepicker('.date');
//     const picker = datepicker(document.querySelector('#date'), {
//     position: 'tr', // Top right.
//     startDate: new Date(), // This month.
//     startDay: 1, // Calendar week starts on a Monday.
//     dateSelected: new Date(), // Today is selected.
//     disabledDates: [new Date('1/1/2050'), new Date('1/3/2050')], // Disabled dates.
//     minDate: new Date(2016, 5, 1), // June 1st, 2016.
//     maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
//     noWeekends: true, // Weekends will be unselectable.
//     formatter: function(el, date) {
//       // This will display the date as `1/1/2017`.
//       el.value = date.toDateString();
//     },
//     onSelect: function(instance) {
//       // Show which date was selected.
//       console.log(instance.dateSelected);
//     },
//     onShow: function(instance) {
//       console.log('Calendar showing.');
//     },
//     onHide: function(instance) {
//       console.log('Calendar hidden.');
//     },
//     onMonthChange: function(instance) {
//       // Show the month of the selected date.
//       console.log(instance.currentMonthName);
//     },
//     customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     customDays: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
//     overlayPlaceholder: 'Enter a 4-digit year',
//     overlayButton: 'Go!',
//     disableMobile: true // Conditionally disabled on mobile devices.
// });

$('#datepicker').datepicker({
    format: "dd/mm/yyyy",
    startDate: "-Infinity",
    maxViewMode: 2,
    // multidate: false,
    // keyboardNavigation: false,
    // todayHighlight: true,
    // toggleActive: true
});


$( ".form__continue--passengers" ).click(function(){
  $(".form__days").show();
});

$( ".form__continue--passengers" ).click(function(){
  $(".form__passengers").show();
});
  $( ".form__continue--map" ).click(function(){
    $(".map").show();
  });



}());
