
// Getting the computer choice and return it

function getComputerChoice() {
    let randomValue = Math.random();

    if (randomValue < 1/3) {
        return 'rock';
    } else if (randomValue >= 1/3 && randomValue < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Getting user choice and return it

function getHumanChoice() {
    let userInput = prompt("Enter your choice: ");
    if (userInput.toLowerCase() === 'rock') {
        return userInput;
    } else if (userInput.toLowerCase() === 'paper') {
        return userInput;
    } else if (userInput.toLowerCase() === 'scissors') {
        return userInput;
    } else {
        return 'Invalid choice';
    }
}

// Keeping track of the players score

let humanScore = 0;
let computerScore = 0;

// Single Round Play

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        return 'Tie.';
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper')) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        return 'Invalid Choice!';
    }
}

// Play 5 Rounds

let humanSelection;
let computerSelection;

function playGame() {
    for(let i = 0; i < 5; i++) {

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }

    if (computerScore > humanScore) {
        console.log('Winner: Computer.');
    } else if (computerScore < humanScore) {
        console.log('Winner: You.');
    } else {
        console.log('Perfect Tie.');
    }
}

playGame();