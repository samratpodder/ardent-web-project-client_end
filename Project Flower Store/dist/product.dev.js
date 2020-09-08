"use strict";

var stars = document.getElementsByClassName("fa-star");
var rating = 3;

for (var i = 0; i < rating; i++) {
  stars[i].classList.remove("far");
  stars[i].classList.add("fas");
}

var getnumreviews = 12;
var numreview = document.getElementById("numreview");
numreview.innerText = getnumreviews;
var getprice = 5.45;
var price = document.getElementById("prod-price");
price.innerText = getprice;
var plusbut = document.querySelector(".qtyplus");
var qtydisplay = document.querySelector(".boxed");
var qtyval = Number(qtydisplay.innerText);
console.log(qtyval);
plusbut.addEventListener("click", function () {
  qtyval += 1;
  qtydisplay.innerText = qtyval;
  console.log(qtyval);
});
var minusbut = document.querySelector(".qtyminus");
minusbut.addEventListener("click", function () {
  qtyval -= 1;
  console.log(qtyval);

  if (qtyval <= 0) {
    qtyval = 0;
  }

  qtydisplay.innerText = qtyval;
});
var colorbutton = document.querySelectorAll(".colorbutton");
colorbutton[0].addEventListener("click", function () {
  colorbutton[0].style.border = "2px solid red";
});
colorbutton[1].addEventListener("click", function () {
  console.log(colorbutton[1]);
});
colorbutton[2].addEventListener("click", function () {
  console.log(colorbutton[2]);
});