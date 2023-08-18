const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const globalAMPM = document.getElementById("ampm");

function updateClock() {
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
  globalAMPM.textContent = ampm;
}

setInterval(updateClock, 1000);
