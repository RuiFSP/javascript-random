function findOdd(A) {
  const count = A.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  for (const property in count) {
    //console.log(property + " : " + count[property]);
    if (count[property] % 2 !== 0) {
      return parseInt(property);
    }
  }
}

//tests

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

//other solutions

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

/* function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
} */
