const gameBox = document.querySelector(".gameBox");
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const startButton = document.querySelector(".startButton");
const stopButton = document.querySelector(".stop");
let totalNum = document.querySelector(".totalNum");
let time = document.querySelector(".time");
let counter = 0;
let total = 0;
let interval = null;

stopButton.disabled = true;

stopButton.onclick = function () {
  clearInterval(interval);
  startButton.disabled = false;
};

gameBox.onclick = function () {
  let randbottom = Math.floor(Math.random() * 270);
  let randright = Math.floor(Math.random() * 270);
  gameBox.style.right = randright + "px";
  gameBox.style.bottom = randbottom + "px";
  total++;
  totalNum.innerHTML = "Your total is" + " " + total + " " + "!";
};

startButton.onclick = function () {
  interval = setInterval(changeTime, 1000);
  box.style.display = "block";
  stopButton.disabled = false;
};

function changeTime() {
  time.innerHTML = counter;
  if (counter < 10) {
    counter++;
    if (counter > 0) {
      time.innerHTML = "Time " + "0" + counter;
    }
    if (counter > 9) {
      time.innerHTML = " ";
      time.innerHTML += "Time " + counter;
    }
  } else {
    counter = 0;
    alert("Your time is finished! Your total is" + " " + total);
    clearInterval(interval);
    totalNum.innerHTML = "Your total is " + 0;
    time.innerHTML = "00";
    location.reload();
  }
}
