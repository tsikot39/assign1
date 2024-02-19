/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma Program
 * @author: Johnson Benedict Corpus
 */

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9; // Formula for Fahrenheit to Celsius conversion
}

// Function expression to convert temperature from Celsius to Kelvin
const celsiusToKelvin = function (celsius) {
  return celsius + 273.15; // Formula for Celsius to Kelvin conversion
};

// Perform temperature conversion when the convert button is clicked
$(document).ready(function () {
  $("#convertBtn").click(function () {
    let fahrenheit = parseFloat($("#fahrenheit").val()); // Get input Fahrenheit temperature
    if (!isNaN(fahrenheit)) {
      // Check if input is a valid number
      let celsius = fahrenheitToCelsius(fahrenheit); // Convert Fahrenheit to Celsius
      let kelvin = celsiusToKelvin(celsius); // Convert Celsius to Kelvin
      // Display results on the webpage
      $("#result").html(
        `In Celsius: ${celsius.toFixed(
          2
        )}°C<br>Celcius to Kelvin: ${kelvin.toFixed(2)}K`
      );
    } else {
      $("#result").html("Please enter a valid temperature."); // Display error message for invalid input
    }
  });
});

// Display current date on the webpage when the document is ready
$(document).ready(function () {
  var currentDate = new Date(); // Get current date and time
  var formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long", // Full name of the weekday
    year: "numeric", // 4-digit year
    month: "long", // Full name of the month
    day: "numeric", // Day of the month
  });
  $("#current-date").text("Today is " + formattedDate); // Set the formatted date as text content
});
