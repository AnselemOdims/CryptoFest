// eslint-disable-next-line import/no-cycle
import { modalDisplay, modalContainer } from './utils.js';

export const hamburger = document.querySelector('.toggle');
export const intro = document.querySelector('.intro-video');
export const btns = document.querySelectorAll('.btn');

const hide = document.querySelectorAll('.hide');

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

/**
 * @function formHandler
 */
export const formHandler = () => {
  hide.forEach((el) => {
    el.style.display = 'block';
  });
  modalContainer.innerHTML = `
    <div class="modal">
      <div class="heading">
        <h2 class="intro-heading">Join Us<span></span></h2>
        <div class="close-modal">
        <img src="assets/images/icons/close_black.svg"  alt="close button"/>
        </div>
      </div>
      <form action="" method="POST">
        <label for="name">Full Name</label>
        <input type="text" id="name" />
        <label for="email">Email</label>
        <input type="email" id="email" />
        <button>Join</button>
        <div class="divider">
          <hr />
          <p>or join with</p>
          <hr />
        </div>
        <div class="socials">
          <a
            ><img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google icon"/></a>
          <a href=""><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter icon"/></a>
          <a href=""><img
            src="assets/images/icons/form-facebook.svg" alt="facebook icon"
        /></a>
          <a href=""><img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github icon"/></a>
          <a href=""><i class="fab fa-bitcoin"></i></a>
        </div>
      </form>
    </div>
    `;

  modalDisplay(0, '8px');
  document.querySelector('#name').focus();
  document.querySelector('.modal').classList.add('show');
  try {
    document.querySelector('.close-modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('show');
      modalDisplay('-100vh', 0);
    });
  } catch (err) {
    throw new Error();
  }
};

/**
 * @function displayHTML
 * @param {string} src1 the first images source url
 * @param {string} src2 the second image source url
 * @param {string} name the speaker's name
 * @param {string} det1 the first details of the speaker
 * @param {string} det2 he second details of the speakers
 * @returns HTML string
 */
export function displayHtml(src1, src2, name, det1, det2) {
  return `
  <li class="card">
  <div class="card-images">
    <img src=${src1} alt="transparent image" />
    <img src=${src2} alt="speaker image" />
  </div>
  <div class="speaker-details">
    <h4>${name}</h4>
    <p>${det1}</p>
    <hr>
    <p>${det2}</p>
  </div>
</li>
  `;
}

/**
 * @function renderHelper
 * @param {array} collection  collection of speakers' details
 * @returns HTML list
 */
export function renderHelper(collection) {
  return collection
    .map((item) => {
      const {
        imgSrc1, imgSrc2, name, details1, details2,
      } = item;
      return displayHtml(imgSrc1, imgSrc2, name, details1, details2);
    })
    .join('');
}
