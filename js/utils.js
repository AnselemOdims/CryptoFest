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