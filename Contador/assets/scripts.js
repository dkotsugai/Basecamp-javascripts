var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

// let count = 0;

// const currentNumber = document.getElementById("currentNumber");

// function increment() {
//   count++;
//   currentNumber.innerHTML = count;
// }

// function decrement() {
//   count--;
//   currentNumber.innerHTML = count;
// }

// function test() {
//   kdowkdpo;
// }
