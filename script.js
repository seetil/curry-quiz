"use strict";
function hideOverlay() {
  document.querySelector(".overlay").classList.remove("hidden");
}
let c = 0;
let myArray = [];
function beverage() {
  if (document.getElementById("kombucha").checked) {
    myArray.push("mappas");
  } else if (document.getElementById("lager").checked) {
    myArray.push("madras");
  } else if (document.getElementById("oatmilk").checked) {
    myArray.push("korma");
  } else if (document.getElementById("ipa").checked) {
    myArray.push("monkfish");
  } else if (document.getElementById("coffee").checked) {
    myArray.push("biryani");
  } else {
    console.log("beverage not chosen");
  }
}
function days() {
  if (document.getElementById("tuesday").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("wednesday").checked) {
    myArray.push("monkfish");
  } else if (document.getElementById("friday").checked) {
    myArray.push("korma");
  } else if (document.getElementById("saturday").checked) {
    myArray.push("mappas");
  } else if (document.getElementById("sunday").checked) {
    myArray.push("madras");
  } else {
    console.log("day not chosen");
  }
}

function supermarkets() {
  if (document.getElementById("aldi").checked) {
    myArray.push("monkfish");
  } else if (document.getElementById("asda").checked) {
    myArray.push("madras");
  } else if (document.getElementById("sainsburys").checked) {
    myArray.push("korma");
  } else if (document.getElementById("tesco").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("waitrose").checked) {
    myArray.push("mappas");
  } else {
    console.log("supermarket not chosen");
  }
}

function games() {
  if (document.getElementById("cod").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("mario").checked) {
    myArray.push("korma");
  } else if (document.getElementById("pokemon").checked) {
    myArray.push("monkfish");
  } else if (document.getElementById("wow").checked) {
    myArray.push("madras");
  } else if (document.getElementById("zelda").checked) {
    myArray.push("mappas");
  } else {
    console.log("game not chosen");
  }
}

function holidays() {
  if (document.getElementById("halloween").checked) {
    myArray.push("monkfish");
  } else if (document.getElementById("christmas").checked) {
    myArray.push("korma");
  } else if (document.getElementById("newyears").checked) {
    myArray.push("madras");
  } else if (document.getElementById("easter").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("bonfire").checked) {
    myArray.push("madras");
  } else {
    console.log("game not chosen");
  }
}

function films() {
  if (document.getElementById("xmen").checked) {
    myArray.push("mappas");
  } else if (document.getElementById("lotr").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("harrypotter").checked) {
    myArray.push("korma");
  } else if (document.getElementById("starwars").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("avengers").checked) {
    myArray.push("madras");
  } else {
    console.log("films not chosen");
  }
}

function series() {
  if (document.getElementById("greys").checked) {
    myArray.push("mappas");
  } else if (document.getElementById("asip").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("friends").checked) {
    myArray.push("korma");
  } else if (document.getElementById("community").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("archer").checked) {
    myArray.push("madras");
  } else {
    console.log("series not chosen");
  }
}
function brunch() {
  if (document.getElementById("granola").checked) {
    myArray.push("mappas");
  } else if (document.getElementById("fullbfast").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("avo").checked) {
    myArray.push("korma");
  } else if (document.getElementById("benny").checked) {
    myArray.push("biryani");
  } else if (document.getElementById("skillet").checked) {
    myArray.push("madras");
  } else {
    console.log("brunch not chosen");
  }
}

const mode = (a) =>
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }

      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
function totals() {
  if (mode(myArray) == "korma") {
    document.querySelector(".korma").classList.remove("hidden");
    hideOverlay();
    console.log(myArray);
  } else if (mode(myArray) == "biryani") {
    document.querySelector(".biryani").classList.remove("hidden");
    hideOverlay();
    console.log(myArray);
  } else if (mode(myArray) == "mappas") {
    document.querySelector(".mappas").classList.remove("hidden");
    hideOverlay();
    console.log(myArray);
  } else if (mode(myArray) == "madras") {
    document.querySelector(".madras").classList.remove("hidden");
    hideOverlay();
    console.log(myArray);
  } else if (mode(myArray) == "monkfish") {
    document.querySelector(".monkfish").classList.remove("hidden");
    hideOverlay();
    console.log(myArray);
  }
}
