import formHandler from './form.js';

const btn = document.querySelectorAll('.btn');
const btns = document.querySelectorAll('.buttons button');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.buttons button.active').classList.remove('active');
    e.currentTarget.classList.add('active');
  });
});

btn.forEach((btn) => btn.addEventListener('click', formHandler));