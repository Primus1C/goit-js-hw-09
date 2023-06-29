import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayArea: document.getElementsByName('delay'),
  stepArea: document.getElementsByName('step'),
  amountArea: document.getElementsByName('amount'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  console.log(999);
  //Notiflix.Notify.failure(amount);
}

/* function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
} */
