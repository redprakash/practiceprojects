'use strict';
const displayText = document.querySelector('.sometext');

const btnContentTop = document.querySelector('.btn1');
const btnContentBottom = document.querySelector('.btn2');
const bottomOverlay = document.querySelector('.overlay');
const hideMe = document.querySelector('.close');
const resetBtn = document.querySelector('.reset');

btnContentTop.addEventListener('click', function () {
  displayText.classList.remove('hidden');
  btnContentTop.value = 'Did my First Click';
  //displayText.classList.add('sometextanim');
});

hideMe.addEventListener('click', function () {
  displayText.classList.add('hidden');
});

btnContentBottom.addEventListener('click', function () {
  bottomOverlay.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => bottomOverlay.classList.add('hidden'));
