export const hamburger = document.querySelector('.toggle');

export const clickHandler = () => {
  document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    `
    <div class="hamburger-menu">
    <div class="close">
    <img src="assets/images/icons/close_black.svg" />
  </div>
  <ul>
    <li><a href="./about.html">About</a></li>
    <li><a href="">Program</a></li>
    <li><a href="">Sponsor</a></li>
    <li><a href="">News</a></li>
    <li><a href="">Crypto Summit</a></li>
  </ul>
  </div>`,
  );

  document.querySelector('.hamburger-menu').classList.add('show');
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.remove('show');
  });
};
