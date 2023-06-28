import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedDateTime = 0;
let id = 0;

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onClickStart);
setStartBtnEnable(false);

const timer = document.querySelector('.timer');
const countdown = document.querySelector('[data-all]');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      setStartBtnEnable(false);
      //window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      selectedDateTime = selectedDates[0];
      setStartBtnEnable();
    }
  },
});

function setStartBtnEnable(enable = true) {
  startBtn.disabled = !enable;
}

function onClickStart(evt) {
  let id = setInterval(function () {
    displayTimer();
  }, 1000);
}

function displayTimer() {
  const rest = convertMs(selectedDateTime - new Date());
  if (selectedDateTime > new Date()) {
    timer.children[0].firstElementChild.innerHTML = rest.days;
    timer.children[1].firstElementChild.innerHTML = rest.hours;
    timer.children[2].firstElementChild.innerHTML = rest.minutes;
    timer.children[3].firstElementChild.innerHTML = rest.seconds;
    countdown.innerHTML = `<strong>${addLeadingZero(
      rest.days
    )}:${addLeadingZero(rest.hours)}:${addLeadingZero(
      rest.minutes
    )}:${addLeadingZero(rest.seconds)}</strong>`;
  } else {
    clearInterval(id);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
