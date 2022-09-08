//SHOW MORE

const showMore1 = document.getElementById("show-more-1");
const showMore12 = document.getElementById("show-more-2");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");

p1.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";
p6.style.display = "none";
p7.style.display = "none";
p8.style.display = "none";

showMore12.style.display = "none";

function showMore() {
  p1.style.display = "block";
  p2.style.display = "block";
  p3.style.display = "block";
  p4.style.display = "block";
  showMore1.style.display = "none";
  showMore12.style.display = "block";
}

function showMore2() {
  p5.style.display = "block";
  p6.style.display = "block";
  p7.style.display = "block";
  p8.style.display = "block";
  showMore1.style.display = "none";
  showMore12.style.display = "none";
}



