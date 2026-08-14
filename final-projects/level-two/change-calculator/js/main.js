'use strict';

// INIT VARIABLES
const change = document.getElementById('change');
const countChange = document.getElementById('count-change');
const output = document.querySelector('.output');
const result = document.getElementById('result');
const clear = document.getElementById('clear');

const moneyInCents = {
  Hundreds: 10000,
  Fifties: 5000,
  Twenties: 2000,
  Tens: 1000,
  Fives: 500,
  Twos: 200,
  Ones: 100,
  Quarters: 25,
  Dimes: 10,
  Nickels: 5,
  Pennies: 1,
};

const changeCounter = {
  Hundreds: 0,
  Fifties: 0,
  Twenties: 0,
  Tens: 0,
  Fives: 0,
  Twos: 0,
  Ones: 0,
  Quarters: 0,
  Dimes: 0,
  Nickels: 0,
  Pennies: 0,
};

// Retrieve input, calculate, and output result
countChange.addEventListener('click', () => {
  // Input validation
  if (change.value === '' || !Number.isInteger(Number(change.value))) {
    alert('No input or not a whole number! Please try again.');
    return;
  }

  result.textContent = '';

  let remaining = Number(change.value);

  // Calculate change
  for (const money in moneyInCents) {
    changeCounter[money] = Math.floor(remaining / moneyInCents[money]);
    remaining %= moneyInCents[money];
  }

  // Append to result div
  for (const [key, value] of Object.entries(changeCounter)) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    result.append(p);
  }

  output.classList.remove('hidden');
});

// Clear all fields and results
clear.addEventListener('click', () => {
  change.value = '';
  result.textContent = '';

  output.classList.add('hidden');
});
