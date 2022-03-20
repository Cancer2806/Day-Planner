// Variables for dom manipulation
const displayDay = $("#currentDay");
const timeBlockContainer = $(".container");

// Global variables and assignments



// function to generate each time block row
const createBlock = function(timeIndex) {
  console.log("in CreateBlock");

  // creates the role to hold time, textbox and save button
  const row = $("<div>").attr("class", "row");

  // adding the time column
  const timeCol = $("<article>").attr("class", "col-2");
  const timeSpan = $("<span>").text(timeIndex + ":00");
  timeCol.append(timeSpan);
  row.append(timeCol);

  // Adding the text box column
  const textareaCol = $("<article>").attr("class", "col-8");
  const textarea = $("<textarea>");
  textareaCol.append(textarea);
  row.append(textareaCol);

  // adding the button column
  const buttonCol = $("<article>").attr("class", "col-2");
  const button = $("<button>").attr("class", "btn btn-primary save-button");
  button.text("💾");
  buttonCol.append(button);
  row.append(buttonCol);

  // colour the rows
  const currentTime = moment();
  
  if (timeIndex < Number(currentTime.format("H")) + 2) {
    textareaCol.css('background-color', 'green');
  } else if (timeIndex === Number(currentTime.format("H"))+2) {
    textareaCol.css('background-color', 'red');
  } else {
    textareaCol.css('background-color', 'yellow');
  }

  // return the completed row
  return (row);

}

// function to render the time blocks to the page
const renderTimeBlocks = function () {
  console.log("in renderTimeBlock")
  // Loop to generate each input box
  for (timeIndex = 9; timeIndex < 18; timeIndex++) {
    // call function to generate each block
    const block = createBlock(timeIndex);
    timeBlockContainer.append(block);
  }
}










// can click on timeblock and enter or edit an event.  Click on disk symbol to save.  Save to Local storage


// Text in black, except when changing, then it is blue


// when page loads, copy events from local storage and display on page

// Display today's date in Header
displayDay.text(moment().format("dddd, MMMM Do, YYYY"));

renderTimeBlocks();