'use strict'

let i = 2;
while (i <= 65536) {
    console.log(i);
    i*=2;
}

let allCones = Math.floor(Math.random() * 50) + 50
console.log(`${allCones} cones to sell.`)
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= allCones) {
        console.log(`${conesSold} cones sold`);
        allCones-=conesSold;
        console.log(`${allCones} cones left.`)
    } else console.log(`Cannot sell you ${conesSold} cones I only have ${allCones}...`)
} while (allCones > 0);
console.log("Yay! I sold them all!")
