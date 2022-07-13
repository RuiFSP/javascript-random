const _ = {
  //Methods
  //Clamps number within the inclusive lower and upper bounds.
  clamp: (number, lower, upper) => {
    const lowerclampedValue = Math.max(number, lower); //return number < lower ? lower : number
    const clampedValue = Math.min(lowerclampedValue, upper); //returns

    return clampedValue;
  },
  inRange: (number, start, end) => {
    let a = start;
    let b = end;
    let temp;

    if (b === undefined) {
      a = 0;
      b = start;
    }

    if (a > b) {
      temp = a;
      a = b;
      b = temp;
    }

    const isInRange = number >= a && number < b ? true : false;

    return isInRange;
  },
  words: (string) => {
    const words = string.split(" ");

    return words;
  },
  pad: (string, length) => {
    if (length <= string.length) {
      return string;
    }

    const startPaddingLength = Math.floor((length - string.length) / 2);

    const endPaddingLength = length - string.length - startPaddingLength;

    const paddedString =
      " ".repeat(startPaddingLength).concat(string) +
      " ".repeat(endPaddingLength);

    return paddedString;
  },
  has: (object, key) => {
    const hasValue = Object.hasOwn(object, key) //checking if it has a key
      ? object.key // checking if that key has a value
        ? true
        : false
      : false;

    return hasValue;
  },
  invert: (object) => {
    let invObject = {};

    for (const key in object) {
      //old keys
      //console.log(`key: ${key} - value: ${object[key]}`);
      //inverting key/value
      invObject[object[key]] = key; //overrides the keys that already exist
    }

    //console.log(invObject);
    return invObject;
  },
  findKey: (object, predicate) => {
    for (const key in object) {
      /*       console.log(
        `function: ${predicate(object[key])} key: ${key} - vehicle: ${
          object[key].vehicle
        } - hero: ${object[key].hero}`
      ); */

      if (predicate(object[key])) return key;
    }
  },
  drop: (array, number) => {
    //number represents the number of items to drop from the beginnning of array - slice(n)
    //returns the original array without the removed items
    //if number is undifined, drop at least 1

    if (number === undefined) array.shift();

    const arraySliced = array.slice(number);

    console.log(arraySliced);
    return arraySliced;
  },
  dropWhile: (array, predicate) => {
    //predicate function takes 3 arguments (current element, current element index , end the array)
    //returns a copy of the array with sliced elements until predicate function returns falsy

    const dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });

    const dropArray = _.drop(array, dropNumber);

    return dropArray;
  },
  chunk: (array, size) => {
    const newArray = [];

    //no size provided
    if (size === undefined) {
      array.forEach((element) => {
        newArray.push([element]);
      });
    }

    for (let i = 0; i < array.length; i + size) {
      let arrChunk = array.splice(i, i + size);

      newArray.push(arrChunk);
    }
    return newArray;
  },
};

// Do not write or modify code below this line.
module.exports = _;
