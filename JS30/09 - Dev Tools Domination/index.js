"use strict";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular log
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string! ", "🤡");
//console.log(`hello I am ${var}`)=; bets practice with ES6

// Styled
//console.log("%c I am some great text", "font-size:50px");

// warning!
console.warn("OH NOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per week");

// Testing
//console.assert(1 === 1, "That is wrong"); //only fires if something fails
//console.assert(1 === 2, "That is wrong"); //only fires if something fails

const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), " That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p); //only shows the elemnt
console.dir(p); //dir shows a dropdown of all the properties/methods that live on element

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/RuiFSP")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//table
console.table(dogs);
