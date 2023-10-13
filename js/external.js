"use strict";
console.log(`Hello from external JavaScript`);

alert(`Welcome to my Website!`);

let userFavoriteColor = prompt(`What is your favorite color?`);
alert(`Great, ` + userFavoriteColor + ` is my favorite color too!`);
    /** can use ${userFavoriteColor} instead of concatenation;
    *`Great, ${userFavoriteColor} is my favorite color too!`
    */

let littleMermaidDays = parseFloat(prompt(`How many days would you like to rent The Little Mermaid?`));
let hercules = parseFloat(prompt(`How many days would you like to rent Hercules?`));
let brotherBear = parseFloat(prompt(`How many days would you like to rent Brother Bear?`));
    //added parseFloat to change response to a number instead of a string

let dailyRate = parseFloat(prompt(`What was the daily rental rate?`));
let totalCost = (littleMermaidDays + hercules + brotherBear) * dailyRate;
alert(`You owe $${totalCost.toFixed(2)}`);
    //edited to use template literal

let googlePay = parseFloat(prompt(`How much is Google's pay per hour?`));
let googleHrs = parseFloat(prompt(`How many hours did you work this week at Google?`));
let amazonPay = parseFloat(prompt(`How much is Amazon's pay per hour?`));
let amazonHrs = parseFloat(prompt(`How many hour did you work this week at Amazon?`));
let metaPay = parseFloat(prompt(`How much is Meta's pay per hour?`));
let metaHrs = parseFloat(prompt(`How many hours did you work this week at Meta?`));
let weekPay = ((googlePay * googleHrs) + (amazonPay * amazonHrs) + (metaPay * metaHrs));
alert(`Your pay for this week is: $${weekPay.toFixed(2)}!`);
