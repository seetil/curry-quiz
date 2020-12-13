"use strict";
function hideOverlay() {
  document.querySelector(".overlay").classList.remove("hidden");
}
let c = 0;
function beverage() {
  if (document.getElementById("kombucha").checked) {
    c = c + 2;
  } else if (document.getElementById("lager").checked) {
    c = c + 3;
  } else if (document.getElementById("oatmilk").checked) {
    c = c + 0;
  } else if (document.getElementById("ipa").checked) {
    c = c + 4;
  } else if (document.getElementById("coffee").checked) {
    c++;
  } else {
    console.log("beverage not chosen");
  }
}
function days() {
  if (document.getElementById("tuesday").checked) {
    c++;
  } else if (document.getElementById("wednesday").checked) {
    c = c + 4;
  } else if (document.getElementById("friday").checked) {
    c = c + 0;
  } else if (document.getElementById("saturday").checked) {
    c = c + 2;
  } else if (document.getElementById("sunday").checked) {
    c = c + 3;
  } else {
    console.log("day not chosen");
  }
}
function supermarkets() {
  if (document.getElementById("aldi").checked) {
    c = c + 4;
  } else if (document.getElementById("asda").checked) {
    c = c + 3;
  } else if (document.getElementById("sainsburys").checked) {
    c = c + 0;
  } else if (document.getElementById("tesco").checked) {
    c++;
  } else if (document.getElementById("waitrose").checked) {
    c = c + 2;
  } else {
    console.log("supermarket not chosen");
  }
}

function games() {
  if (document.getElementById("cod").checked) {
    c++;
  } else if (document.getElementById("mario").checked) {
    c = c + 0;
  } else if (document.getElementById("pokemon").checked) {
    c = c + 4;
  } else if (document.getElementById("wow").checked) {
    c = c + 3;
  } else if (document.getElementById("zelda").checked) {
    c = c + 2;
  } else {
    console.log("game not chosen");
  }
}

function totals() {
  if (c < 4) {
    document.querySelector(".korma").classList.remove("hidden");
    hideOverlay();
  } else if (c < 8) {
    document.querySelector(".biryani").classList.remove("hidden");
    hideOverlay();
  } else if (c < 12) {
    document.querySelector(".mappas").classList.remove("hidden");
    hideOverlay();
  } else if (c < 16) {
    document.querySelector(".madras").classList.remove("hidden");
    hideOverlay();
  } else {
    document.querySelector(".monkfish").classList.remove("hidden");
    hideOverlay();
  }
}
