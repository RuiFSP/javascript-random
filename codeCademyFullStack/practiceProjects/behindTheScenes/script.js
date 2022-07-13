'use strict';

//scope of variables
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Pedro';
      const str = `Oh, and you´re a millenial, ${firstName}`; //first score has pedro for first name
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); //var is function scoped, this is why i have access out of the block if
    // console.log(2,3);
  }
  printAge();

  return age;
}

const firstName = 'Rui';
calcAge(1982);
