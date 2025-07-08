function startTime() {
  // Get current time in New York timezone
  let today = new Date();
  let nyTime = new Date(
    today.toLocaleString("en-US", { timeZone: "America/New_York" }),
  );

  let hours = nyTime.getHours();
  let min = nyTime.getMinutes();
  let sec = nyTime.getSeconds();

  // Convert to 12-hour format
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  min = checkTime(min);
  sec = checkTime(sec);

  document.getElementById("txt").innerHTML = hours + ":" + min + " " + ampm;
  document.getElementById("seconds").innerHTML = sec;
  time = setTimeout("startTime()", 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();
