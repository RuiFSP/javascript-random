"use strict";

/* This is more of a thinking challenge than a coding challenge 🤓

Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.

(function () {
const header = document.querySelector('h1');
header.


GOOD LUCK 😀 */

//IIFE function - Immediately invoked function expressions - "we do not have to call them"
/* (function () {
  const header = document.querySelector("h1");
  header.style.color = "red"; //right now immediately changes the text color

  return () => {
    header.style.color = "blue";
    console.log(`Color is now ${header.style.color}`);
  };
})(); */

//1
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red"; //right now immediately changes the text color

  document.querySelector("body").addEventListener("click", () => {
    const notBlueColor = ["blue", "yellow", "pink"];

    //we have access to the header variable, because of Closure
    header.style.color = `${
      notBlueColor[Math.floor(Math.random() * notBlueColor.length)]
    }`;
    console.log(`Color is now ${header.style.color}`);
  });
})();
