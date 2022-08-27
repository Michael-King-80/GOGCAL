const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "یکشنبه",
  "دو شنبه",
  "سه شنبه",
  "چهار شنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];
const d = new Date();
let month = months[d.getMonth()];
document.getElementById("mon").innerHTML = month;
const b = new Date();
document.getElementById("yea").innerHTML = b.getFullYear();
const daysstyle = document.querySelectorAll("span");

for (const paragraph of daysstyle) {
  paragraph.classList.add("read");
}

var A = new Date();
let date = new Date();
let day = days[A.getDay()];
A.setDate(A.getDate() - 1);
date.setDate(date.getDate() - 1);
let element = " ";

for (let i = 0; i < 7; i++) {
  A.setDate(A.getDate() + 1);

  date.setDate(date.getDate() + 1);
  element +=
    "<div class='dayrev'>" +
    "<p>" +
    days[A.getDay()] +
    "</p>" +
    "<span>" +
    date.getDate() +
    "</span>" +
    "</div>";
  document.getElementById("dayshow").innerHTML = element;
}

let timeNmuberA = " ";
let pmam;
let num = 24;
let ttime = new Date();
let tnum = 12;
ttime.setHours(ttime.getHours());

for (let i = 1, j = 1; i < num; i++, j++) {
  if (j > 12) {
    j = 1;
  }
  if (i >= 12) {
    pmam = " بع";
  } else pmam = " قب ";
  if (i === ttime.getHours()) {
    timeNmuberA +=
      "<div >" + "<p class='todayT'>" + j + pmam + "</p>" + "</div>";
  } else {
    timeNmuberA += "<div>" + "<p>" + j + pmam + "</p>" + "</div>";
  }
  document.getElementById("timeshow").innerHTML = timeNmuberA;
}
