let generateButton = document.querySelector(".generateNumber");
let titleInformation = document.getElementById("titleNumber");
let textShowed = document.querySelector("#textShowed");
let showRightNumber = document.getElementById("showNumberText");
let inputTextValue = document.getElementById("numberInput").value;
// let inputText = document.getElementById("numberInput");

let min = 1;
let max = 5;
function seeRandomNumber() {
  let showRightNumber = document.getElementById("showNumber").value;
}
function generateRandomNumber() {
  showRightNumber.innerHTML = ``;
  let inputTextValue = document.getElementById("numberInput").value;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random);
  textShowed.innerHTML = `Your number is ${inputTextValue}`;
  console.log(inputTextValue);

  if (inputTextValue == null) {
    titleInformation.innerHTML = "Introduce a number first!";
  } else if (inputTextValue != random) {
    titleInformation.innerHTML = "Not today bro, try again";
  } else {
    titleInformation.innerHTML = "Dammmm, you get it!";
    showRightNumber.innerHTML = `Finally, the random number is ${random}`;
  }
}

function seeRandomNumber() {
  let showRightNumber = document.getElementById("showNumber").value;
}

if (generateButton) {
  generateButton.addEventListener("click", generateRandomNumber);
} 
