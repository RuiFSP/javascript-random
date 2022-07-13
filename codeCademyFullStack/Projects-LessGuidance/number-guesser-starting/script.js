let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => target = Math.floor(Math.random() * 10);
//The purpose of this function is to be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess,computerGuess,target) => {

  checkValidHumanGuess(humanGuess);

  const humanDiff = getAbsoluteDistance(humanGuess,target);
  const computerDiff = getAbsoluteDistance(computerGuess,target);

  if (humanDiff === computerDiff) {
    return true;
  } else if (humanDiff < computerDiff) {
    return true;
  } else {
    return false;
  };

}
//The purpose of this function is to be used to correctly increase the winner’s score after each round.
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;
//The purpose of this function is to be used to update the round number after each round.
const advanceRound = () => currentRoundNumber += 1;

//The purpose of this function is to calculate difference between human/computer guesses adn Secret Number
const getAbsoluteDistance = (guess, target) => {

  let diff = Math.abs(guess - target)

  return diff;

}

//The purpose of this function is to check the validity for human guess
const checkValidHumanGuess = humanGuess => {

  if(humanGuess < 0 || humanGuess > 9){
    return alert('please insert a valid number');
  } 
}