'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  openingHours: {
    thu: {
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
  },

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
};

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
