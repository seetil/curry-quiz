"use strict";
function hideOverlay() {
  document.querySelector(".overlay").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".inputs");
  const submitButton = document.getElementById("submitButton");

  let selectedButtons = [];
  function handleButtonSelection(rowIndex, button) {
    // Deselect the previously selected button in the same row
    if (selectedButtons[rowIndex]) {
      selectedButtons[rowIndex].classList.remove("selected");
    }

    // Select the clicked button
    button.classList.add("selected");
    selectedButtons[rowIndex] = button;
  }

  // Reusable function to add click event listeners to buttons in a row
  function addButtonListeners(row, rowIndex) {
    const buttons = row.querySelectorAll(".button-choice");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        handleButtonSelection(rowIndex, this); // Call the handler with the row index and clicked button
      });
    });
  }

  // Add click event listeners to buttons in each row
  rows.forEach((row, index) => {
    addButtonListeners(row, index); // Pass the row and its index
  });

  // Add click event listener to the submit button
  submitButton.addEventListener("click", function () {
    // Check if a button is selected in each row
    let allRowsSelected = true;
    for (let i = 0; i < rows.length; i++) {
      if (!selectedButtons[i]) {
        allRowsSelected = false;
        break;
      }
    }

    if (allRowsSelected) {
      let total = 0;
      // Print the value of each row's selected button
      for (let i = 0; i < rows.length; i++) {
        let number = selectedButtons[i].value;
        console.log(`Row ${i + 1} Selected Button: ${number}`);
        total += +number;
      }
      //call function to reveal the answer modal
      result(total);
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth", // Optional: Add smooth scrolling
      });
    } else {
      // Alert the user if not all rows have a selected button
      alert("Please select one button from each row before submitting.");
    }
  });
});

function result(total) {
  console.log(total);
  if (total > 0 && total < 9) {
    document.querySelector(".korma").classList.remove("hidden");
    document.querySelector(".korma").classList.add("current");
    hideOverlay();
    console.log(total);
  } else if (total > 8 && total < 17) {
    document.querySelector(".biryani").classList.remove("hidden");
    document.querySelector(".biryani").classList.add("current");
    hideOverlay();
    console.log(total);
  } else if (total > 16 && total < 25) {
    document.querySelector(".mappas").classList.remove("hidden");
    document.querySelector(".mappas").classList.add("current");
    hideOverlay();
    console.log(total);
  } else if (total > 24 && total < 33) {
    document.querySelector(".madras").classList.remove("hidden");
    document.querySelector(".madras").classList.add("current");
    hideOverlay();
    console.log(total);
  } else if (total > 32 && total < 41) {
    document.querySelector(".monkfish").classList.remove("hidden");
    document.querySelector(".monkfish").classList.add("current");
    hideOverlay();
    console.log(total);
  }
}

function exit() {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".modal").classList.add("hidden");
}
