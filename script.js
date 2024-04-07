const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[choice];
    console.log("Computer selection is: " + computerChoice);
    return computerChoice;
}

function playRound() {
    let playerSelection = prompt("Choose rock, paper, or scissors :");
    let computerSelection = getComputerChoice();
    console.log("Player selection is: " + playerSelection.toLowerCase());
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock.";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper.";
    }
    else {
        return "It's a tie!!";
    }
}

function playGame() {
   let playerWins = 0;
   let computerWins = 0;
   
   for (let i = 0; i <= 4; i++) {
    let outcome = playRound();
    if (outcome.includes("You win!")) {
        ++playerWins;
        console.log(outcome);
        console.log("Player victories " + playerWins);
    }
    else if (outcome.includes("You lose!")) {
        ++computerWins;
        console.log(outcome);
        console.log("Computer victories " + computerWins);
    }
    else {
        console.log(outcome);
    }
   } 
   if (playerWins > computerWins) {
    console.log("You win! Refresh to play again.");
    }
    else if (computerWins > playerWins){
    console.log("Computer wins. Refresh to try again.");
    }
    else {
        console.log("It was a draw. Please refresh to try again.");
    }
}

playGame();