let score_home = document.getElementById("score_home");
let score_guest = document.getElementById("score_guest");
let freethrowEl = document.getElementById("freethrow-el");
let midrangeEl = document.getElementById("midrange-el");
let threepointerEl = document.getElementById("threepointer-el");

console.log(score_home);
console.log(score_guest);

let count = 0;
let count2 = 0;
function freethrow() {
  count += 1;
  score_home.textContent = count;
  console.log("button clicked");
}

function midrange() {
  count += 2;
  score_home.textContent = count;
  console.log("button clicked");
}

function threepointer() {
  count += 3;
  score_home.textContent = count;
  console.log("button clicked");
}

function freethrow_guest() {
  count2 += 1;
  score_guest.textContent = count2;
  console.log("button clicked");
}

function midrange_guest() {
  count2 += 2;
  score_guest.textContent = count2;
  console.log("button clicked");
}

function threepointer_guest() {
  count2 += 3;
  score_guest.textContent = count2;
  console.log("button clicked");
}
