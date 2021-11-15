import data from './speakerData.js';
// eslint-disable-next-line import/no-cycle
import { renderHelper } from './helper.js';

export const modalContainer = document.querySelector('section.modal-container');

/**
 * @function helperFunc - A popup helper function
 * @param {modal} modal - The popup modal
 * @param {top} top The distance from the top
 */
export function helperFunc(modal, top) {
  modal.style.top = top;
}

/**
 * @function modalDisplay - Handles display of modal
 * @param {top} top - The distance from the top
 * @param {blur} blur - The degree of the blur effect
 */
export const modalDisplay = (top, blur) => {
  helperFunc(modalContainer, top);
  document.querySelectorAll('main, header, .reminder').forEach((item) => {
    item.style.filter = `blur(${blur})`;
  });
};

const list = document.querySelector('#speakers-list');
const moreBtn = document.querySelector('.more-btn');
const switchUp = document.querySelector('.more-btn img');

/**
 * @function render
 * @param {array} collection - an array of speakers' data
 */
export const render = (collection) => {
  if (collection.length !== 4) {
    list.innerHTML = renderHelper(collection);
  } else {
    list.insertAdjacentHTML('beforeend', renderHelper(collection));
  }
};

const smallData = data.slice(0, 2);

// check the width of the screen
if (window.innerWidth < 768) {
  render(smallData);
} else {
  render(data);
}

// render data on different sizes
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    list.innerHTML = '';
    render(data);
  } else {
    list.innerHTML = '';
    render(smallData);
  }
});

// handles the more button
moreBtn.addEventListener('click', () => {
  if (list.children.length === 2) {
    render(data.slice(2));
    switchUp.classList.add('switch');
  } else {
    render(smallData);
    switchUp.classList.remove('switch');
  }
});

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
  };
}

document.addEventListener('scroll', () => {
  const elems = document.querySelectorAll('section.speakers .card-container > li.card:nth-child(even)');
  const sElems = document.querySelectorAll('section.speakers .card-container > li.card:nth-child(odd)');
  elems.forEach((elem) => {
    if (window.scrollY >= (getCoords(elem).top - window.innerHeight)) {
      elem.style.left = '0px';
    }
  });
  sElems.forEach((elem) => {
    if (window.scrollY >= (getCoords(elem).top - window.innerHeight)) {
      elem.style.right = '0px';
    }
  });
});
