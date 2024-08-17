const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

const getRandomResults = () => {
  const options = ["rock", "paper", "scissors"];
  const randomResult = Math.floor(Math.random() * options.length);
  return options(randomResult);
}

const whoWonTheRound = (player, computer) => {
    if(player === "rock" && computer === "scissors" 
        || player === "paper" && computer === "scissors" 
        || player === "scissors" && computer === "paper") {

    }
}

let playerScore = 0;
let computerScore = 0;