const clock = document.querySelector('#clock');

const getClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const secondes = String(now.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${secondes}`;
};

getClock();
const setTimer = setInterval(getClock, 1000);
// clearInterval(setTimer);
