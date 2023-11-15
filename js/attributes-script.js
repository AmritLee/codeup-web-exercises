'use strict'
// setTimeout(function () {
//     document.querySelector("#profile-pic").setAttribute("src", "images/snorlax.png")
// }, 2000)
// setTimeout(function () {
//      document.getElementById("profile-pic").src = "images/snorlax.png";
//  }, 2000);
//
// setTimeout(function () {
//     document.querySelector("#profile-name").innerHTML = "profile-name"
// }, 4000);
// setTimeout(function (){
//      document.getElementById("profile-name").innerHTML = "profile-name";
// }, 4000);
//
//
// setTimeout(function () {
//     const profileDesc = document.querySelector("#profile-desc");
//     profileDesc.style.color = "blue";
//     profileDesc.style.fontFamily = "Arial, sans-serif";
// }, 6000);
//
//
// setInterval(function () {
//     const profileCard = document.querySelector("#profile-card");
//     profileCard.classList.toggle("toggle-color");
// }, 2000);

//As one function
function profileInterval() {
    // Array of colors
    let colors = ["red", "green", "yellow", "violet", "orange", "pink"];

    // Change profile picture source after 2000 milliseconds (2 seconds)
    setTimeout(function () {
        document.querySelector("#profile-pic").setAttribute("src", "images/snorlax.png");
    }, 2000);

    // Change profile name after 4000 milliseconds (4 seconds)
    setTimeout(function () {
        document.querySelector("#profile-name").innerHTML = "profile-name";
    }, 4000);

    // Modify profile description styles after 6000 milliseconds (6 seconds)
    setTimeout(function () {
        const profileDesc = document.querySelector("#profile-desc");
        profileDesc.style.color = "blue";
        profileDesc.style.fontFamily = "Arial, sans-serif";
    }, 6000);

    // Toggle color of profile card every 2000 milliseconds (2 seconds)
    setInterval(function () {
        const profileCard = document.querySelector("#profile-card");
        profileCard.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 2000);

    // Prompt user for input after all timeouts have expired
    setTimeout(function () {
        const userInput = prompt("Enter a new profile name:");
        //if user entered a value, then replace profile name with userInput
        if (userInput !== null) {
            document.querySelector("#profile-name").innerHTML = userInput;
        } else {
            alert("You did not enter a profile name.")
        }
    }, 8000);
}

//call the function to start the updates
profileInterval();