const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetBtn = document.getElementById("reset-game-btn");
const gameOptions = document.querySelector(".choice-container");

const pickForComputer = () => {
  const options = ["rock", "paper", "scissors"];
  const randomResult = Math.floor(Math.random() * options.length);
  return options[randomResult]; // Fixed array access syntax
}

const didPlayerWin = (player, computer) => {
    return (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") || // Fixed logic condition
    (player === "scissors" && computer === "paper"); 
}

let playerScore = 0;
let computerScore = 0;

const findOutWhoWon = (playerChoice) => {
  const computerChoice = pickForComputer();
  if(didPlayerWin(playerChoice, computerChoice)) {
    playerScore++;
    return `Player wins! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === computerChoice){
    return `It's a tie! Both chose ${playerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${playerChoice}`;
  }
}

const updateResults = (playerChoice) => {
  resultMsg.innerText = findOutWhoWon(playerChoice);

  computerScoreDisplay.innerText = computerScore;
  playerScoreDisplay.innerText = playerScore;
  
  
  if (playerScore === 3 || computerScore === 3) {
    winnerMsg.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`; // Fixed template literal syntax
    resetBtn.style.display = "block";
    gameOptions.style.display = "none";
  }
}

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore
  winnerMsg.innerText = '';
  resultMsg.innerText = '';
  resetBtn.style.display = "none";
  gameOptions.style.display = "block";
}

resetBtn.addEventListener("click", resetGame);

rockBtn.addEventListener('click', function () { updateResults("rock"); });
paperBtn.addEventListener('click', function () { updateResults("paper"); });
scissorsBtn.addEventListener('click', function () { updateResults("scissors"); });
