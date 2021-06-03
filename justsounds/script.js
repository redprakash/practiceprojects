'use strict';

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const keypress = document.querySelector(`.key[data-key="${e.key}"]`);

  //  console.log(keypress);

  //const audio = document.querySelector('audio[data-key="65"]');
  if (!audio) return; //stop the code to run if there is no key code found as set
  audio.currentTime = 0;
  audio.play();
  keypress.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');

keys.forEach((keytrans) =>
  keytrans.addEventListener('transitionend', removeTransition)
);
window.addEventListener('keydown', playSound);
