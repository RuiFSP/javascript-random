"use strict";

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//task:
//1)we want to sort the array of bands , ignoring the strings THE,AN and A
//2) the output should have with the THE,AN and A

function strip(bandName) {
  return bandName.replace(/^(a|the|an)/i, "").trim();
}

/* const sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
}); */

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join(""); //this is need because without it will produce a comma at start. when we try to write something that is not a string html will force a "toString()" that will separate items by a comma
