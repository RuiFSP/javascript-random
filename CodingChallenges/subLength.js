/* Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0 */

/*
1) Asking questions
1.1) - How to find for 2 occurrences of a caracther in a string ?  
1.2) - What is the length between both index found ? 
1.3) - How can i only validate two occurences of char in a string, beause i can´t have <2 or >2 

2) Divide and conquer
2.1) - for loop to find the occurrences of a char in a string



*/
const subLength = (word, char) => {
  //storing indexes of occurences need to start them at negative number, since we can have first index
  let firstIndex = -1;
  let secondIndex = -1;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      if (firstIndex === -1 && secondIndex === -1) {
        //console.log("inside first if and index is: " + i);
        firstIndex = i;
      } else if (firstIndex !== -1 && secondIndex === -1) {
        //console.log("inside second if and index is: " + i);
        secondIndex = i;
      } else {
        //console.log("inside last option and found to many caracters, need to reset");
        firstIndex = -1;
        secondIndex = -1;
        break;
      }
    } else {
      continue;
    }
  }

  if (firstIndex !== -1 && secondIndex !== -1) {
    return secondIndex - firstIndex + 1;
  } else {
    return 0;
  }
};

console.log(
  subLength("Saturday", "a"),
  "----next----",
  subLength("summer", "m"),
  "----next----",
  subLength("digitize", "i"),
  "----next----",
  subLength("cheesecake", "a")
);
