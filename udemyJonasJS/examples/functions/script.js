'use strict';
//A CLOSER LOOK AT FUNCTIONS

//-------------------------------------------------------------------------------------------
//-------------------------------- 1) DEFAULT PARAMETERS ------------------------------------
//-------------------------------------------------------------------------------------------

/* const bookings = [];

//new way - ES6 - default values and they can contain expressions
//price dynamicaly calculated
//we canoot skip defaults
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {

//old way to set default parameters - ES5 - short-circuiting
//numPassengers = numPassengers || 1;
//price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', 1000); //we cannot skip numPassengers like this
createBooking('LH123', undefined, 1000); //skip a default parameter to it´s default (ES6) */

//-------------------------------------------------------------------------------------------
//---------------- 2) HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE -----------------------
//-------------------------------------------------------------------------------------------

/* const flight = 'LH234';
const rui = {
  name: 'rui pinto',
  passport: 546545646,
};

//creatign a checkIn function
const checkIn = function (flightNum, passenger) {
  //lets suppose we do a new assignment to variables
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 546545646) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

//flight is a primitive type, but rui is a reference type
//string point to the value
//object rui points to a reference
// checkIn(flight, rui);
// console.log(flight); //'LH234
// console.log(rui); //{name: 'Mr. rui pinto', passport: 546545646}

//In summary:
//Passing a primitive type to a function is the same as just creating outside of the function
//const flightNum = flight;
//Passing as object type to a function is the same as passing the object. So if we modify the object in the function it will be reflected in the original object
//const passenger = rui; //careful with this in large projects

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000); //it will be reflected in the original object - CAREFULL
};

newPassport(rui);
checkIn(flight, rui); //it will say "wrong password", because my number as modified. we have two functions manipulating an object, this will create a problem

//----------Notions----------
//passing by value - 
//passing by reference - javascript does not have this (memory adress is a value in JS) */

//-------------------------------------------------------------------------------------------
//-------------------- 3) FIRST-CLASS VS HIGHER-ORDER FUNCTIONS ----------------------------
//-------------------------------------------------------------------------------------------

/* //JS treats functions as first-class citizens
//Functions are simply values
//functions are just another "type" of object, and since objects are values, so functions are values
//they are not the same thing

// ---- 1)store functions in variables or properties
// -----1.1) in variables
const add = (a, b) => a + b;
console.log(add(2, 3));

//-----1.2 in properties as a method
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

console.log(counter.value); //23
counter.inc(); //increment
counter.inc(); //increemnt
console.log(counter.value); //25

//----2) pass functions as arguments to other functions
const greet = () => console.log('Hey rui');
document.querySelector('.buy').addEventListener('click', greet);

//----3) return functions FROM functions
//----4) Call methods on functions: (example of bind method)

//HIGHER-ORDER FUNCTIONS
// - a function that RECIEVES another function as argument, that RETURNS a new function, or BOTH

//1) functions that receives (greet) another functions (addEventLitener)
//greet is the callback functions

//2) functions that return new function
function count() {
  //Higher-order function
  let counter = 0;
  return function () {
    //return function
    counter++;
  };
}

//SUMMARY
//first class function is just a concept and says functiosn are simply values
//higher order-function exist */

//-------------------------------------------------------------------------------------------
//---------------------- FUNCTIONS ACCEPTING CALL BACK FUNCTIONS ----------------------------
//-------------------------------------------------------------------------------------------

//create a string without any spaces
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  //REST pattern
  const [first, ...others] = str.split(' ');
  //spread operator
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function and passing the "callback function" fn (oneWord and upperFirstWord)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed sstring: ${fn(str)}`);
  console.log(`Transformer by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['rui', 'pedro', 'ana'].forEach(high5); //3 wavings
