const choices = ["rock", "paper", "scissors"];
const playerSelection = "paper";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[choice];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper.";
    }
    else {
        return "It's a tie!!";
    }
}

function playGame(x) {
    
}

console.log(playRound(playerSelection, computerSelection));