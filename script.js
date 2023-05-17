$(function main() {
  //set header to current day using dayjs
  $("#currentDay").text(dayjs().format("MMM D, YYYY"));

  var currentHour = dayjs().format("H");
  var nineam = $("#hour-9");
  var tenam = $("#hour-10");
  var elevenam = $("#hour-11");
  var twelvepm = $("#hour-12");
  var onepm = $("#hour-13");
  var twopm = $("#hour-14");
  var threepm = $("#hour-15");
  var fourpm = $("#hour-16");
  var fivepm = $("#hour-17");

  //conditional formatting to set colors of input to past/present/future classes
  if (currentHour == 9){
    nineam.addClass('present');
  } else if (currentHour > 9) {
    nineam.addClass('past');
  } else {
    nineam.addClass('future');
  }

  if (currentHour == 10){
    tenam.addClass('present');
  } else if (currentHour > 10) {
    tenam.addClass('past');
  } else {
    tenam.addClass('future');
  }

  if (currentHour == 11){
    elevenam.addClass('present');
  } else if (currentHour > 11) {
    elevenam.addClass('past');
  } else {
    elevenam.addClass('future');
  }

  if (currentHour == 12){
    twelvepm.addClass('present');
  } else if (currentHour > 12) {
    twelvepm.addClass('past');
  } else {
    twelvepm.addClass('future');
  }

  if (currentHour == 13){
    onepm.addClass('present');
  } else if (currentHour > 13) {
    onepm.addClass('past');
  } else {
    onepm.addClass('future');
  }

  if (currentHour == 14){
    twopm.addClass('present');
  } else if (currentHour > 14) {
    twopm.addClass('past');
  } else {
    twopm.addClass('future');
  }

  if (currentHour == 15){
    threepm.addClass('present');
  } else if (currentHour > 15) {
    threepm.addClass('past');
  } else {
    threepm.addClass('future');
  }

  if (currentHour == 16){
    fourpm.addClass('present');
  } else if (currentHour > 16) {
    fourpm.addClass('past');
  } else {
    fourpm.addClass('future');
  }

  if (currentHour == 17){
    fivepm.addClass('present');
  } else if (currentHour > 17) {
    fivepm.addClass('past');
  } else {
    fivepm.addClass('future');
  }

  //event listener to save user input to local storage using container ID
  $(".saveBtn").on('click', function() {
    var keyID = $(this).parent().attr("id");
    var userInput = $(this).parent().children("textarea").val();
    localStorage.setItem(keyID, userInput);
  })

  //set user input from local storage to corresponding textarea boxes
  $("#hour-9").children("textarea").text(localStorage.getItem("hour-9"));  
  $("#hour-10").children("textarea").text(localStorage.getItem("hour-10"));
  $("#hour-11").children("textarea").text(localStorage.getItem("hour-11"));
  $("#hour-12").children("textarea").text(localStorage.getItem("hour-12"));
  $("#hour-13").children("textarea").text(localStorage.getItem("hour-13"));
  $("#hour-14").children("textarea").text(localStorage.getItem("hour-14"));
  $("#hour-15").children("textarea").text(localStorage.getItem("hour-15"));
  $("#hour-16").children("textarea").text(localStorage.getItem("hour-16"));
  $("#hour-17").children("textarea").text(localStorage.getItem("hour-17"));

});