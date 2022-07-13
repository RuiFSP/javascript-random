//global variables
let counter = 0; //it is used to compareDNA
let instancesCounter = 1;
//array of objects that will have 30 instances of pAequor that can surviveproperty
const arrayOfValidObjects = [];
let dnaPercentageInCommon = 0;

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//since we´re using a "this" to access obj property, can´t use arrow function
const pAequorFactory = function (num, arr) {
  return {
    //properties
    specimenNum: num,
    dna: arr,
    //methods
    mutate() {
      /*    console.log(this.dna);
      return this.dna; */
      const randomIndexOfDana = Math.floor(Math.random() * 15);
      const letterOfRandomIndexOfDNA = this.dna[randomIndexOfDana];
      /*       console.log(
        `The random index is ${randomIndexOfDana} and correponding letter is ${letterOfRandomIndexOfDNA}`
      ); */
      let generateRandomBase = returnRandBase();

      /*       console.log(`generate a random dnaBase ${generateRandomBase}`); */

      while (generateRandomBase === letterOfRandomIndexOfDNA) {
        /*         console.log("-----same base-----need to generare another"); */
        generateRandomBase = returnRandBase();
        /*         console.log(`generate a random dnaBase ${generateRandomBase}`); */
      }

      if (generateRandomBase !== letterOfRandomIndexOfDNA) {
        this.dna[randomIndexOfDana] = generateRandomBase;
        /*         console.log(
          `At index ${randomIndexOfDana} was change for the old dna base ${letterOfRandomIndexOfDNA} was change for ${generateRandomBase}`
        );

        console.log("checking if base was correctelly changed " + this.dna); */
      }
    },
    compareDNA(obj) {
      /*       console.log(
        `this is the array that is asking to compare ${this.dna} and number is ${this.specimenNum}`
      );
      console.log(
        `this is the array that is beeing given to compare ${obj.dna} and number is ${obj.specimenNum}`
      ); */

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          /*          console.log(
            `>>>>At index ${i}the element from array that ask ${this.dna[i]} is equal to the array the was given ${obj.dna}<<<<`
          ); */
          counter++;
        }
      }

      //console.log(`There are ${counter} dnaBases in common`);

      dnaPercentageInCommon = ((counter / this.dna.length) * 100).toFixed(0);

      console.log(
        `specimen #${obj.specimenNum} and specimen #${this.specimenNum} have ${dnaPercentageInCommon}% DNA in common.`
      );
    },
    willLikelySurvive() {
      const numElements = this.dna
        .filter((element) => element === "C" || element === "D")
        .length.toFixed(0);

      /*       console.log(numElements); */
      return numElements >= 6 ? true : false;
    },
    complementStrand() {
      const complementDnaStrand = [];

      for (let i = 0; i < this.dna.length; i++) {
        console.log("inside cycle " + i);
        //console.log(this.dna);
        switch (this.dna[i]) {
          case "A":
            complementDnaStrand.push("T");
            break;
          case "T":
            complementDnaStrand.push("A");
            break;
          case "G":
            complementDnaStrand.push("C");
            break;
          case "C":
            complementDnaStrand.push("G");
            break;
          default:
            break;
        }
      }
      return complementDnaStrand;
    },
  };
};

//--texting complement
/* const exp1 = pAequorFactory(instancesCounter, mockUpStrand());

console.log(exp1.dna);
console.log(exp1.complementStrand()); */

//testing - array of 30 valid pAequor
while (instancesCounter < 31) {
  let obj = pAequorFactory(instancesCounter, mockUpStrand());

  if (obj.willLikelySurvive() === true) {
    arrayOfValidObjects.push(obj);
    instancesCounter++;
  }
  /*   console.log(
    arrayOfValidObjects,
    "nº elements inside is " + arrayOfValidObjects.length
  ); */
}

// ---- checking if all values are true
/* const allValid = function (obj) {
  return obj.map((element) => element.willLikelySurvive());
};

console.log(allValid(arrayOfValidObjects)); */

//comparing all 30 to find the most related

//testing for one element
/* arrayOfValidObjects[0].compareDNA(arrayOfValidObjects[1]); //it workds
arrayOfValidObjects[0].compareDNA(arrayOfValidObjects[2]); */

const savedCounter = [];

//allcombinations between dna sequences
for (let i = 0; i < arrayOfValidObjects.length; i++) {
  for (let j = i + 1; j < arrayOfValidObjects.length; j++) {
    arrayOfValidObjects[i].compareDNA(arrayOfValidObjects[j]);
    savedCounter.push({
      keyPair: `${arrayOfValidObjects[i].specimenNum}-${arrayOfValidObjects[j].specimenNum}`,
      percentageInCommon: parseInt(dnaPercentageInCommon),
    });
    counter = 0;
  }
}

console.log(savedCounter);
//console.log(savedCounter.length);

//modern javascript to get max from one array
const maxPercentageValuePair = Math.max(
  ...savedCounter.map((obj) => obj.percentageInCommon)
);

console.log(`The max comparability is ${maxPercentageValuePair}%`);

//console.log(typeof savedCounter);

const saveMaxKeyPairs = [];

for (const key in savedCounter) {
  if (Object.hasOwnProperty.call(savedCounter, key)) {
    const element = savedCounter[key];

    if (element.percentageInCommon === maxPercentageValuePair) {
      console.log(
        "This is the dnaPai with max compatibility " + element.keyPair
      );

      saveMaxKeyPairs.push({
        keypair: element.keyPair,
        percentageInCommon: element.percentageInCommon,
      });
    }
  }
}

console.log(saveMaxKeyPairs);

for