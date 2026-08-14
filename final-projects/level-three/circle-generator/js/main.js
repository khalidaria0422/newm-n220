'use strict';

// INIT VARIABLES
const number = document.getElementById('number');
const generate = document.getElementById('generate');
const container = document.querySelector('.container');
const input = document.getElementById('input');
const clear = document.getElementById('clear');

// Generate circls
generate.addEventListener('click', () => {
  if (
    number.value === '' ||
    Number(number.value) < 1 ||
    Number(number.value) > 100
  ) {
    alert('No input, or out of range! Please try again.');
    return;
  }

  for (let i = 0; i < Number(number.value); i++) {
    const div = document.createElement('div');
    div.classList.add('circle');
    container.append(div);
  }

  container.classList.add('grid');
  input.classList.add('hidden');
});

// Change color upon click
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    event.target.style.backgroundColor === 'red'
      ? (event.target.style.backgroundColor = 'white')
      : (event.target.style.backgroundColor = 'red');
  }
});

// Clear circles
clear.addEventListener('click', () => {
  while (container.children.length > 2) container.lastElementChild.remove();
  container.classList.remove('grid');
  input.classList.remove('hidden');
});
