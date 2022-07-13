// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

/*This function will return true if the credit card is valid or false otherwise 
- Luhn Algorithm is used to validate credit card https://en.wikipedia.org/wiki/Luhn_algorithm#Description
*/
const validateCred = (arr) => {
  let buildNewArray = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr.length % 2 === 0) {
      /*       console.log(" ------------ cycle is " + i); */
      if ((i + 1) % 2 === 0) {
        //even array
        /*         console.log(
          "inside first if and value is " +
            arr[i] +
            " and output will be " +
            arr[i]
        ); */
        buildNewArray.unshift(arr[i]);
      } else if (arr[i] * 2 > 9) {
        /*         console.log(
          "inside second if and value is " +
            arr[i] +
            " and output will be " +
            (arr[i] * 2 - 9)
        ); */
        buildNewArray.unshift(arr[i] * 2 - 9);
      } else {
        /*         console.log(
          "inside thrid if and value is " +
            arr[i] +
            " and output will be " +
            arr[i] * 2
        ); */
        buildNewArray.unshift(arr[i] * 2);
      }
    } else {
      //console.log("this is an odd array input " + arr.join('') + " cycle is " + i);
      //odd array
      if ((i + 1) % 2 !== 0) {
        //even array
        //console.log("inside first if " + arr[i]);
        buildNewArray.unshift(arr[i]);
      } else if (arr[i] * 2 > 9) {
        //console.log("inside second if " + arr[i]);
        buildNewArray.unshift(arr[i] * 2 - 9);
      } else {
        //console.log("inside thrid if " + arr[i]);
        buildNewArray.unshift(arr[i] * 2);
      }
    }
  }

  /*   console.log("Old arr is " + arr.join("") + " length is " + arr.length);
  console.log(
    "New arr is " +
      buildNewArray.join("") +
      " length is " +
      buildNewArray.length
  ); */

  const sum = buildNewArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  /* checking outputs
   console.log(
    `input is: ${arr} - output is: ${buildNewArray} - sum is : ${sum}`
  ); */
  return sum % 10 == 0 ? true : false;
};

/* This function checks which cards are invalid and return a new array with those references */
const findInvalidCards = (arr) => {
  return arr.filter((creditCard) => validateCred(creditCard) === false);
};

//console.log(findInvalidCards(batch));

/* This function finds the id of the company which issue the invalid credit card */
const idInvalidCardCompanies = (invalidCards) => {
  let arrayCompanies = [];

  let filterNumbers = invalidCards.map((element) => element[0]);

  for (let i = 0; i < filterNumbers.length; i++) {
    switch (filterNumbers[i]) {
      case 3:
        arrayCompanies.push("Amex");
        break;
      case 4:
        arrayCompanies.push("Visa");
        break;
      case 5:
        arrayCompanies.push("Mastercard");
        break;
      case 6:
        arrayCompanies.push("Discover");
        break;
      default:
        console.log("Company not found");
        break;
    }
  }

  const uniqueArrayCompanies = [...new Set(arrayCompanies)];
  return uniqueArrayCompanies;
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)));
