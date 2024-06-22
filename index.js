0
var daysOfTheWeek = [
"Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday", "Friday", "Saturday"
];





var applyToButton = document.getElementById("submit");

applyToButton.addEventListener("click", function() {
var date = document.querySelector('#input1').value;
var month = document.querySelector('#input2').value;
var getMonth = month - 1;
var age = Math.ceil(document.querySelector('#input3').value); 

var today = new Date();
var year = today.getFullYear();
var detYear = year - age;

var day = new Date(`${month} ${date} ${detYear}`);
var getDay = day.getDay();
var detDay = daysOfTheWeek[getDay];
if (month==="" || date ==="" || age==="") {

    
var getAlert = document.querySelector('h1');

getAlert.innerHTML="Please enter something in the field below!";

} 

else {

 var appear =   document.querySelector('h1');
appear.innerHTML = `You were born on ${detDay}, in the year ${detYear}.`
 
};

});






