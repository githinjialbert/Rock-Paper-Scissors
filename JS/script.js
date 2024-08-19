const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetBtn = document.getElementById("reset-game-btn");
const gameOptions = document.querySelector(".choice-container");


const pickForComputer = () => {
  const options = ["rock", "paper", "scissors"];
  const randomResult = Math.floor(Math.random() * options.length);
  return options(randomResult);
}


const didPlayerWin = (player, computer) => {
    return (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") 
}

let playerScore = 0;
let computerScore = 0;

const findOutWhoWon = (playerChoice) => {
  const computerChoice = pickForComputer();
  if(didPlayerWin(playerChoice, computerChoice)) {
    playerScore++;
    return `Player wins! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === computerChoice){
    return `Its a tie! Both chose ${playerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${playerChoice}`;
  }
}

