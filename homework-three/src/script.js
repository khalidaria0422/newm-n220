'use strict';

// INIT VARIABLES
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const btnCalc = document.getElementById('calculate');
const btnReset = document.getElementById('reset');

const resultBox = document.querySelector('.result');
const principalResult = document.querySelector('.principal');
const rateResult = document.querySelector('.rate');
const timeResult = document.querySelector('.time');
const interestResult = document.querySelector('.total-interest');
const totalResult = document.querySelector('.grand-total');

const calculateInterest = (principal, rate, time) =>
  principal * (1 + rate * time) - principal;

// Event listener that receives, calculates, and outputs the result on to the page
btnCalc.addEventListener('click', (event) => {
  event.preventDefault();

  // Receive input from the DOM and calculate interest
  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value);
  const time = parseFloat(timeInput.value);
  const interest = calculateInterest(principal, rate / 100, time);

  // Output results
  if (principal && rate && time) {
    principalResult.textContent = principal;
    rateResult.textContent = rate;
    timeResult.textContent = time;
    interestResult.textContent = interest.toFixed(0);
    totalResult.textContent = (principal + interest).toFixed(0);

    resultBox.style.display = 'block';
  }
});

// Clear form and results
btnReset.addEventListener('click', () => (resultBox.style.display = 'none'));
