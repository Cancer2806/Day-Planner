// Variables for dom manipulation
const displayDay = $("#currentDay");
const timeBlockContainer = $(".container");

// Global variables and assignments



// function to generate each time block row
const createBlock = function(timeIndex) {
  // creates the row to hold time, textbox and save button
  const row = $("<div>").attr("class", "row");

  // adding the time column
  const timeCol = $("<article>").attr("class", "col-2 hour");
  const timeSpan = $("<span>").text(timeIndex + ":00");
  timeCol.append(timeSpan);
  row.append(timeCol);

  // Adding the text box column
  const textareaCol = $("<article>").attr("class", "col-8 time-block");
  const textarea = $("<textarea>");
  textarea.addClass("textarea");
  
  // Check if any text in local storage for this timeSlot
  const prevText = localStorage.getItem(timeIndex + ":00");
  if (prevText !== "") {
    textarea.text(prevText);
  }
  textareaCol.append(textarea);
  row.append(textareaCol);

  // adding the button column
  const buttonCol = $("<article>").attr("class", "col-2");
  const button = $("<button>").attr("class", "btn btn-primary saveBtn");
  button.text("💾");
  buttonCol.append(button);
  row.append(buttonCol);

  // add classes for colouring the rows based on the timeslot
  const currentTime = moment();
  if (timeIndex < Number(currentTime.format("H"))) {
    textareaCol.addClass("past");
  } else if (timeIndex === Number(currentTime.format("H"))) {
    textareaCol.addClass("present");
  } else {
    textareaCol.addClass("future");
  }

  // return the completed row
  return (row);

}

// function to render the time blocks to the page
const renderTimeBlocks = function () {
  // Loop to generate each input box
  for (timeIndex = 9; timeIndex < 18; timeIndex++) {
    // call function to generate each block
    const block = createBlock(timeIndex);
    timeBlockContainer.append(block);
  }
  return;
}

// get text entered and save to local storage when save button hit
const saveItem = function (event) {
  event.preventDefault();
  const btnHit = $(event.target); 
  // grab the text entered if any
  const textEntered = btnHit.parent().prev().children().val();
  // if text has been entered, store it to local storage using the time slot as a key
  if (textEntered !== "") {
    const timeSlot = btnHit.parent().prev().prev().children().text();
    localStorage.setItem(timeSlot, textEntered);    
  }
  return;
}



// Display today's date in Header
displayDay.text(moment().format("dddd, MMMM Do, YYYY"));

// render the time blocks to the page
renderTimeBlocks();

// listen for the user clicking the Save button
$(document).on("click", ".saveBtn", saveItem);