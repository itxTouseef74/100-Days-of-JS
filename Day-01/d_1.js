let today=new Date();
let day=today.getDay();
allDays = ["Sunday", "Monday", "Tuesday","Wednesday" , "Thursday" , "Friday" , "Saturday"];
console.log("Today is: " + allDays[day] + "." );
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let amOrPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
console.log("Current time is : " + hours + amOrPm + " : " + minutes + " : " + seconds);
