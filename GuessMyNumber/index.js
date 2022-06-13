'use strict';

//Dom Manupulation

/* 
Dom -Document Object Model: is a structurednrepresentation of Html documents. 
it allows javascript to access html elements and styles to manipulate them.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? ' 📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' 💥 You lose the game!';
      displayMessage('💥 You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '  📉 Too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = ' 💥 You lose the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
