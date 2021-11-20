const choices = document.getElementsByTagName("button");
const body = document.getElementsByTagName("body");
const xp = document.getElementsByClassName("xp");
function getInputValue() {
  var points = 0;
  var response = "3";
  for (let index = 0; index < choices.length; index++) {
    choices[index].addEventListener("click", (e) => {
      value = choices[index].getAttribute("value");
      if (value === "3") {
        choices[index].style.backgroundColor = "green";
        window.location.href = "page2.html";
        points = xp[0].innerHTML;
        newPoints = points + 5;
        xp[0].innerHTML = newPoints;
      } else {
        choices[index].style.backgroundColor = "red";
        points = xp[0].innerHTML;
        newPoints = points - 5;
        xp[0].innerHTML = newPoints;
      }
    });
  }
  let startingMinutes = 1;

  let time = startingMinutes * 60;

  const countDownEl = document.getElementById("countdown");

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countDownEl.innerHTML = `${minutes} : ${seconds}`;
    if (time > 0) {
      time--;
      time < 10 ? (countDownEl.style.color = "red") : "balck";
    } else {
      countDownEl.innerHTML = `IT'S OVER !`;
    }
  }
}

window.onload = getInputValue;
