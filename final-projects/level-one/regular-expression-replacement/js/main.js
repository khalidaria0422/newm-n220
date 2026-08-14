'use strict';

const lis = document.querySelectorAll('li');
const replace = document.getElementById('replace');

replace.addEventListener('click', () => {
  // When any of the regex matches, call the callback function and replace the match appropriately
  lis.forEach((li) => {
    li.textContent = li.textContent.replace(
      /jolly|holly|Jolly|Holly/g,
      (match) => {
        switch (match) {
          case 'jolly':
            return 'holly';
          case 'holly':
            return 'jolly';
          case 'Jolly':
            return 'Holly';
          case 'Holly':
            return 'Jolly';
        }
      },
    );
  });
});
