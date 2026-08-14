'use strict';

// INIT VARIABLES
const number = document.getElementById('number');
const chances = document.getElementById('chances');
const confirm = document.getElementById('confirm');
const hint = document.getElementById('hint');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');

let randNum;
let numOfChances;

// Reset game except wins and losses
const reset = () => {
  randNum = Math.floor(Math.random() * 100 + 1);
  numOfChances = 5;
  chances.textContent = numOfChances;
  number.value = '';
  hint.textContent = '';
  console.log(`Random #: ${randNum}`); // FOR THE PROFESSOR AND DEBUGGING ONLY
};

reset(); // Initial reset

// Retrieve input, test guess, and output results
confirm.addEventListener('click', () => {
  const numberLocal = Number(number.value);

  // Error handling
  if (number.value === '' || numberLocal < 1 || numberLocal > 100) {
    alert('No input or number is not between 1–100');
    return;
  }

  // Update chance counter
  if (numberLocal !== randNum) {
    numOfChances--;
    chances.textContent = numOfChances;

    if (numberLocal < randNum) hint.textContent = 'Too low!';
    else hint.textContent = 'Too high!';
  }

  // Helper function for the confirm window
  const confirmChoice = (text) => {
    const confirm = window.confirm(`${text} Do you want to play again?`);

    if (confirm) {
      reset();
    } else {
      alert('Resetting all stats!');
      wins.textContent = '0';
      losses.textContent = '0';
      reset();
    }
  };

  // Confirm replay
  if (numberLocal === randNum) {
    wins.textContent++;
    confirmChoice('You won!');
  } else if (numOfChances === 0) {
    losses.textContent++;
    confirmChoice('You lost!');
  }
});
