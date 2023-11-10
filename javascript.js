let playerWinCount;
let computerWinCount;

game();

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
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    computerWinCount++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  //play 5 rounds to report a winner at the end with a score
  playerWinCount = 0;
  computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }

  if (playerWinCount > computerWinCount) {
    console.log("You are the winner");
  } else if (playerWinCount < computerWinCount) {
    console.log("You are the loser");
  } else {
    console.log("It's a tie");
  }
}