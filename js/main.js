import {
  clickHandler, hamburger, intro, introHandler, btns, formHandler,
} from './helper.js';
import { timer } from './timer.js';

// Event listener for the hamburger menu
hamburger.addEventListener('click', clickHandler);

// Event listener for video popup
intro.addEventListener('click', introHandler);

// Event listener for form popup
btns.forEach((btn) => btn.addEventListener('click', formHandler));

// handles timer 
setInterval(timer, 1000);