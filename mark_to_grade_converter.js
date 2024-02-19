/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma Program
 * @author: Johnson Benedict Corpus
 */

// Function to convert a mark into a grade
function convertMark() {
  // Retrieve input elements and messages
  var markInput = document.getElementById("mark-input").value;
  var validationMessage = document.getElementById("validationmessage");
  var gradeResult = document.getElementById("grade-result");

  // Validate the input
  if (!/^\d+$/.test(markInput)) {
    // Check if the input is a valid number
    validationMessage.textContent = "Invalid mark. Please enter a number."; // Display error message
    gradeResult.textContent = ""; // Clear previous grade result
    return; // Exit the function
  }

  try {
    var mark = parseInt(markInput); // Parse the input as an integer

    // Check if the mark is within the valid range
    if (isNaN(mark) || mark < 0 || mark > 100) {
      throw "Invalid mark. Please enter a number between 0 and 100."; // Throw an error if mark is out of range
    }

    // Determine the grade based on the mark
    if (mark >= 90) {
      gradeResult.textContent = "Grade A";
    } else if (mark >= 80) {
      gradeResult.textContent = "Grade B";
    } else if (mark >= 70) {
      gradeResult.textContent = "Grade C";
    } else if (mark >= 50) {
      gradeResult.textContent = "Grade D";
    } else {
      gradeResult.textContent = "Grade F";
    }

    validationMessage.textContent = ""; // Clear validation message
  } catch (error) {
    gradeResult.textContent = ""; // Clear grade result
    validationMessage.textContent = error; // Display error message
  }
}

// Display current date in a specific format when the document is ready
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
