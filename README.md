# Day Planner
Web page that provides a simple tool for the User to plan their day.  
<br>

## Description
User will be presented with a screen displaying the day and date at the top, and timeslots for each hour of the working day (09:00-17:00) below.  User can enter and change information in each time slot.  Entries are saved to local storage and pre-filled when the page is next used.

<br>

## Usage
Upon accessing the web-site, the User will be presented with a set of timeslots.  Any stored entries will be re-loaded from local storage and shown in the appropriate timeslot.  
Users are able to click into any timeslot and make a new entry or changes to existing entries.  By deleting the text, existing entries can be removed from storage.  
Changes will only be saved when the User clicks on the Save button for the specific entry to be saved.  
The time slots are colour coded to show whether an entry is in the past, future or the current hour.  Times and dates are obtained through Moment functions.


The webpage is located at this address:  https://cancer2806.github.io/Day-Planner/ and a screenshot of the webpage is provided below:

![Day Planner](./assets/images/OpeningPage.png)

Specific CSS is contained in one file, with the remainder available through a link to Bootstrap in the html:  ./assets/css/style.css

JS is contained in one file, with links to JQuery and Moment in the html: 
   ./assets/js/script.js  

 <br> 

## Credits
Repository for the submission of Week 5's Homework in UWA's Bootcamp.  
Emojipedia (https://emojipedia.org/) was used to define the symbol on the save button.  
MomentJS (https://momentjs.com/docs/#/use-it/) was utilised for time functions.  
Bootstrap (https://getbootstrap.com/) was used to assist with the CSS layout.  
JQuery (https://jquery.com/) was used to simplify the javaScript coding.  

<br>

## License  
Not applicable