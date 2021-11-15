import { modalDisplay, modalContainer } from './utils.js';

export const hamburger = document.querySelector('.toggle');
export const intro = document.querySelector('.intro-video');

/**
 * @function clickHandler - Handles click event to open the hamburger menu
 */
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

/**
 * @function introHandler - handles video popup
 */
export const introHandler = () => {
  modalContainer.innerHTML = `
    <div class='video'>
    <div class="close-modal">
        <img src="assets/images/icons/close_black.svg"  alt="close button"/>
        </div>
    <iframe width="560" height="360" src="https://www.youtube.com/embed/FND9KJnThBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
  modalDisplay(0, '8px');
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.video iframe').remove();
    modalDisplay('-100vh', 0);
  });
};
