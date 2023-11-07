let interval;

const windowBackground = document.querySelector('body').style.backgroundColor;

//Generate A Random Color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

const changeColor = function () {
  console.log('Color Change Started');
  if (!interval) {
    interval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
const stopColor = function () {
  console.log('Color Change Stopped');
  clearInterval(interval);
  interval = null;
};

const startBtn = document
  .querySelector('#start')
  .addEventListener('click', changeColor);

const stopBtn = document
  .querySelector('#stop')
  .addEventListener('click', stopColor);
