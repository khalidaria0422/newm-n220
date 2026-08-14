'use strict';

// INIT VARIABLES
const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const loanTerms = document.getElementById('loan-terms');
const calculateMonthly = document.getElementById('calculate-monthly');
const output = document.querySelector('.output');
const clear = document.getElementById('clear');

// Retrieve input, calculate, and output results
calculateMonthly.addEventListener('click', () => {
  const loanAmountLocal = Number(loanAmount.value);
  let interestRateLocal = Number(interestRate.value);
  let loanTermsLocal = Number(loanTerms.value);

  // Error handling
  if (
    loanAmount.value === '' ||
    interestRate.value === '' ||
    loanTerms.value === '' ||
    !Number.isInteger(loanTermsLocal) ||
    loanAmountLocal < 0 ||
    interestRateLocal < 0 ||
    loanTermsLocal < 0
  ) {
    alert('No input or invalid input! Please try again.');
    return;
  }

  output.innerHTML = '';

  const ul = document.createElement('ul');

  // Helper function for creating li and its content
  const createLI = function (text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
  };

  createLI(`Loan Amount: $${loanAmountLocal}`);
  createLI(`Loan Term: ${loanTermsLocal} years`);
  createLI(`Interest Rate: ${interestRateLocal}%`);

  // Calculate monthly
  interestRateLocal = interestRateLocal / 100 / 12;
  loanTermsLocal *= 12;

  const monthlyPayment = (
    loanAmountLocal *
    ((interestRateLocal * (1 + interestRateLocal) ** loanTermsLocal) /
      ((1 + interestRateLocal) ** loanTermsLocal - 1))
  ).toFixed(2);

  // Append and output results
  const p = document.createElement('p');
  p.textContent = `Your monthly payment will be $${monthlyPayment}`;
  p.style.marginTop = '2rem';

  output.append(ul);
  output.append(p);
  clear.classList.remove('hidden');
});

// Clear all fields
clear.addEventListener('click', () => {
  loanAmount.value = '';
  interestRate.value = '';
  loanTerms.value = '';
  output.innerHTML = '';
  clear.classList.add('hidden');
});
