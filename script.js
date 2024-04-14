const CHOICES = ["rock", "paper", "scissors"];
const btn = document.querySelectorAll('button');
let value = btn.value;
let playerWins = 0;
let computerWins = 0;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        value = button.value;
        playRound();
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * CHOICES.length); 
    let computerChoice = CHOICES[choice];
    console.log("Computer selection is: " + computerChoice);
    return computerChoice;
}

function playRound() {
    let playerSelection = value;
    let computerSelection = getComputerChoice();

    

    if (playerSelection === "rock" && computerSelection === "scissors"){
        document.querySelector('#result').textContent = "You win! Rock beats scissors.";
        playerWins += 1;
        document.querySelector('#playerWins').textContent = "Player wins: " + playerWins;
        
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        document.querySelector('#result').textContent = "You lose! Paper beats rock.";
        computerWins += 1;
        document.querySelector('#computerWins').textContent = "Computer wins: " + computerWins;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        document.querySelector('#result').textContent = "You lose! Scissors beats paper.";
        computerWins += 1;
        document.querySelector('#computerWins').textContent = "Computer wins: " + computerWins;
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        document.querySelector('#result').textContent = "You win! Paper beats rock.";
        playerWins += 1;
        document.querySelector('#playerWins').textContent = "Player wins: " + playerWins;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        document.querySelector('#result').textContent = "You lose! Rock beats scissors.";
        computerWins += 1;
        document.querySelector('#computerWins').textContent = "Computer wins: " + computerWins;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        document.querySelector('#result').textContent = "You win! Scissors beats paper.";
        playerWins += 1;
        document.querySelector('#playerWins').textContent = "Player wins: " + playerWins;
    }
    else {
        document.querySelector('#result').textContent = "It's a tie!!";
    }

    if (playerWins === 5) {
        document.querySelector('#finalResult').textContent = "Player wins! Game has reset.";
        playerWins = 0;
        computerWins = 0;
        document.querySelector('#computerWins').textContent = "Computer wins: 0";
        document.querySelector('#playerWins').textContent = "Player wins: 0";
    }else if (computerWins ===5) {
        document.querySelector('#finalResult').textContent = "Computer wins! Game has reset.";
        playerWins = 0;
        computerWins = 0;
        document.querySelector('#playerWins').textContent = "Player wins: 0";
        document.querySelector('#computerWins').textContent = "Computer wins: 0";
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

// playGame();