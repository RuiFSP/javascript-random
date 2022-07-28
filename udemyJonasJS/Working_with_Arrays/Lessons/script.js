'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//receives an array of movements (deposits and withdrawals)
const displayMovements = function (movements) {
  //clear values in the html
  containerMovements.innerHTML = '';
  //we used to do .textContext = ""

  //goes through the array of each account and outputs their movements
  movements.forEach(function (mov, i) {
    //checking if it is a deposit or withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //this tag is already in html - just a copy and adjust the string literal
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    //inserts the html create by loop after parent class="movements"
    //in summary all we have to do is to create a string html and use this method to insert it
    containerMovements.insertAdjacentHTML('afterbegin', html); //with 'beforeend' the order will be inverted
  });
};
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
//Computing Usernames
const createUserNames = accs =>
  accs.forEach(acc => {
    //to produce a side effect without returning anything adding a new property (mutate)
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0]) //new array
      .join('');
  });

createUserNames(accounts); //new property userName with the shortName version

//computing totals of deposits, withdraws and interest rate
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      //console.log(arr);
      return int >= 1;
    }) //only pays interest > =1
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

//Event handlers
let currentAccount; //we need to have current account

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevents the page to reload, because form submits immediately
  //Enter will also trigger a click event
  //We need to save current account in a variable outside
  //if does not find an account , it will return undefined
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  //console.log(currentAccount); //value of an input field

  //"optional chaining" is the solution for the undefined, avoids the error
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and a message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100; //turn on display

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //clear focus of cursor
    inputLoginPin.blur();
    //display movements
    displayMovements(currentAccount.movements);
    //display balance
    calcDisplayBalance(currentAccount.movements);
    //display summary
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

//-------------------------------------------------------------------------------------------
//-----------------------------------------SIMPLE ARRAY METHODS------------------------------
//-------------------------------------------------------------------------------------------

//Arrays are objects and we have access to special methods

/* let arr = ['a', 'b', 'c', 'd', 'e'];

//--------------------------------------------
//----SLICE() method-- similar to strings method
//--------------------------------------------
//CREATES NEW ARRAY
console.log(arr.slice(2)); //crete a new array with the extracted parts ['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); // always the last element of an array['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
//useful to make a shallow copy of an array
console.log(arr.slice()); //similar [..arr] i like the spread version

//--------------------------------------------
//----SPLICE() method-- similar to strings method
//--------------------------------------------
// MUTATES the original array
//console.log(arr.splice(2)); //extract from from original array
console.log(arr); // [a,b] the extracted elements were removed from the original array
//useful to delete elements form a array
arr.splice(-1); //remove the last elements from original array
arr.splice(1, 2); //the last argument is to say how many items we want to remove from the initial position
console.log(arr);

//--------------------------------------------
//----REVERSE() method-- similar to strings method
//--------------------------------------------
//MUTATES the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//--------------------------------------------
//----CONCAT() method-- similar to strings method
//--------------------------------------------
//CREATES NEW ARRAY
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //similar using spread operator

//--------------------------------------------
//----JOIN() method-- similar to strings method
//--------------------------------------------
//CREATES NEW ARRAY
console.log(letters.join(' - '));

//other methods we talked POP(),PUSH(),UNSHIFT(),SHIFT(),INDEXOF(),INCLUDES() */

//-------------------------------------------------------------------------------------------
//-----------------------------------------at Method----------------------------------------
//-------------------------------------------------------------------------------------------
//Included in ES2022

/* const arr = [23, 11, 64];
console.log(arr[0]); //traditional way
console.log(arr.at(0)); //same thing - we do what we say

//why is it useful ??
//let´s suppose we don´t know the length of an array and we want the last element

//two more traditional ways of solving the problem
console.log(arr[arr.length - 1]); //64
console.log(arr.slice(-1)[0]); //64

//with the new at method makes it easier
console.log(arr.at(-1)); //64 COOL: we can write the same negative index such as slice method
//at is also cool for method chaining
//also works on strings
console.log('rui'.at(0));
console.log('rui'.at(-1)); */

//-------------------------------------------------------------------------------------------
//-----------------------------------------forEach Method------------------------------------
//-------------------------------------------------------------------------------------------

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//traditional for of method
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH ------');
//using forEach method
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//each iteration we tell forEach, that he should log the string mentioned in if
//Higher order function (forEach) and callback function (anonymous)
// 0: function(200)
// 1: function(450)
// 2: function(-450)
// ...

