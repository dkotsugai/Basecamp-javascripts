var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var mais = document.getElementById("myBtn2");
mais.addEventListener("click", incrementa);
var menos = document.getElementById("myBtn1");
menos.addEventListener("click", decrementa);

function incrementa() {
  if (currentNumberWrapper.innerHTML <= 9) {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrementa() {
  if (currentNumberWrapper.innerHTML >= 1) {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
