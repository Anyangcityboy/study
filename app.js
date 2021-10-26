const inputForm = document.querySelector("#inputform");
const maxValue = document.querySelector(".gen input");
const guessValue = document.querySelector(".guess input:nth-child(2)");
//input 중의 첫번째라서 input:first-child 라고 쓰면 안된다. 전체child 중에서의 순서가 중요
const showValue = document.querySelector(".showvalue");
const judgement = document.querySelector(".judgement");
let machineValue;
let playerValue;

function NumberSave(event) {
  event.preventDefault();
  const playerGuessNumber = parseInt(guessValue.value);
  const playerMaxNumber = parseInt(maxValue.value);
  if (playerMaxNumber < 0 || playerGuessNumber < 0) {
    console.log("Please input positive integer");
    return 0;
  } else if (playerMaxNumber < playerGuessNumber) {
    console.log("Guess number must be smaller than generate number");
    return 0;
  } else {
    localStorage.setItem("PlayerGuess", playerGuessNumber);
    localStorage.setItem("PlayerMax", playerMaxNumber);
  }
  playerValue = parseInt(localStorage.getItem("PlayerGuess"));
}

function randomGen() {
  const randomValue = Math.round(
    Math.random() * parseInt(localStorage.getItem("PlayerMax"))
  );
  machineValue = randomValue;
}
function valueShowing() {
  showValue.innerText = `You Choose : ${playerValue}  the machine choose : ${machineValue}`;
  showValue.classList.remove("hide");
}
function judging() {
  if (playerValue === machineValue) {
    judgement.innerText = "You won!";
  } else {
    judgement.innerText = "You lost!";
  }
  judgement.classList.remove("hide");
}

inputForm.addEventListener("submit", NumberSave);
randomGen();
//valueShowing();
//judging();
//machineValue = randomGen();
//playerValue = parseInt(localStorage.getItem("PlayerGuess"));

//inputForm.addEventListener("submit", randomGen);
inputForm.addEventListener("submit", randomGen);
inputForm.addEventListener("submit", valueShowing);
inputForm.addEventListener("submit", judging);
