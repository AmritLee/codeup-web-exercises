'use strict'

let userInput = parseFloat(prompt("Enter an odd number between 1 and 50:"));
    if (userInput >= 1 && userInput <= 50 && userInput % 2 ===1) {
         for (let i = 1; i <= 50; i ++) {
            if (i % 2 === 0) {
            continue;}

            if (i === userInput) {
                console.log('Skipping inputted number: ' + userInput);
                continue;
            }
            console.log('Here is an odd number: ' + i)
         }
    } else {
        alert('Invalid input.')
    }

// let userInput;
// while(true) {
//     userInput = parseFloat(prompt("Choose an ODD number between 1 and 50"));
//     if(userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
//         break;
//     }
// }
// console.log(userInput);
//
// for(let i = 1; i <= 50; i += 2) {
//     if (i === userInput ) {
//         console.log("oops gonna skip");
//         continue;
//     }
//     console.log(`here is an odd number: ${i}`)
// }
