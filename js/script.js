
function checkPrime(number) {
  if (number < 2) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
let numberInput = document.getElementById("numberInput");
let container = document.querySelector(".container");
function showNumber() {
  container.innerHTML=""
  let limit = numberInput.value;
  for (let i = 0; i <= limit; i++) {
    let div = document.createElement("div")
    div.classList.add("number")
    div.textContent = i
    if (checkPrime(i)) {
      div.classList.add("red")
    }
    else if (i % 2 == 0) {
      div.classList.add("green")
    }
    else {
      div.classList.add("yellow")
    }
    container.appendChild(div)
  }
}