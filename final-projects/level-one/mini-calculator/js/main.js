'use strict';

// INIT VARIABLES
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const operation = document.getElementById('operation');
const btnCalculate = document.getElementById('calculate');
const output = document.querySelector('.output');
const result = document.getElementById('result');
const btnClear = document.getElementById('clear');

// Retrieve input, calculate, and output result
btnCalculate.addEventListener('click', () => {
  if (firstNumber.value === '' || secondNumber.value === '') return;

  const firstNumberLocal = Number(firstNumber.value);
  const secondNumberLocal = Number(secondNumber.value);
  const operationLocal = operation.value;
  let resultLocal;

  switch (operationLocal) {
    case '+':
      resultLocal = firstNumberLocal + secondNumberLocal;
      break;
    case '-':
      resultLocal = firstNumberLocal - secondNumberLocal;
      break;
    case '*':
      resultLocal = firstNumberLocal * secondNumberLocal;
      break;
    case '/':
      resultLocal = firstNumberLocal / secondNumberLocal;
      break;
    default:
      console.alert('Something went wrong! Please try again.');
  }

  // Number and toFixed because of JavaScript behavior
  result.textContent = `${firstNumberLocal} ${operationLocal} ${secondNumberLocal} = ${Number(resultLocal.toFixed(6))}`;

  output.classList.remove('hidden');
});

// Clear all fields and results
btnClear.addEventListener('click', () => {
  firstNumber.value = '';
  secondNumber.value = '';
  result.textContent = '';

  output.classList.add('hidden');
});
