const chifumi = ["rock", "paper", "scissors"];
const humanDisplay = document.getElementById("humanDisplay");
const botDisplay = document.getElementById("botDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function getBotChoice() {
  return chifumi[Math.floor(Math.random() * chifumi.length)];
}

function checkWinner(humanChoice, botChoice) {
  if (humanChoice === botChoice) return "TIE";

  const winCondition = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winCondition[humanChoice] === botChoice ? "You win 😁" : "You lose 😭";
}

function game(humanChoice) {
  const botChoice = getBotChoice();
  const result = checkWinner(humanChoice, botChoice);

  updateDisplay(humanChoice, botChoice, result);
}

function updateDisplay(humanChoice, botChoice, result) {
  humanDisplay.textContent = `PLAYER: ${humanChoice}`;
  botDisplay.textContent = `BOT: ${botChoice}`;
  resultDisplay.textContent = `RESULT: ${result}`;
}
