// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 3;
let target2 = 8;

let min = 0;
let max = array.length - 1;

function recursiveSearch(array, val, min, max) {
  if (min > max) {
    return false;
  }
  let mid = Math.floor((min + max) / 2);

  if (array[mid] == val) {
    return true;
  }
  if (array[mid] > val) {
    return recursiveSearch(array, val, min, mid - 1);
  } else {
    return recursiveSearch(array, val, mid + 1, max);
  }
}

console.log(recursiveSearch(array, target1, min, max));
