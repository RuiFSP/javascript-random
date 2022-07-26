" use strict";

//primitives do not give us problems with copies (string)

// start with strings, numbers and booleans
/* let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name1 = "wes";
let name2 = name1;
console.log(name1, name2);
name1 = "wesley";
console.log(name1, name2); */

//-->primitives point to a value not a reference

//------------------reference types give as problems with copies (array, objects)

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

const team = players;
//console.log(players, team);

// You might think we can just do something like this:
team[3] = "Lux";

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

//--------------- So, how do we fix this? We take a copy instead! -------------

// one way
const team2 = players.slice(); //make a copy of the original array
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread - my favorite
const team4 = [...players];
//using Array
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

console.log(person);
// and think we make a copy:
/* const captain = person;
captain.number = 99; */

//CAREFUL changes the original object - again, pointing to a reference
/* console.log(person);
console.log(captain); */

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 }); //does not change person object

// We will hopefully soon see the object ...spread
const cap3 = { ...person }; //spread object

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const rui = {
  name: requestIdleCallback,
  age: 42,
  social: {
    twitter: "@ruifspinto",
    instagram: "@ruifspinto",
  },
};
console.log("primary object ");
console.log(rui);

const rui1 = Object.assign({}, rui);

console.log("Copy with assign" + rui1);
console.log(rui1);

//lets assign a new twitter account to rui1.
rui1.social.twitter = "@netAccount";
console.log(rui1, rui); //it will change the original object rui also - CAREFUL

//Object Assign only goes 1 level deep !!!!!!

const rui2 = { ...rui };
console.log("Copy with spread");
console.log(rui2);
rui2.social.instagram = "@extraAccount";

console.log(rui2, rui);

//similar case for spread operator - careful if you need more than one level deep

//ASK yourself if you need a deep CLONE - there are program to do this , but first

//SOLUTION - -> poor man deep clone - careful with performing issues

const rui4 = JSON.parse(JSON.stringify(rui)); //makes a full copy

console.log(rui4);

rui4.social.instagram = "@final account";

console.log(rui4, rui1); //DOES NOT CHANGE THE ORIGINAL OBJECT -- COOL :)

//we are transforming the object to a string (primitive) with JSON.stringify(object) and then we transform it again into an object with JSON.parse()
