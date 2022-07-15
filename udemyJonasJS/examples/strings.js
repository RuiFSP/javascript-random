const airline = "TAP Air Portugal";

// ------------ Working with String Part 3

//split method
console.log("a+very+nice+string".split("+")); //stores in an array ['a', 'very', 'nice', 'string']
console.log("Rui Pinto".split(" ")); //stores in an array ['Rui', 'Pinto']

const [firstName, lastName] = "Rui Pinto".split(" "); //power of destructuring
console.log(firstName, lastName); //Rui Pinto

//join method
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //Mr. Rui PINTO

const capitalizeName = (name) => {
  const names = name.split(" "); //each word in array
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //alternative
  }

  return namesUpper.join(" ");
};

console.log(capitalizeName("pedro maduro jorge")); //Pedro Maduro Jorge
console.log(capitalizeName("rui pinto")); //Rui Pinto

//Padding a string - add number a caracter to the string - padStart(), padend()

const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); //+++++++++++Go to gate 23!
console.log("rui".padStart(25, "+")); // adds more + to have some length above
console.log(message.padStart(25, "+").padEnd(35, "+")); //add more 10 at the end +++++++++++Go to gate 23!++++++++++

//practice application- credit card masking //normally we only see the last 4 digits

const maskCreditCard = (number) => {
  const str = number + ""; // trick to convert number to string
  const last = str.slice(-4); //last for digits
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(43335465)); //****5465
console.log(maskCreditCard("6668586586587585676755")); //******************6755

//Repeat Method

const message2 = "Bad weather... All departures Delayed... ";
console.log(message2.repeat(5));

//cool application to repeat
const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

// ------------ Working with String Part 2

/* console.log(airline.toLowerCase()); //all lower case
console.log(airline.toUpperCase()); //all upper case

// 1) Fix capitalization in name
const passenger = "piKatChu"; //it should look like this /Rui

const passengerCorrect = function (passengerName) {
  const passengerLower = passengerName.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};

console.log(passengerCorrect(passenger)); //Pikatchu

// 2) Comparing user input email
const email = "hello@rui.com";
const loginEmail = " Hello@Rui.cOM \n";

// const lowerEmail = loginEmail.toLowerCase(); //
//const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim(); //chaining operations

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing 3) change $ for €

const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "€").replace(",", "."); //chaining again
console.log(priceUS);

const announcement =
  "All passengers como to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); //only the first occurence
console.log(announcement.replaceAll("door", "gate")); //new function
console.log(announcement.replace(/door/g, "gate")); //regular expression

// return Booleans (includes(),startsWith(),endsWith())
const plane = "A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.includes("Boeing")); //false
console.log(plane.startsWith("Air")); //false
console.log(plane.startsWith("A32")); //true

if (plane.startsWith("A320") && plane.endsWith("neo"))
  console.log("Part of New AIRBUS");

//Practice exercise

const checkBaggage = (items) => {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are not allowed on board");
  else console.log("Welcome aboard!!");
};

checkBaggage("I have a laptop, Some food and a pocket Knife");
checkBaggage("ISocks and camera");
checkBaggage("Got some snack and a gun for protections"); */

/* ------------ Working with String Part 1 

const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);

//Methods - immutable, always return a new string

console.log(airline.indexOf("r")); //string are also 0 based - 6
console.log(airline.lastIndexOf("r")); //string are also 0 based - 10
console.log(airline.indexOf("Portugal")); //look for words - 8

console.log(airline.slice(4)); //Air Portugal - this s a subsstring and does not change the original string

//string are immutable , they are primitives
console.log(airline.slice(4, 7)); //Air inclusive => [start, end [ <= exclusive length always = end-start
console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal
console.log(airline.slice(-2)); //extracts from end al
console.log(airline.slice(1, -1)); //AP Air Portuga

//practice

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1); //last caracter

  if (s === "B" || s === "E") console.log("You got the middle seat 😢");
  else console.log("You got lucky 🍀");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//normally methods are only applied to reference variables, but why does it apply to primitive string ?
//Behind the scenes, JS is smart and transform "strings primitive" into "string object" with the same
//content -  This is called BOXING - takes a strign e put into a box Object

console.log(new String("Jonas")); //String {'Jonas'}
console.log(typeof new String("Jonas")); //object , this is the conversion JS does behind the scenes
console.log(typeof new String("Jonas").slice(1)); //goes back into beeing a string */
