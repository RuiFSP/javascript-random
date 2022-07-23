"use strict";
document.body.append(document.createElement("textarea")); //input data
document.body.append(document.createElement("button")); //submit data

/* Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed. */

/* Test data (pasted to textarea, including spaces):
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅ */

/* Hints:
1 Remember which character defines a new line in the textarea 😉 "/n"
2 The solution only needs to work for a variable made out of 2 words, like a_b
3 Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
4 This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data! */

function eventHandler() {
  let [...saveText] = document
    .querySelector("textarea")
    .value.split("\n")
    .values(); //saving multiple inputs in different lines

  const firstWords = [];
  const lastWords = [];
  const lastWordCamelcase = [];
  const camelCaseWord = [];
  const symbol = "✔";

  //split firstWord
  for (let i = 0; i < saveText.length; i++) {
    firstWords.push(
      saveText[i].toLowerCase().slice(0, saveText[i].indexOf("_")).trim()
    );
  }
  //split last word
  for (let i = 0; i < saveText.length; i++) {
    lastWords.push(
      saveText[i].toLowerCase().slice(saveText[i].indexOf("_") + 1)
    );
  }

  //camelCase last word
  for (let i = 0; i < lastWords.length; i++) {
    //console.log(lastWords[i]);

    lastWordCamelcase.push(
      lastWords[i].replace(lastWords[i][0], lastWords[i][0].toUpperCase())
    );
    /* lastWordCamelcase.push(
      lastWords.replace(lastWords[0], lastWords[0].toUpperCase()) */
  }
  //building final string
  for (let i = 0; i < firstWords.length; i++) {
    camelCaseWord.push(
      firstWords[i]
        .concat(lastWordCamelcase[i])
        .padEnd(30)
        .concat(symbol.repeat(i + 1))
    );
  }
  //print end result
  for (const value of camelCaseWord) {
    console.log(value + "\n");
  }
}

document.querySelector("button").addEventListener("click", eventHandler);
