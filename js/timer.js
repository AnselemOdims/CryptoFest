export const timer = () => {
  const countDownDate = new Date("Feb 28, 2022 15:37:25").getTime();
  const dateNow = new Date().getTime();
  const difference = countDownDate - dateNow;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.querySelector('.days').textContent = days
  document.querySelector('.hours').textContent = hours
  document.querySelector('.minutes').textContent = minutes
  document.querySelector('.seconds').textContent = seconds
}

