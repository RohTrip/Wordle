const firstRow = document.querySelectorAll(".gray-first-row");
const secondRow = document.querySelectorAll(".gray-second-row");
const thirdRow = document.querySelectorAll(".gray-third-row");
const fourthRow = document.querySelectorAll(".gray-fourth-row");
const fifthRow = document.querySelectorAll(".gray-fifth-row");
const sixthRow = document.querySelectorAll(".gray-sixth-row");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const allRow = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow];
let rowIndex = 0;
const grid = document.querySelector("#grid");
const button = document.querySelector(".button");
let word = ["r", "o", "h", "i", "t"]

button.addEventListener("mousedown", function getInputFromUser() {
  let input = prompt("enter a 5 letter word here:");
  putInputInArray(input);
});

function putInputInArray(input) {
  let inputArray = input.split("");
  if (inputArray.length < 5 || 5 < inputArray.length) {
    alert("Invalid letter count, Try again");
  } else {
    addYellowGreen(inputArray, word);
    rowIndex++;
  }
}

function addYellowGreen(inputArray, word) {
  let matchingWords = word.filter((element) => inputArray.includes(element));
  console.log(matchingWords)
  // This is where I want to assign the "yellow" id to the matchingWords
  putInputInNthBox(inputArray);
}

function putInputInNthBox(inputArray) {
  for (let i = 0; i < 5; i++) {
    allRow[rowIndex][i].innerHTML = inputArray[i];
  }

  if (JSON.stringify(word) === JSON.stringify(inputArray)) {
    resetGameWin(inputArray, word);
  }
  if (rowIndex.length) {
    resetGameLose();
  }
}

function resetGameLose() {
  alert("defeat");
  location.reload();
}

function resetGameWin() {
  alert("victory");
  location.reload();
}