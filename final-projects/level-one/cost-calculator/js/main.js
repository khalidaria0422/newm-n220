'use strict';

// INIT VARIABLES
const priceInput = document.getElementById('price-input');
const priceOutput = document.getElementById('price-output');
const discountCode = document.getElementById('discount-code');
const saved = document.getElementById('saved');
const btnNewPrice = document.getElementById('new-price');
const output = document.querySelector('.output');
const btnClear = document.getElementById('clear');

// IMPORTANT: Stored codes must be all caps
const discountCodes = {
  SAVE20: 0.8,
  JOLLYDAYS: 0.85,
  HOLIDAY10: 0.9,
};

// Retrieve input, calculate discount, output result
btnNewPrice.addEventListener('click', () => {
  if (priceInput.value === '' || discountCode.value === '') return;

  let priceLocal = priceInput.value;
  const discountCodeLocal = discountCode.value.toUpperCase();
  const discount = discountCodes[discountCodeLocal];

  const priceTotal = priceLocal * discount * 1.07;
  const savedLocal = priceLocal - priceTotal;

  priceOutput.textContent = priceTotal.toFixed(2);
  saved.textContent = savedLocal.toFixed(2);

  output.classList.remove('hidden');
});

// Clear all fields and results
btnClear.addEventListener('click', () => {
  priceInput.value = '';
  discountCode.value = '';
  priceOutput.textContent = '';
  saved.textContent = '';

  output.classList.add('hidden');
});
