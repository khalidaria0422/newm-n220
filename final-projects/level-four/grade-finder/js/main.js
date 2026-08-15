'use strict';

// INIT VARIABLES
const gradeAverage = document.getElementById('grade-average');
const pointTotal = document.getElementById('point-total');
const getGrade = document.getElementById('get-grade');
const clear = document.getElementById('clear');

const gradingScale = [
  'A',
  90,
  100,
  'B',
  80,
  89,
  'C',
  70,
  79,
  'D',
  60,
  69,
  'F',
  59,
  'lower',
];

// Create the table
const table = document.createElement('table');
const tr = document.createElement('tr');
const th = document.createElement('th');

// Table header
th.textContent = 'Grading Scale';
th.colSpan = 2;
tr.append(th);
table.append(tr);

let count = 0;

// Table rows
for (let i = 0; i < 5; i++) {
  const trLocal = document.createElement('tr');
  const td0 = document.createElement('td');
  const td1 = document.createElement('td');

  td0.textContent = gradingScale[count++];
  td1.textContent = `${gradingScale[count++]}-${gradingScale[count++]}`;

  trLocal.append(td0, td1);
  table.append(trLocal);
}

document.body.prepend(table);

// Btn
getGrade.addEventListener('click', () => {
  const pointTotalLocal = Number(pointTotal.value);

  if (pointTotal.value === '' || pointTotalLocal < 0 || pointTotalLocal > 500) {
    alert(
      'No input, or number out of range. Please input a number between 0 and 500.',
    );

    return;
  }

  resetColor();

  const gradeAverageLocal = (pointTotalLocal / 500) * 100;
  gradeAverage.textContent = `Grade Average: ${gradeAverageLocal.toFixed(2)}%`;
  gradeAverage.classList.remove('hidden');

  if (gradeAverageLocal <= 100 && gradeAverageLocal >= 90) changeColor(1);
  else if (gradeAverageLocal < 90 && gradeAverageLocal >= 80) changeColor(2);
  else if (gradeAverageLocal < 80 && gradeAverageLocal >= 70) changeColor(3);
  else if (gradeAverageLocal < 70 && gradeAverageLocal >= 60) changeColor(4);
  else changeColor(5);

  pointTotal.value = ''; // Clear input field
});

// Helper functions for chaning table colors
const changeColor = (index) =>
  (table.children[index].style.backgroundColor = 'red');

const resetColor = () => {
  for (let i = 1; i <= 5; i++) table.children[i].style.backgroundColor = '';
};

// Clear field and table
clear.addEventListener('click', () => {
  pointTotal.value = '';
  gradeAverage.textContent = '';
  resetColor();
});
