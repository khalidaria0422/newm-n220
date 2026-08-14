'use strict';

// INIT VARIABLES
const width = document.getElementById('width');
const height = document.getElementById('height');
const calculate = document.getElementById('calculate');
const output = document.querySelector('.output');
const squareFeet = document.getElementById('square-feet');
const box = document.getElementById('box');
const clear = document.getElementById('clear');

// Retrieve input, calculate square feet, output result
calculate.addEventListener('click', () => {
  const widthLocal = Number(width.value);
  const heightLocal = Number(height.value);

  squareFeet.textContent = `${widthLocal * heightLocal} square feet`;

  box.style.width = `${widthLocal * 10}px`;
  box.style.height = `${heightLocal * 10}px`;
  box.style.backgroundColor = 'red';

  output.classList.remove('hidden');
});

// Clear all fields and results
clear.addEventListener('click', () => {
  width.value = '';
  height.value = '';

  output.classList.add('hidden');
});
