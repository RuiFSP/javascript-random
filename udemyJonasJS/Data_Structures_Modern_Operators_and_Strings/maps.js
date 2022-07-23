"strick mode";
/* Map object holds key-pairs just like objects but:
 1) but the big difference is keys can be either primitives (null, undefined, boolean, number, string, symbol) or references (Objects, Functions, Collections, Arrays, Dates, etc... other types of Objects)
 2) Map is iterable for..of */

//Ideally we should start with:

const map1 = new Map(); //creatign anew instance of Map Object

console.log(map1); //empty
console.log(typeof map1); //object

//Methods

// 1) inserting key-value - set()
map1.set("rui", 42);
console.log(map1); //Map(1) { 'rui' => 42 }

// since it updates map immediately we can chain sets
map1
  .set("pedro", 34)
  .set("tania", 44)
  .set("inocencia", 70)
  .set("professions", ["developer", "student", "seller", "massegeur"])
  .set("workStart", 8)
  .set("workFinish", 17);

console.log(map1);

//inserting other properties that are not primitives
map1.set(true, "we are working").set(false, "out of office"); //ket are bollean values

console.log(map1);

// 2) similar methods to Sets (size, has(), delete(), clear())
console.log(map1.size); //9
console.log(map1.has("rui")); //true
console.log(map1.has("andreia")); //false
console.log(map1.delete("pedro")); //true pedro is rmeoved
//console.log(map1.clear()); //Map(0) {}

// 3) get valeus with get()
//complex and funny stuff , check working hours

const checkTime = 19; //going to check if people work at 19
const response = map1.get(
  checkTime >= map1.get("workStart") && checkTime <= map1.get("workFinish")
); //evaluates if this expression is true or false and then gets the respective value for boolean response

console.log(response); //out of office

// let´s set a reference key array
map1.set([1, 2], "Testing");
console.log(map1); // it was added [ 1, 2 ] => 'Testing'

//let try get value from a reference property
console.log(map1.get([1, 2])); //undefined ?? why ?? because how Js works behind , it is pointing to a reference not value

//to solve this:

const value = [2, 3];
map1.set(value, "Testing2");
console.log(map1);
console.log(map1.get(value)); //now it works Testing2, because is poiting to the same value

//Alternative to populate a map instead of using set
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again"],
]);

//Object.entries() is an array of array that is similar to the structure of question
console.log(question);

//Note1: Convert Object to Map
//const example1 = new Map(Object.entries(something)) nice trick to convert object to map

//Quiz App
console.log(question.get("question"));

//good use to destructuring and question is iterable
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`answer ${key} : ${value}`);
}

//const answer = Number(prompt("Your answer")); //needs to be converted to a number
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//Convert Map to array

console.log([...question]); //[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(question.entries()); //MapIterator
console.log(question.keys()); //MapIterator
console.log(question.values()); //MapIterator

//spread them
//console.log(...question.entries()); //
console.log(...question.keys()); //question 1 2 3 correct true false
console.log(...question.values()); //What is the best programming language in the world? C Java Javascript 3 Correct 🎉 Try again

//----- maps iteration
