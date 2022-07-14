// practice with SETS

const names = ["rui", "ana", "pedro", "fernando", "rui", "ana"]; //array with duplicates

//lets suppose we want an array without duplicates

const uniqueNames = new Set(names);

console.log(uniqueNames); //retuns a set with unique values from name's array. This is iterable so we can use spread to buld our array

//conversion from SET to ARRAY
const uniqueNamesFinal = [...new Set(names)];

console.log(uniqueNamesFinal); //returns an array with unique values

//----Methods that we can apply to SETS---------

//console.log(uniqueNames.length); //undefined
// 1) length of SET
console.log(uniqueNames.size); //equivalent to array.length

// 2) adding unique elements to SET
console.log(uniqueNames.add("francisco")); // adds a unique value to set
console.log(uniqueNames.add("rui")); //this won´t work rui already exists

// 3) verify is an element exist
console.log(uniqueNames.has("rui")); //true
console.log(uniqueNames.has("maria")); //false

// 4) delete an element from set
console.log(uniqueNames.delete("franscisco")); //false item does not exist
console.log(uniqueNames.delete("rui")); //true - item removed
console.log(uniqueNames);

// 5) delete everything from SET
//console.log(uniqueNames.clear()); //deletes everything from SET

//---Iteration with SETS

// 1) for of
for (const name of uniqueNames) console.log(name); //prinst all the names

//2) keys
for (const name of uniqueNames.keys()) console.log(name); //prinst all the names

// 3) values
for (const name of uniqueNames.values()) console.log(name); //keys and values are the same

//4) entries
for (let [key, value] of uniqueNames.entries()) console.log(key, value); //keys and values are the same [rui,rui] repeats key and value

//intersection / filter one element form unique set

let filterName = uniqueNamesFinal.filter((el) => el === "rui");
console.log(filterName);

//intersection of two array with values in common

const moreNames = ["pedro", "mario", "ana", "raquel", "ana", "mario", "rui"];

console.log(moreNames);
//build unique value

uniqueMoreNames = new Set(moreNames); //unique values from Set more names
console.log(uniqueMoreNames);

//intersection between arrays with same values
//uniqueNAme = { 'rui', 'ana', 'pedro', 'fernando', 'francisco' }
//uniqueMoreName =  { 'pedro', 'mario', 'ana', 'raquel', 'rui' }

const filterArrayNameInCommon = [...uniqueNames].filter((el) =>
  uniqueMoreNames.has(el)
);

console.log(filterArrayNameInCommon); //ana and pedro in common
