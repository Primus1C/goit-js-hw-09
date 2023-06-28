const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onClickStart);
const stopBtn = document.querySelector('[data-stop]');
stopBtn.addEventListener('click', onClickStop);

function onClickStart(evt) {
  console.log(evt.target);
}
function onClickStop(evt) {
  console.log(evt.target);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
