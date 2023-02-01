'use strict';

//NOTES:
// working on highest score..
//code:
// state variables
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
/// ****************click event 1**************************************
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there in so input
  if (!guess) {
    document.querySelector('.message').textContent = 'not a number!!! ⛔';
  }
  // when the player wins
  //
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number 😄';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  }
  // when guess is too high
  //
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game💥💥';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is low
  //
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game💥💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// *******************************************************************************

// ***************************** click event 2 ***********************************
//code:
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // reset the score
  secretNumber = Math.trunc(Math.random() * 20 + 1); // reset the secretNumber to generate new number
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
