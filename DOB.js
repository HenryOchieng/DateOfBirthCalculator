var userMonth = document.getElementById("user-month");
var userDay = document.getElementById("user-day");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function() {
    var message = document.getElementById("message");
    var parsedMonth = (parseInt(userMonth.value) -1); // passes a string and returns an integer
    var parsedDay = parseInt(userDay.value);
    var parsedYear = parseInt(userYear.value);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateIs = new Date(parsedYear, parsedMonth, parsedDay);
    var dayIs = days[dateIs.getDay()]; // return the day of the week
    var monthIs = months[parsedMonth]; // return the month

    if (dayIs === undefined || monthIs === undefined) {
        message.innerText = "";
        setTimeout(function() {
            message.innerText = "Enter a valid Date";
        }, 500)
    }
    else {
        message.innerText = dayIs +", " + monthIs + " " + parsedDay  +", " + parsedYear;
    }
});
