let playerWinCount = 0;
let computerWinCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = event.target.textContent;
    playRound(playerChoice, getComputerChoice());
  })
})

function getComputerChoice() {
  // randomly return rock, paper or scissors
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  return computerChoice;
}

function getPlayerChoice() {
  return prompt("Write rock, paper or scissors");
}

function playRound(playerChoice, computerChoice) {
  // return something like "You Lose! Paper beats Rock"
  // make playerSelection case insensitive

  playerChoice = playerChoice.toLowerCase();

  document.querySelector("#player-choice").textContent = playerChoice;
  document.querySelector("#computer-choice").textContent = computerChoice;
  
  const result = document.querySelector("#result");
  const playerCountSelector = document.querySelector("#player-win-count");
  const computerCountSelector = document.querySelector("#computer-win-count");
  

  if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock" || (playerChoice === "scissors" && computerChoice === "paper"))) {
    playerCountSelector.textContent = ++playerWinCount;
    result.textContent = "You win"
  } else if (playerChoice === computerChoice) {
    result.textContent = "It's a tie"
  } else {
    computerCountSelector.textContent = ++computerWinCount;
    result.textContent = "You lose"
  }

  if (playerWinCount === 5) {
    result.textContent = "You won 5 times. You are the winner of the game!"
  } else if (computerWinCount === 5) {
    result.textContent = "Computer won 5 times. Computer is the winner of the game"
  }
}