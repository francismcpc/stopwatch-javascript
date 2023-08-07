const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//for time values
let seconds = 0;
let minutes = 0;
let hour = 0;
//for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHour = 0;

//setInterval & timerStatus

let timerInterval = null;
let timerStatus = "stopped";

//Stopwatch function
function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hour++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hour < 10) {
    leadingHour = "0" + hour.toString();
  } else {
    leadingHour = hour;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHour + ":" + leadingMinutes + ":" + leadingSeconds);
}

/* window.setInterval(stopWatch, 1000); */

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<img src="/images/pause.png"/> `;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<img src="/images/play.png"/>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hour = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
