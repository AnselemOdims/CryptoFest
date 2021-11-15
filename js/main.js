import {
  clickHandler, hamburger, intro, introHandler,
} from './helper.js';

// Event listener for the hamburger menu
hamburger.addEventListener('click', clickHandler);

// Event listener for video popup
intro.addEventListener('click', introHandler);