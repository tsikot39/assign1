/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma Program
 * @author: Johnson Benedict Corpus
 */

// Show profile picture and name after 10 seconds
$(document).ready(function () {
  setTimeout(function () {
    $("#profile-pic-name").show();
  }, 10000); // 10000 milliseconds = 10 seconds
});

// Display current date in a specific format
$(document).ready(function () {
  var currentDate = new Date(); // Get current date and time
  var formattedDate = currentDate.toLocaleDateString("en-US", {
    // Format the date
    weekday: "long", // Full name of the weekday
    year: "numeric", // 4-digit year
    month: "long", // Full name of the month
    day: "numeric", // Day of the month
  });
  $("#current-date").text("Today is " + formattedDate); // Set the formatted date to an element with ID "current-date"
});
