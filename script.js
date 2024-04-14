const CHOICES = ["rock", "paper", "scissors"];
const btn = document.querySelectorAll('button');
const result = document.querySelector('#result');
const finalResult = document.querySelector('#finalResult');
const player = document.querySelector('#playerWins');
const computer = document.querySelector('#computerWins');
let playerScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        value = button.value;
        playGame();
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * CHOICES.length); 
    let computerChoice = CHOICES[choice];
    return computerChoice;
}

function getRoundWinner(player, computer) {
    switch (player) {
        case "rock":
            switch (computer) {
                case "paper":
                    return "You lose! Paper beats rock.";
                case "scissors":
                    return "You win! Rock beats scissors."
                default:
                    return "It's a tie";
            }
        case "paper":
            switch (computer) {
                case "scissors":
                    return "You lose! Scissors beats paper";
                case "rock":
                    return "You win! Paper beats rock.";
            
                default:
                    return "It's a tie.";
            }
        case "scissors":
            switch(computer) {
                case "paper":
                   return "You win! Scissors beats paper.";
                case "rock":
                   return "You lose! Rock beats scissors.";
                default:
                    return "It's a tie";   
            }
    }
}

function getScore() {
    if (result.textContent.includes("You win!")) {
        playerScore++
        player.textContent = "Player: " + playerScore;
        computer.textContent = "Computer: " + computerScore;
    } else if (result.textContent.includes("You lose!")) {
        computerScore++
        player.textContent = "Player: " + playerScore;
        computer.textContent = "Computer: " + computerScore;
    }else {
        player.textContent = "Player: " + playerScore;
        computer.textContent = "Computer: " + computerScore;
    }
    

}

function getFinalWinner() {
    score = "Score:" + "<br>" + "Player: " + playerScore + "<br>" + "Computer: " + computerScore;
    if (playerScore === 5) {
        finalResult.textContent = "Player wins! Refresh to play again."
        document.querySelector('#score').innerHTML = score;
        
    } else if (computerScore === 5) {
        finalResult.textContent = "Computer wins! Refresh to play again."
        document.querySelector('#score').innerHTML =  score;
    }
}

function playGame() {
   if (playerScore === 5 || computerScore === 5) return;
   let playerSelection = value;
   let computerSelection = getComputerChoice();
   result.textContent = getRoundWinner(playerSelection, computerSelection);
   getScore();
   getFinalWinner();
}

