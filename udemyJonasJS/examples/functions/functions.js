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
//first class function is just a concept and says functions are simply values
//higher order-function exist */

//-------------------------------------------------------------------------------------------
//---------------------4) FUNCTIONS ACCEPTING CALL BACK FUNCTIONS ---------------------------
//-------------------------------------------------------------------------------------------

/* //create a string without any spaces
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
  console.log(`Transformer by: ${fn.name}`); //gives the name of function - native function
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['rui', 'pedro', 'ana'].forEach(high5); //3 wavings */

//-------------------------------------------------------------------------------------------
//-------------------------5) FUNCTIONS RETURNING FUNCTIONS ---------------------------------
//-------------------------------------------------------------------------------------------

/* const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //this value i actually a function

greeterHey('Jonas'); //this works because greeterHey is a function //Hey Jonas
greeterHey('Steven'); //Hey Steven

//this work because of something called "CLOSURE"

greet('Hello')('Jonas'); //this is weird but works, because (greet('Hello')) is a function and it´s argument will be ('Jonas')

//what is the point of having functions returning functions  ?? ---> this is usefull for functional programming

//challenge simplify arrow function

const greet1 = greeting1 => name => console.log(`${greeting1} ${name}`);
greet1('Welcome')('Rui'); */

//-------------------------------------------------------------------------------------------
//--------------------------- 6) The CALL, APPLY, BIND Methods ------------------------------
//-------------------------------------------------------------------------------------------

/* const lufthansa = {
  airline: ' Luthansa',
  iataCode: 'LM',
  bookings: [],

  //book: function(){}
  //enhanced function
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //pushing entries to array
  },
};

lufthansa.book(239, 'Rui Pinto'); //adding 1 booking
lufthansa.book(635, 'Taina Sousa'); //adding second booking
console.log(lufthansa); //booking has 2 values

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],

  //bad practice to copy the function - extra boilerplate - check bellow
};

//we should creat a new function to store the method
const book = lufthansa.book;

//book(23, 'Sarah Williams'); //this boook function is no longer the method inside lufthansa, the this is pointing to undefined - this does not work
//we need to tell JS , what this keyword is pointing ? 3 methods can be used call(), apply() and bind()

//--------- CALL METHOD --------
book.call(eurowings, 23, 'Sarah Williams'); //we did not call the book method ourself, instead we called the call() method. It will call the book method, with this keyword of eurowings.
//this allow us the manually call a method -
console.log(eurowings); //Sarah Williams booked a seat on undefined flight EW23

book.call(lufthansa, 239, 'Pedro Simão'); //bookings now have 3 values
console.log(lufthansa); //Pedro Simão booked a seat on  Luthansa flight LM239

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Pedro Simão');
console.log(swiss);

//--------- APPLY METHOD --------
//similar to call method but it does not recieve a list of arguments like call arg(583, 'Pedro Simão'), but an array

const flightData = [538, 'Rui Pinto'];

book.apply(swiss, flightData); //recives an array of data
console.log(swiss);
//it is not that used in modern Javascript

book.call(swiss, ...flightData); //it is the same has above and just use spread
// book.apply(swiss, flightData) = book.call(swiss, ...flightData) .. take the last approach
//---> this allow us to used explicity the "this" keyword in any function

//--------- BIND METHOD --------
//probably more important than call and apply
//The big difference is that bond does not immediatelly calls the function, instead return a new function where the "this" keyword is bound

const bookEW = book.bind(eurowings); //now the keyword is bound to eurowings

bookEW(23, 'Steven Williams'); //we don´t need to specify the this keyword now
console.log(eurowings); //it is EuroWings booking array

//This makes it easier to book fights if we create abind for each one. let´s create for the other companies
const bookLH = book.bind(lufthansa); //now the keyword is bound to lufthansa
const bookLX = book.bind(swiss); //now the keyword is bound to swiss

//but we can pass also arguments for specific stuff

const bookEW23 = book.bind(eurowings, 23); //for this case 23 will be the defaulf and the function only needs the name

bookEW23('pedro paupa');
bookEW23('joão xpto');
console.log(eurowings); //4 bookings , with the last two values added

//this a pattern called PARTIAL APPLICATION

// ---- > Another application is for objects with event listeners
lufthansa.planes = 300; //new property
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //NaN , this is pointing for button, this is why we get NaN

//solution
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //this keyword is bound to the luftansa object

//----> Another example for bind method - partial application (pre-set parameters). In this case we don´t even care about the this keyword

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //2200

const addVAT = addTax.bind(null, 0.23); //we don´t care about the this keyword, so we use null and set the tax rate to 23%
// same as addVAT = value => value + value * 0.23;

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//Challenge use the technique "function returning a function" for above example instead of bind

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
//same results as above //123 and 28.29 */

//-------------------------------------------------------------------------------------------
//------------- 7) Immediately Invoked Function Expression (IIFE) ---------------------------
//-------------------------------------------------------------------------------------------

/* //Sometimes we need a function that disappears after called once !!
//How can we do that ? we can create a function and execute it once

const runOnce = function () {
  console.log('This will never run again');
};

//runOnce();

//but later we can do runOnce() again !!
//This is not it, we want to run a function immediately and not save it somewhere

//we wrap the function with parenthesis () add execute it immediately like we normally do with () -> something like (function(){})()
//example -  IIFE - immediately invoked function expression
(function () {
  const isPrivate = 23;
  console.log('function value: This will never run again ');
})();

//similar to arrow function (() => something...)()
(() => console.log('arrow expression This will never run again'))();

//functions create scopes and we don´t have access to variables inside of them
//console.log(isPrivate); isPrivate not defined
// we also say that this data is private or encapsulated
// It is important to hide variables and scopes to protect variables and IIFE was invented because of it
//let and const create a block scope and this is why we do not use var anymore
{
  const isPrivate = 23;
  var notPrivate = 24;
}
console.log(notPrivate);
//In modern javascript we don´t use IIFE anymore, because we can simply create a block to hide it, unless we really need to run something that runs only once */

//-------------------------------------------------------------------------------------------
//-------------------------------- 8) Closures ----------------------------------------------
//-------------------------------------------------------------------------------------------
