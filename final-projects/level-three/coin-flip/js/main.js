'use strict';

// INIT VARIABLES
const image = document.getElementById('image');
const toss = document.getElementById('toss');
const output = document.querySelector('.output');
const reset = document.getElementById('reset');
const table = document.getElementById('table');
const ratio = document.getElementById('ratio');
let flipCount = 0;
let headsCount = 0;
let tailsCount = 0;

// Path to images
const imgPaths = {
  1: 'images/heads.jpg',
  2: 'images/tails.jpg',
};

// Helper function for storing in table
const storeFace = function (face) {
  const tr = document.createElement('tr');
  const td0 = document.createElement('td');
  const td1 = document.createElement('td');

  td0.textContent = flipCount;
  td1.textContent = face;
  tr.append(td0, td1);
  table.append(tr);
};

// Randomly output heads or tails image and add to table
toss.addEventListener('click', () => {
  // Make random number and show image
  const randNum = Math.floor(Math.random() * 2 + 1);
  image.src = imgPaths[randNum];
  flipCount++;

  if (randNum === 1) {
    storeFace('Heads');
    headsCount++;
  } else {
    storeFace('Tails');
    tailsCount++;
  }

  // Output
  output.classList.remove('hidden');
  reset.classList.remove('hidden');
  const ratioLocal = (headsCount / tailsCount).toFixed(2);
  if (headsCount === 0) ratio.textContent = 'All tails so far.';
  else if (tailsCount === 0) ratio.textContent = 'All heads so far.';
  else ratio.textContent = `There are ${ratioLocal} heads for every 1 tail.`;
});

// Clear table and reset all other outputs
reset.addEventListener('click', () => {
  flipCount = 0;
  headsCount = 0;
  tailsCount = 0;
  while (table.children.length > 1) table.lastElementChild.remove();
  ratio.textContent = '';
  output.classList.add('hidden');
  reset.classList.add('hidden');
});
