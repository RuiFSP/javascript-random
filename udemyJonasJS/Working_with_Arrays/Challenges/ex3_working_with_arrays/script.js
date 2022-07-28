"use strict";

// Coding Challenge #3 - arrow function and chaining

/* Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

const calcAverageHumanAge = (arr) =>
  Math.round(
    arr
      .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)) //age conversion to human years
      .filter((dogHumanAge) => dogHumanAge >= 18)
      .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0)
  );

//test data
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); //44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); //47
