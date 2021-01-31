const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let startBtn = document.querySelector('[data-action = "start"]');
let stopBtn = document.querySelector('[data-action = "stop"]');




startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHadler);

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

let interval;

function startBtnHandler() {    
    interval = setInterval(() => setRandomColor(), 1000); 
    startBtn.disabled = true;
}

function stopBtnHadler() {
    clearInterval(interval);
    startBtn.disabled = false;
}


