import data from './speakerData.js';
import {displayHtml, renderHelper } from './helper.js';

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


export const render = (collection) => {
  return collection.length !==4 ? list.innerHTML = renderHelper(collection) : list.insertAdjacentHTML('beforeend', renderHelper(collection))
}

const smallData = data.slice(0, 2);

if(window.innerWidth<768){
  render(smallData);
}
else {
  render(data);
}

window.addEventListener('resize', e => {
  if(window.innerWidth>768){
    list.innerHTML = ''
    render(data);
  }
  else {
    list.innerHTML = ''
    render(smallData);
  }
})

moreBtn.addEventListener('click', e => {
 if(list.children.length ===2) {
   render(data.slice(2));
   switchUp.classList.add('switch')
 }
 else{
   render(smallData)
   switchUp.classList.remove('switch')
 }
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
  };
}

document.addEventListener('scroll', e => {
  const elems = document.querySelectorAll('section.speakers .card-container > li.card:nth-child(even)');
  const sElems = document.querySelectorAll('section.speakers .card-container > li.card:nth-child(odd)');
  for(let elem of elems){
    if(window.scrollY >= (getCoords(elem).top - window.innerHeight)){
      elem.style.left ="0px";
    }
  }
  for(let elem of sElems){
    if(window.scrollY >= (getCoords(elem).top - window.innerHeight)){
      elem.style.right ="0px";
    }
  }
})
