'use strict';

// INIT VARIABLES
const codeUl = document.querySelector('#codeList ul');
const codeList = document.querySelectorAll('#codeList li');
const codeListLength = codeList.length;

// 1 and 2
for (let i = 0; i < codeListLength; i++) {
  // IMPORTANT: Image is failing to load: 403 error (forbidden)
  // const img = document.createElement('img');
  // img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png';
  // img.classList.add('listIcon');
  // codeList[i].append(img);

  // IMPORTANT: Using Phosphor trashIcons instead
  const trashIcon = document.createElement('i');
  trashIcon.style = `
  position: absolute;
  right: 10px;
  top: 10px;
  `;
  trashIcon.className = 'ph ph-trash';
  codeList[i].append(trashIcon);
}

// 3 and 4
const changeProp = function (e) {
  const target = getTarget(e);
  const tParent = target.parentNode;

  if (tParent.tagName == 'LI') {
    codeUl.removeChild(tParent);
  } else if (tParent.tagName == 'UL') {
    target.classList.toggle('selected');
  }
};

codeUl.addEventListener('click', changeProp, false);
