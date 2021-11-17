import timer from './timer.js';

const hamburger = document.querySelectorAll('.toggle');

const clickHandler = () => {
  document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    `
  <div class="hamburger-menu">
  <div class="close">
  <img src="assets/images/icons/close_black.svg" />
</div>
<ul>
  <li><a href="./index.html">Home</a></li>
  <li><a href="./schedule.html" class="schd">Program</a></li>
  <li><a href="./index.html#speakers">Speakers</a></li>
  <li><a href="./index.html#sponsors">Partners</a></li>
  <li><a href="#">Crypto Summit</a></li>
</ul>
</div>
  `,
  );

  if (document.querySelector('.sd')) {
    document.querySelector('.schd').innerText = 'About';
    document.querySelector('.schd').href = './about.html';
  }
  document.querySelector('.hamburger-menu').classList.add('show');
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.remove('show');
  });
};

hamburger.forEach((elem) => elem.addEventListener('click', clickHandler));

// handles timer
setInterval(timer, 1000);
