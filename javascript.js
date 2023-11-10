function getComputerChoice() {
  // randomly return rock, paper or scissors
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  return computerChoice;
}

function getPlayerChoice() {
  return prompt("Write rock, paper or scissors");
}