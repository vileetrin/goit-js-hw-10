import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = event.currentTarget.elements.delay;
  const delay = parseInt(delayInput.value);
  const state = event.currentTarget.elements.state.value;

  const notificationPromise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (state === 'rejected') {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  notificationPromise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
