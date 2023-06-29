import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayArea: document.querySelector('input[name="delay"]'),
  stepArea: document.querySelector('input[name="step"]'),
  amountArea: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  //console.log(refs.amountArea.value);
  for (let index = 0; index < Number(refs.amountArea.value); index+=1) {
    createPromise(
      index,
      Number(refs.delayArea.value) + Number(refs.stepArea.value) * index
    );
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = {
        pos: position + 1,
        del: delay,
      };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
  promise
    .then(value => {
      //console.log(`✅ Fulfilled promise ${value.pos} in ${value.del}ms`)
      Notiflix.Notify.success(
        `Fulfilled promise ${value.pos} in ${value.del}ms`
      );
    })
    .catch(value => {
      //console.log(`❌ Rejected promise ${value.pos} in ${value.del}ms`);
      Notiflix.Notify.failure(
        `Rejected promise ${value.pos} in ${value.del}ms`
      );
    });
}
