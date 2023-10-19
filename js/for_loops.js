'use strict'

function showMultiplicationTable(inputNUM) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${inputNUM} * ${i} = ${inputNUM * i}`);
    }
}
showMultiplicationTable(7);

for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * (200 - 20)) + 20;
    if (randomNum % 2 === 0) {
        console.log(`${randomNum} is even.`);
    } else
        console.log(`${randomNum} is odd.`);
}

for (let i = 1; i <= 9; i++) {
    let numStr = i.toString()
    console.log(numStr.repeat(i));
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}

