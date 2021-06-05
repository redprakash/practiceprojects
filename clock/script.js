const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate() {
  const current = new Date();
  const seconds = current.getSeconds();
  const secondsToDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
  if (secondsToDegree === 360) {
    secondHand.style.transition = 'unset';
  }

  const mins = current.getMinutes();
  const minsToDegree = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsToDegree}deg)`;

  const hours = current.getHours();
  const hoursToDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursToDegree}deg)`;
}
function playSound() {
  const sound = document.querySelector('audio[data-key="secsound"]');
  sound.currentTime = 1;
  sound.play();
}

setInterval(setDate, 1000);
setInterval(playSound, 1000);

// display digital time
const dc = new Date();
h = dc.getHours();
m = dc.getMinutes();
s = dc.getSeconds();
document.querySelector('.digi-clock').innerHTML = `${h}:${m}`;
