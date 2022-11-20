"use strict";
const DELAY = 500;
const queue = ["btn1", "btn2", "btn-div", "title", "subtitle", "wrapper"];

const timer = setInterval(() => {
  const sel = queue.shift();
  console.log("running", sel, timer);
  if (!sel) {
    clearInterval(timer);
  } else {
    [...document.querySelectorAll(`.${sel}`)].forEach((el) =>
      el.classList.toggle("hide")
    );
  }
}, DELAY);
