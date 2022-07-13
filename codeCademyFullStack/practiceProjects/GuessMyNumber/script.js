'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable - records the state of our application
let highScore = 0;

//---refacturing code with functions---
//display messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//display Numbers
const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
//display Scores
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🛑 No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //checkHightScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is diffrente form secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💣 You lost the game!');
      displayScore(0);
    }
  }

  //refractoring code with !==
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is to high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

//1. Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  //2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //3. Restore the initial conditions of the message, number, score and guess input fields
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';

  //4. Also restore the original background color (#222) and number width (15rem) */
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
