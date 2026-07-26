'use strict';

/**************************************************
 * PROBLEM 1
 **************************************************/
const inputAge = document.getElementById('inputAge');
const btnSubmitAge = document.getElementById('btnSubmitAge');
const prob1Output = document.getElementById('prob1Output');
const currentYear = new Date().getFullYear();

btnSubmitAge.addEventListener('click', () => {
  const birthYear = currentYear - inputAge.value;

  switch (true) {
    case birthYear >= 1946 && birthYear <= 1964:
      prob1Output.textContent =
        'You are a member of the Baby Boomer Generation!';
      break;
    case birthYear >= 1965 && birthYear <= 1980:
      prob1Output.textContent = 'You are part of Generation X!';
      break;
    case birthYear >= 1981 && birthYear <= 1996:
      prob1Output.textContent = 'You belong in the Y Generation!';
      break;
    case birthYear >= 1997 && birthYear <= 2012:
      prob1Output.textContent = 'Generation Z is your generation!';
      break;
    case birthYear >= 2013 && birthYear <= 2025:
      prob1Output.textContent = 'You are part of the Generation Alpha!';
      break;
    default:
      prob1Output.textContent = 'Sorry - your generation is not listed.';
      break;
  }
});

/**************************************************
 * PROBLEM 2
 **************************************************/
const prob2Output = document.getElementById('prob2Output');
const newArr = [87, 56, 92, 77];
const arrAvg = newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length;

if (arrAvg > 75)
  prob2Output.textContent = 'You are in the top 25% of the class!';
else if (arrAvg >= 60 && arrAvg <= 75)
  prob2Output.textContent = 'You passed the class!';
else
  prob2Output.textContent =
    'Sorry - you did not pass the class. Better luck next time!';

/**************************************************
 * PROBLEM 3
 **************************************************/
const btnRollRandom = document.getElementById('btnRollRandom');
const prob3Output = document.getElementById('prob3Output');

btnRollRandom.addEventListener('click', () => {
  const randNum = Math.floor(Math.random() * 5 + 1);
  let response = '';

  switch (randNum) {
    case 1:
      response = 'The lowest number you can get';
      break;
    case 2:
      response = 'This is the lowest even number you can get';
      break;
    case 3:
      response = 'Right smack in the middle';
      break;
    case 4:
      response = 'Good number!';
      break;
    case 5:
      response = 'Way to roll!';
      break;
    default:
      alert('Random number is not between 1–5.');
      return;
  }

  prob3Output.textContent = `${randNum}: ${response}`;
});

/**************************************************
 * PROBLEM 4
 **************************************************/
const inputDay = document.getElementById('inputDay');
const btnSubmitDay = document.getElementById('btnSubmitDay');
const prob4Output = document.getElementById('prob4Output');
const weekArr = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

btnSubmitDay.addEventListener('click', () => {
  const day = inputDay.value.toLowerCase();

  // Alert user of misinput, clear fields, and exit event listener early
  if (!weekArr.includes(day)) {
    alert('Incorrect input: type something like "Monday" or "monday".');
    inputDay.value = '';
    prob4Output.textContent = '';
    return;
  }

  let fiveDaysAwayIndex = weekArr.indexOf(day) + 5;

  // If 5 days away exceeds Sunday, count remaining from the start of the weekArr
  if (fiveDaysAwayIndex >= weekArr.length)
    fiveDaysAwayIndex = fiveDaysAwayIndex - weekArr.length;

  prob4Output.textContent = `It will be ${weekArr[fiveDaysAwayIndex]} in 5 days.`;
});

/**************************************************
 * PROBLEM 5
 **************************************************/
/* 
!!! IMPORTANT: READ TEXT BELOW

"Put the colors in an array using the string object." // What does this mean?

// This is the old way and not recommended anymore, no?
// const colors = [
//   new String('Red'),
//   new String('Orange'),
//   new String('Blue'),
//   new String('Green'),
//   new String('Purple'),
//   new String('Yellow'),
// ];

or const colors = new Array(...) // Not recommended, again.
*/

const prob5Output = document.getElementById('prob5Output');
const colors = ['Red', 'Orange', 'Blue', 'Green', 'Purple', 'Yellow'];

prob5Output.textContent = `My favorite color is ${colors[0]}.`;
