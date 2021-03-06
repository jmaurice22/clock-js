function showTime() {
  //  Date Object to hold value of current date
  let date = new Date();

  // Hours , Mins, Secs properties of the date object
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let am_pm = "";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  } else if (hour == "00") {
    hour = "12";
    am_pm = "AM";
  } else {
    am_pm = "AM";
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  // Cuurent time
  let time = hour + ":" + min + ":" + sec + " " + am_pm;
  document.getElementById("clock-container").innerText = time;
  document.getElementById("clock-container").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
