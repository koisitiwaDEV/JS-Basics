function ReadPerDay(input){
 let Pages = Number(input[0]);
 let PagesPerHour = Number(input[1]);
 let DaysToRead = Number(input[2]);
 let HoursNeeded = Pages / PagesPerHour;
 let HoursPerDay = HoursNeeded / DaysToRead;
 console.log(`You need to read ${HoursPerDay.toFixed(1)} hours per day in ${DaysToRead} days if you want to finish in time!`);
}
ReadPerDay(["432","15","4"]);