
const hide = document.querySelectorAll('.hide');
const modalContainer = document.querySelector('section.modal-container');

/**
 * @function modalDisplay - Handles display of modal
 * @param {top} top - The distance from the top
 * @param {blur} blur - The degree of the blur effect
 */
const modalDisplay = (top, blur) => {
	modalContainer.style.top = top;
	document.querySelectorAll('main, header, .reminder').forEach((item) => {
		item.style.filter = `blur(${blur})`;
	});
};

/**
 * @function formHandler
 */
export default function formHandler() {
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
}
