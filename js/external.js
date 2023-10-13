"use strict";
console.log(`Hello from external JavaScript`);

alert(`Welcome to my Website!`);

let userFavoriteColor = prompt(`What is your favorite color?`);
alert(`Great, ` + userFavoriteColor + ` is my favorite color too!`);

let littleMermaidDays = prompt(`How many days would you like to rent The Little Mermaid?`);
let hercules = prompt(`How many days would you like to rent Hercules?`);
let brotherBear = prompt(`How many days would you like to rent Brother Bear?`);

let dailyRate = prompt(`What is the daily rental rate?`);
let totalCost = (littleMermaidDays + hercules + brotherBear) * dailyRate;
alert(`You owe $` + totalCost.toFixed(2));
    //added toFixed to include 2 decimals-courtesy of classmate

let googlePay = prompt(`How much is Google's pay per hour?`);
let googleHrs = prompt(`How many hours did you work this week at Google?`);
let amazonPay = prompt(`How much is Amazon's pay per hour?`);
let amazonHrs = prompt(`How many hour did you work this week at Amazon?`);
let metaPay = prompt(`How much is Meta's pay per hour?`);
let metaHrs = prompt(`How many hours did you work this week at Meta?`);
let weekPay = ((googlePay * googleHrs) + (amazonPay * amazonHrs) + (metaPay * metaHrs));
alert(`Your pay for this week is: $` + weekPay.toFixed(2) + `!`);
