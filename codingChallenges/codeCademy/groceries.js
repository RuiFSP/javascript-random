/* Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls' */

const groceries = (arrayOfObjects) => {
  //place where i´ll store each item
  let strBuildFirstPart = [];
  let strBuildLastPart = [];

  if (arrayOfObjects.length > 2) {
    for (let i = 0; i < arrayOfObjects.length - 2; i++) {
      strBuildFirstPart.push(`${arrayOfObjects[i].item}, `);
    }
    for (let i = arrayOfObjects.length - 2; i < arrayOfObjects.length; i++) {
      strBuildLastPart.push(`${arrayOfObjects[i].item}`);
    }
    return strBuildFirstPart.join("").concat(strBuildLastPart.join(" and "));
  } else if (arrayOfObjects.length == 2) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
      strBuildLastPart.push(`${arrayOfObjects[i].item}`);
    }
    return strBuildLastPart.join(" and ");
  } else {
    return arrayOfObjects[0].item;
  }
};

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ])
);

console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));
console.log(groceries([{ item: "Cheese Balls" }]));
