const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[choice];
    let capitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    console.log(capitalized); 
}

getComputerChoice();