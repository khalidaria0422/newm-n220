'use strict';

// INIT VARIABLES
const ul = document.querySelector('ul');
const btn = document.getElementById('btn');

/**************************************************
 * HELPER FUNCTIONS
 **************************************************/
const addItem = function (text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

const emphasize = function (el) {
  const em = document.createElement('em');
  em.textContent = el.textContent;
  el.replaceChildren(em);
};

/**************************************************
 * TASKS
 **************************************************/
// 1
document.getElementById('title').textContent = 'DOM Manipulation';

// 2
document.getElementById('container').style.backgroundColor = 'lightblue';

// 3
addItem('Item 7');

// 4
ul.firstElementChild.style.color = 'crimson';

// 5
ul.children[2].style.backgroundColor = 'pink';

// 6
ul.children[4].style.backgroundColor = 'yellow';

// 7
ul.children[5].style.backgroundColor = 'lightgray';
ul.children[5].style.color = 'royalblue';

// 8
addItem('Khalid Aria');

// 9
ul.children[3].remove();

// 10
emphasize(btn);
btn.style.backgroundColor = 'rebeccapurple';
btn.style.color = 'white';
btn.style.borderColor = 'white';
