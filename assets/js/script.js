// Variables for dom manipulation
const displayDay = $("#current-day");
const contTimeBlock = $(".container");

// Global variables and assignments
// not required


// function to generate each time block row
const createBlock = function(idxTime) {
  // creates the row to hold time, textbox and save button
  const timeBlock = $("<div>").attr("class", "row");

  // Adding the time list on left hand side
  const lstTime = $("<article>").attr("class", "col-2 hour");
  const txtTime = $("<span>").text(idxTime + ":00");
  lstTime.append(txtTime);
  timeBlock.append(lstTime);

  // Adding the text box column
  const contTextarea = $("<article>").attr("class", "col-8 time-block");
  const textarea = $("<textarea>").attr("class", "textarea col-12");
    
  // Check if any text in local storage for this timeSlot
  const prevText = localStorage.getItem(idxTime + ":00");
  if (prevText !== "") {
    textarea.text(prevText);
  }

  // add the text area to the text area container and append to the time block
  contTextarea.append(textarea);
  timeBlock.append(contTextarea);
  
  // add the button to the end of the time slot
  const contBtn = $("<article>").attr("class", "col-2");
  const btnSave = $("<button>").attr("class", "btn btn-primary saveBtn");
  btnSave.html("<span class='emoji'>💾</span>");
  contBtn.append(btnSave);
  timeBlock.append(contBtn);

  // add classes for colouring the rows based on the time slot versus the current time
  const currentTime = moment();
  if (idxTime < Number(currentTime.format("H"))) {
    contTextarea.addClass("past");
  } else if (idxTime === Number(currentTime.format("H"))) {
    contTextarea.addClass("present");
  } else {
    contTextarea.addClass("future");
  }
  // return the completed row
  return (timeBlock);
}

// function to render the time blocks to the page
const renderTimeBlocks = function () {
  // Loop to generate each time block
  for (idxTime = 9; idxTime < 18; idxTime++) {
    // call function to generate each block
    const block = createBlock(idxTime);
    contTimeBlock.append(block);
  }
  return;
}

// get text entered and save to local storage when save button hit
const saveItem = function (event) {
  event.preventDefault();
  const btnHit = $(event.target); 

  // grab the text entered and store in local storage using the time slot as the key
  // allow entry of no text to enable removal of items
  const textEntered = btnHit.parent().parent().prev().children().val();
  const timeSlot = btnHit.parent().parent().prev().prev().children().text();
  localStorage.setItem(timeSlot, textEntered);    

  return;
}

// Operations to run when page opened
// Display today's date in Header
displayDay.text(moment().format("dddd, MMMM Do, YYYY"));

// render the time blocks to the page
renderTimeBlocks();

// listen for user clicking on Save button
$(document).on("click", ".saveBtn", saveItem);