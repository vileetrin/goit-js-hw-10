import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentTime = new Date();
    if (userSelectedDate <= currentTime) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future'
      });
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
};

const fp = flatpickr(input, options);

let userSelectedDate = null;
let countdownInterval = null;

button.addEventListener('click', function() {

  button.disabled = true;
  input.disabled = true;

  countdownInterval = setInterval(updateTimer, 1000);
  updateTimer();
});


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function updateTimer() {
  const currentTime = new Date();
  const timeDifference = userSelectedDate - currentTime;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    button.disabled = false;
    input.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log();