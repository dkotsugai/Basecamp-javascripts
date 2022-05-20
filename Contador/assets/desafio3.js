var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var mais = document.getElementById("myBtn2");
mais.addEventListener("click", incrementa);
var menos = document.getElementById("myBtn1");
menos.addEventListener("click", decrementa);

function incrementa() {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;
  if (
    currentNumberWrapper.innerHTML > -1 &&
    currentNumberWrapper.innerHTML < 11
  ) {
    currentNumberWrapper.style.color = "black";
  }
  if (currentNumberWrapper.innerHTML > 10) {
    currentNumberWrapper.style.color = "red";
  }
}

function decrementa() {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumberWrapper.innerHTML < 0) {
    currentNumberWrapper.style.color = "red";
  }
  if (
    currentNumberWrapper.innerHTML > -1 &&
    currentNumberWrapper.innerHTML < 11
  ) {
    currentNumberWrapper.style.color = "black";
  }
}
