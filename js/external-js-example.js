"use strict";

let pi = 3.14;
console.log(pi);
pi = 22/7;
console.log(pi);

console.log(5 + 4); //Console logs print to the console, and ONLY prints to the console
let instructorName = "David";
console.log(instructorName);

let favoriteColor = "Green";
console.log(favoriteColor);

//Alert = pop-up message to the user from JavaScript
alert("Howdy from JavaScript!");

//We can concatenate inside an alert!
alert("Howdy from, " + instructorName);

//Confirm = pop-up message to the user from JavaScript, that has the ability to capture a boolean
let confirmed = confirm(`We have lunch at 12:30 today?`);
console.log(confirmed)

//Prompt = A pop-up message to the user from JavaScript that asks for a text value.
let userString = prompt("What is your favorite basketball team?");
console.log (`User's favorite team: ${userString}`);