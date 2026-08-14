'use strict';

// INIT VARIABLES
const image0 = document.getElementById('image-0');
const image1 = document.getElementById('image-1');
const playGame = document.getElementById('play-game');
const output = document.querySelector('.output');
const winner = document.getElementById('winner');
const reset = document.getElementById('reset');
const table = document.getElementById('table');
let gameCount = 0;

// Path to images
const signs = {
  1: 'images/rock.jpg',
  2: 'images/paper.jpg',
  3: 'images/scissors.jpg',
};

// Helper function for storing in table
const storeWinner = function (player) {
  const tr = document.createElement('tr');
  const td0 = document.createElement('td');
  const td1 = document.createElement('td');

  td0.textContent = gameCount;
  td1.textContent = player;
  tr.append(td0, td1);
  table.append(tr);
};

// Randomly output two images and decide winner
playGame.addEventListener('click', () => {
  // Make random numbers and show images
  const randNum0 = Math.floor(Math.random() * 3 + 1);
  const randNum1 = Math.floor(Math.random() * 3 + 1);

  image0.src = signs[randNum0];
  image1.src = signs[randNum1];

  output.classList.remove('hidden');
  reset.classList.remove('hidden');

  // Decide winner and append to table
  let winnerText;

  if (randNum0 === randNum1) {
    winnerText = "It's a tie! Play again.";
    gameCount++;
    storeWinner('Tie');
  } else if (
    (randNum0 === 1 && randNum1 === 2) ||
    (randNum0 === 2 && randNum1 === 3) ||
    (randNum0 === 3 && randNum1 === 1)
  ) {
    winnerText = 'Player 2 Wins! Play again.';
    gameCount++;
    storeWinner('Player 2');
  } else {
    winnerText = 'Player 1 Wins! Play again.';
    gameCount++;
    storeWinner('Player 1');
  }

  winner.textContent = winnerText;
});

// Clear table and reset all other outputs
reset.addEventListener('click', () => {
  gameCount = 0;
  while (table.children.length > 1) table.lastElementChild.remove();
  winner.textContent = '';
  output.classList.add('hidden');
  reset.classList.add('hidden');
});
