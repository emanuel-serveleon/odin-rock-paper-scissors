let playerWinCount;
let computerWinCount;

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

function playRound(playerSelection, computerSelection) {
  // return something like "You Lose! Paper beats Rock"
  // make playerSelection case insensitive

  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock" || (playerSelection === "scissors" && computerSelection === "paper"))) {
    playerWinCount++;
    console.log(`You win, ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else {
    computerWinCount++;
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
  }
}