//forEach method is cleaner to read and chaining
//what if we need access to a counter variable

// need to use entries() method   in traditional way ex:  for (const [i,value] of movements.entries())
console.log('----- for of [i,movement]------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//much easier with forEach Method, we get an value,index
console.log('----- FOREACH (movement,i)------');
//order matters (value,index,array)
movements.forEach(function (mov, i) {
  //callbackFunc (value: number, index: number, array[]: number) - first is the value
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

//one fundamental difference between them is that we can´t break out of a forEach -> so continue() and break() do not work as in (for ..of) */

//-------------------------------------------------------------------------------------------
//--------------------------------forEach Method With Maps and Sets--------------------------
//-------------------------------------------------------------------------------------------

/* //it is also available in Maps and Sets

// ------------------ Maps ------------------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//notice the order - important again
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// ------------------ Set ------------------
const currenciesUnique = new Set(['USD', 'EUR', 'GDP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
//it does not have keys, just values...so in this case keys = value

currenciesUnique.forEach(function (value, _, set) {
  //_ is something we may use to discard a variable, in this case we do not have keys
  //console.log(`${key} : ${value}`);
  console.log(`${value} : ${value}`);
}); */

//-------------------------------------------------------------------------------------------
//-------------Data Transformation with map(), filter(), reduce() ---------------------------
//-------------------------------------------------------------------------------------------

//---------------------map method()
//map returns a NEW ARRAY containing the results of applying an operation on all array elements
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //suppose they are in euros
//we want to convert it to dollars

const eurToUsd = 1.1;

//this is not mutates the original array
//functional programming - modern way of doing stuff
//concise way - arrow function
const movementsUsd = movements.map(mov => mov * eurToUsd);

//for of loop - more work than map method();
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}

console.log(movementsUsd);
console.log(movementsUsdFor);

//nice and clean
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions); */

//---------------------filter method()
//filter returns a NEW ARRAY containing the array elements that passed a specified test condition
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);

console.log(movements);
console.log(deposits);

//for of alternative
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//mine challenge
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); */
//---------------------reduce method()
//there is no new array, just the reduced value
//reduce boils ("reduces") all the array elements down to a single value (e.g adding all elements together) - called "snowball effect"
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator is like a snowball
/* const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  return acc + curr;
}, 100); //default value is 100 - Iteration 0 will be 100 */

//short version
/* const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

console.log(balance); */

//for loop
/* console.log('---- "for...of" alternative ----');
let balanceOf = 100;
for (const [i, mov] of movements.entries()) {
  console.log(`Iteration ${i} : ${balanceOf}`);
  balanceOf += mov;
}
console.log(balanceOf); */

// Maximum value of movement array using reduce()

/* const maxMovementValue = movements.reduce((acc, mov) =>
  acc > mov ? acc : mov
); //by default he will pick the first element */

//console.log(maxMovementValue);

//console.log(Math.max(maxMovementValue));

//-------------------------------------------------------------------------------------------
//------------------------------------Chaining Methods --------------------------------------
//-------------------------------------------------------------------------------------------
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//chaining operations , first we filter the deposits -> transform to USD -> get total and sum all deposits
//In method chaining, every operation needs to return an array - PIPELINE
//makes it harder to debug

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

//we can use the parameter arr to see the previous arr
const totalDepositsUSD1 = movements
  .filter((mov, _, arr) => {
    console.log(`Array feeding filter is : ${arr}`); //debug filter
    return mov > 0;
  })
  .map((mov, _, arr) => {
    console.log(`Array feeding map is : ${arr}`); //debug map
    return mov * eurToUsd;
  })
  .reduce((acc, mov, _, arr) => {
    console.log(`Array feeding reduce is : ${arr}`); //debug reduce
    return acc + mov;
  }, 0);

//console.log(totalDepositsUSD);
console.log(totalDepositsUSD1); */

//-------------------------------------------------------------------------------------------
//---------------------------------------find() method --------------------------------------
//-------------------------------------------------------------------------------------------
//retrieve an element of an array based on a condition
//the first element where the operation becomes true
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal); //-40o is the first withdrawal

//lets work with objects , because find can be really useful
//because we can find in array an object based on some property
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
//usually the goal of find is to find ONE element

//lets see the difference with for of loop
let obj = {};

for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    obj = account;
  }
}

console.log(obj); */
