const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onClickStart);
const stopBtn = document.querySelector('[data-stop]');
stopBtn.addEventListener('click', onClickStop);
let id = 0;

setActiveButton();

function onClickStart(evt) {
  //console.log(evt.target);
  setBckgColor();
  setActiveButton(false);

  id = setInterval(function () {
    setBckgColor();
  }, 1000);
}
function onClickStop(evt) {
  //console.log(evt.target);
  clearInterval(id);
  setActiveButton();
}

function setBckgColor() {
  document.body.style.background = getRandomHexColor();
}

function setActiveButton(start = true) {
  startBtn.disabled = !start;
  stopBtn.disabled = start;
  //console.log(startBtn);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
