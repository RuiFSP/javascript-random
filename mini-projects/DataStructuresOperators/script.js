'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //old way
  // thu: {
  //   open: 12,
  //   close: 22,
  // },

  //computed with ES6
  // [weekdays[3]]: {
  //   open: 12,
  //   close: 22,
  // },

  //we can even use template literals
  [weekdays[`${1 + 2}`]]: {
    open: 12,
    close: 22,
  },

  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  //prior to ES6
  //openingHours: openingHours,

  //ES6 enchanced object literals
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  //we can immediaetly use destructuring in object and set default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //old way of representing
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  // },

  //ES6 representation
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//looping Objects: obeject keys, values and entries

//property NAMES - keys
const properties = Object.keys(openingHours);
console.log(properties); //it is an array

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) openStr += `${day}, `;

console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values); //array de objectos

//Entries on objects - Key + value
const entries = Object.entries(openingHours);
console.log(entries);

//[key,value] but the value is destructured for open and close
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/* // -------- Optional Chaining (?.)

//------Properties
//onsole.log(restaurant.openingHours.mon); //undefined
//console.log(restaurant.openingHours.mon.open); //error

//we need to check first if property exists many with an if ??

//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); //11 just to check it works

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); //this will produce an error

//WITH Optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined - only if the property at the left of ? exist will return a value, else is undifined and not an error
console.log(restaurant.openingHours?.mon?.open); // undefined asking two questions
console.log(restaurant.openingHours.fri?.open); //11
console.log(restaurant.openingHours.sat?.close); //24

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  //const open = restaurant.openingHours[day]?.open || 'closed'; //day comes dinamically from array with a default and gives a problem at sat because of 0
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //solution and nullish coaalishng operator
  console.log(`On ${day}, we open at ${open}`); //shows what days is open and exist, the ones that don~t exist are showned as undifined
}

//------Methods - check if method exist before calling it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //['Focaccia', 'Pasta']
console.log(restaurant.orderrisotto?.(0, 1) ?? 'Method does not exist'); //method does not exist

//- also works with ARRAYS

const users = [{ name: 'jonas', email: 'hello2jons.com' }];

//old way
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//new syntax
console.log(users[0]?.name ?? 'User array empty'); */

//--------------------------- Enhanced Object Literals

//3 ways to represent bject literals in ES6

//----------1) we don´t have to repeat property name with the same name of variable

//if we wanted to incorporate new property object to restaurant

//prior to ES6
//openingHours: openingHours,

//ES6 enchanced object literals
// openingHours, console.log(restaurant);

//---------2) we don´t have to repeat function name with for methos

//old way of representing
// orderPasta: function (ing1, ing2, ing3) {
//   console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
// },

//ES6 representation
// orderPasta(ing1, ing2, ing3) {
//   console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
// },

//----------3) now we can compute property names

//Before we can only compute the value and now the roperty names, but is possible now with ES6

//const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//old way
// thu: {
//   open: 12,
//   close: 22,
// },

//computed with ES6
// [weekdays[3]]: {
//   open: 12,
//   close: 22,
// },

//we can even use template literals
// [weekdays[`${1 + 2}`]]: {
//   open: 12,
//   close: 22,
// },

//------------------------------- Looping Arrays : The for-of Loopp

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item); //shows each item from menu array

// //we can still use continue and break for this loop

// //disavantages - harder to get index
// // for (const item of menu.entries()) {
// //   console.log(item);
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // }

// // console.log(menu.entries()); //array iterator
// // console.log(...menu.entries()); //expand the array iterator each position contatis a new array with index and the element of the menu

// //smarter away we can use destructuring, since item is an array [i,el]
// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`);
//   //smarter away we can use destructuring, since item is an array [i,el]
// }

/* // ------------------------------- Logical Assignment Operators introduced in ES2021

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
 */
//set the a default value for numGuests for all restaurants
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; //short-circuiting
// rest2.numGuests = rest2.numGuests || 10; //short-circuiting
//rest1.numGuests ||= 10; //more concise way
// rest2.numGuests ||= 10; //more concise way

// nullish assigment operator (null or undefined)
/* rest1.numGuests ??= 10; //more concise way
rest2.numGuests ??= 10; //more concise way

rest1.owner = rest1.owner && '<ANONYMOUS>'; //short-circuiting
rest2.owner = rest2.owner && '<ANONYMOUS>'; //short-circuiting

//rest1.owner &&= '<ANONYMOUS>'; //short-circuiting
//rest2.owner &&= '<ANONYMOUS>'; //short-circuiting

console.log(rest1);
console.log(rest2); //now numGuest is 10
 */
// --------------- The Nullish Coalescing Operator (??)

/* restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; //10 is the default value, but wanted to be 0
console.log(guests);

//Introduced in ES2020
//Only  Nullish values will shor-circuit: null and undefined -- (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/* // ------------------------Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting evaluation
console.log('---- OR ----');

//for "OR OPERATOR" short-circuiting means, if the first value is truthy value it will return it

console.log(3 || 'rui'); //the result of OR does not have to be always bollean
console.log('' || 'rui'); //rui
console.log(true || 0); //true
console.log(undefined || null); //null, both are falsy, so returns the last value checked
console.log(undefined || null || 0); //retuns the last value evaluated , although all are falsy

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //restaurant.numGuests does not exist
console.log(guests1); //10

//taking advantage of short-circuiting is cool to set "default values" and avoid using ternary operator, if else statement
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// lets suppose that the number of guess is 0, it will return 10...but what we really want is 0, what can we do ? "nullish coalescing operator(??)"

//for "AND OPERATOR" short-circuiting works in the opposite way of OR operator and returns the first element that is falsy and returns thatvalue withou evaluating the rest
console.log('---- AND ----');

console.log(0 && 'jonas'); // first element is falsy
console.log('rui' && true); //both are thruty so it returns the last
console.log('Hello' && 23 && null && 'jonas'); //null

//pratical example, an many time we cn avoid using if statment if we simple want to check if something exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', ' spinich');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach'); */

/* 
falsy values are:

 - 0
 - empty string " " or ' '
 - null represent no values
 - undefined - when a variable does not have a values
 - NaN - not a number
 */

/* // ----------------------------REST Pattern and Parameters (...)

//the rest paraments will be used where we want to separate VARIABLES NAMES by commas
//the spread willl be used where we want to separate VALUES by commas

// 1) DESTRUCTURING

//opposite of spread (pack elements into an array)

// SPREAD, because of right side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// REST, because of left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//the Rest element must always be the last parameters of destructuring - it will be produce an error
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
//we remove sat from openinghours and then collect the REST of the weekdays
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
//any arbitrary number of arguments should word with this functions, we will use rest parameters
const add = function (...numbers) {
  console.log(numbers);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 3, 4, 5, 6, 7, 8);

const x = [23, 5, 7];
add(...x); //we take all the elements from the array using spread and feed them to add function and collected by numbers array with rest

//Again the rest paraments serves to collect all the unused parameters
restaurant.orderPizza('mushrooms', ' onions', ' olives', 'spinach'); //mushroom + array ['onions',' olives', 'spinach']
restaurant.orderPizza('mushrooms'); //mushroom + empty array [] */

/* // ----------------------------SPREAD OPERATOR (...)
//IMPORTANT: we can only use it , when we want values separated by commas (1,2,3,...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //
console.log(badNewArr);

const newGoodArr = [1, 2, ...arr]; //takes all the values from the array and write them manually into the the new arr
console.log(newGoodArr);

//pass arguments to functions

console.log(...newGoodArr); //when we need the elements individual 1,2,3,4,5

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //building a new array
console.log(newMenu);

//Main applications

//1) - create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

//2) - join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
console.log(menu);

// spread operator works on all iterables (arrays string, maps, sets, ) BUT NOT OBEJECTS

const str = 'rui';

const letters = [...str, ' ', 'S.'];

console.log(letters); //['r', 'u', 'i', ' ', 'S.']
console.log(...str);
// console.log(`${...str} Pinto`);

// 3) write a function that accepts multiple arguments - real world example

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients); //['a', 's', 'd']

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way
// restaurant.orderPasta(...ingredients); //new way

//4) OBJECTS : since ES2018 , not spread operator also works on objects, although they are not iterables
const newRestaurant = { foundingIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// 5) Shallow copies of objects

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';

console.log(restaurantCopy.name); //copy of the original restaurant
console.log(restaurant.name); */

//---------------------OBJECT DESTRUCTURING

/* //order of properties does not matter
const { name, openingHours, categories } = restaurant; //creates 3 variables based on object restaurant
//usefull extract data form APIs and save them in variables -> normally it is provided as object
console.log(name, openingHours, categories);

//give new names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//set default values, when we don´t have data is useful , just like we did with menu that does not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//destructuring
//we can´t do let {a,b} they already exist, we want to mutate
//{a,b} = obj // gives a error, because he thinks we have a code of block, to sole this we need to wrap with ()
({ a, b } = obj); //a and b exist in global scope but now we want to mutate them with values from object 111-> 23 and 999-> 7
console.log(a, b);

//nested objects
const { fri } = openingHours; //openingHour is already defined upstairs, else we needed restaurant.hours
console.log(fri); // {open:11, close:23}

//further destructuring
const {
  fri: { open, close },
} = openingHours; //openingHour is already defined upstairs, else we needed restaurant.hours
console.log(open, close); // 11, 23;

//if we need to provide an object for a function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//it will use default values for time and mainIndex
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}); */

//---------------------ARRAY DESTRUCTURING
// const arr = [2, 3, 4];

// //old fashion
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //destructuring arrays
// const [x, y, z] = arr;
// console.log(x, y, z);

// //example1
// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// //example2 - skip the second element
// const [first, , third] = restaurant.categories;
// console.log(first, third);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching positions main and secondary , need temp value the old fashion
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]; //switching positions with destructuring
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); // this will give an error, but we can use default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r will be = 1
