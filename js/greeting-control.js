'use strict'

import getRandomGreeting from "./greeting-logic.js";

document.querySelector('form').addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById('greetingOutput').innerText = `${getRandomGreeting()} ${event.target[0].value}`;
    event.target[0].value = '';
});