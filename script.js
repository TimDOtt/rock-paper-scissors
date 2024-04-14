const CHOICES = ["rock", "paper", "scissors"];
const btn = document.querySelectorAll('button');
const result = document.querySelector('#result');
const finalResult = document.querySelector('#finalResult');
const player = document.querySelector('#playerWins');
const computer = document.querySelector('#computerWins');


let value = btn.value;
let playerScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('#finalResult').textContent = '';
        value = button.value;
        playRound();
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * CHOICES.length); 
    let computerChoice = CHOICES[choice];
    return computerChoice;
}

function playRound() {
    let playerSelection = value;
    let computerSelection = getComputerChoice();
    document.querySelector("#score").innerHTML = '';

    if (playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent = "You win! Rock beats scissors.";
        playerScore += 1;
        player.textContent = "Player wins: " + playerScore;
        
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        result.textContent = "You lose! Paper beats rock.";
        computerScore += 1;
        computer.textContent = "Computer wins: " + computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result.textContent = "You lose! Scissors beats paper.";
        computerScore += 1;
        computer.textContent = "Computer wins: " + computerScore;
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result.textContent = "You win! Paper beats rock.";
        playerScore += 1;
        player.textContent = "Player wins: " + playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result.textContent = "You lose! Rock beats scissors.";
        computerScore += 1;
        computer.textContent = "Computer wins: " + computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result.textContent = "You win! Scissors beats paper.";
        playerScore += 1;
        player.textContent = "Player wins: " + playerScore;
    }
    else {
        result.textContent = "It's a tie!!";
    }

    if (playerScore === 5) {
        score = "Score:" + "<br>" + "Player wins: " + playerScore + "<br>" + "Computer wins: " + computerScore;
        finalResult.textContent = "Player wins! Game has reset."
        document.querySelector('#score').innerHTML = score;
        playerScore = 0;
        computerScore = 0;
        computer.textContent = "Computer wins: 0";
        player.textContent = "Player wins: 0";
    }else if (computerScore === 5) {
        score = "Score:" + "<br>" + "Player wins: " + playerScore + "<br>" + "Computer wins: " + computerScore;
        finalResult.textContent = "Computer wins! Game has reset."
        document.querySelector('#score').innerHTML =  score;
        playerScore = 0;
        computerScore = 0;
        player.textContent = "Player wins: 0";
        computer.textContent = "Computer wins: 0";
        
    }
}

// function playGame() {
//    let playerScore = 0;
//    let computerScore = 0;
   
//    for (let i = 0; i <= 4; i++) {
//     let outcome = playRound();
//     if (outcome.includes("You win!")) {
//         ++playerScore;
//         console.log(outcome);
//         console.log("Player victories " + playerScore);
//     }
//     else if (outcome.includes("You lose!")) {
//         ++computerScore;
//         console.log(outcome);
//         console.log("Computer victories " + computerScore);
//     }
//     else {
//         console.log(outcome);
//     }
//    } 
//    if (playerScore > computerScore) {
//     console.log("You win! Refresh to play again.");
//     }
//     else if (computerScore > playerScore){
//     console.log("Computer wins. Refresh to try again.");
//     }
//     else {
//         console.log("It was a draw. Please refresh to try again.");
//     }
// }

// playGame();