const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[choice];
    return computerChoice;
}

function playGame(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock";
    }
    else {
        return "It's a tie!!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));