let gameBox = document.querySelector(".gameBox");
let box = document.querySelector(".box");
let totalNum = document.querySelector(".totalNum");
let time = document.querySelector(".time");
let container = document.querySelector(".container");
let startButton = document.querySelector(".startButton");
let counter = 0;
let total = 0;
let stopButton = document.querySelector(".stop");
stopButton.disabled = true;
console.log(stopButton);
let interval = null;

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
  total = "";
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
  }
}
