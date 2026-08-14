'use strict';

// INIT VARIABLES
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const btnGetName = document.getElementById('get-name');
const output = document.querySelector('.output');
const result = document.getElementById('result');
const btnClear = document.getElementById('clear');

// Helper Function
const capitalize = (name) =>
  name[0].toUpperCase() + name.slice(1).toLowerCase();

// Retrieve input, make pig latin name, and output results
btnGetName.addEventListener('click', () => {
  if (firstName.value !== '' && lastName.value !== '') {
    const firstNameLocal = capitalize(firstName.value);
    const lastNameLocal = capitalize(lastName.value);

    const firstNameLatin = capitalize(
      firstNameLocal.slice(1) + firstNameLocal[0] + 'ay',
    );
    const lastNameLatin = capitalize(
      lastNameLocal.slice(1) + lastNameLocal[0] + 'ay',
    );

    result.textContent = `${firstNameLatin} ${lastNameLatin}`;

    output.classList.remove('hidden');
  }
});

// Clear fields and results
btnClear.addEventListener('click', () => {
  firstName.value = '';
  lastName.value = '';
  result.textContent = '';

  output.classList.add('hidden');
});
