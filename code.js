document.getElementById("myBtn").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
datenow = new Date();
datenow.setDate(datenow.getDate());
document.getElementById("icdtnum").innerHTML = datenow.getDate();
let borderown = "";
for (let i = 0; i < 23; i++) {
  borderown += "<div>" + "</div>";
  document.getElementById("insidetable").innerHTML = borderown;
}
let table = "";
for (let i = 0; i < 7; i++) {
  table += "<div>" + "</div>";
  document.getElementById("tablS").innerHTML = table;
  document.getElementById("topbrd").innerHTML = table;
}
