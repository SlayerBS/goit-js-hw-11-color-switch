const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

const onBtnStart = () => {
  refs.startBtn.disabled = true;
  timerId = setInterval(() => {
    changeBodyBackground();
  }, 1000);
};

const onBtnStop = () => {
  refs.startBtn.disabled = false;
  clearInterval(timerId);
};

refs.startBtn.addEventListener('click', onBtnStart);
refs.stopBtn.addEventListener('click', onBtnStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyBackground = () => {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};
