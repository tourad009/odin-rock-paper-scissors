
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

const buttons = document.querySelectorAll("button");

const results= document.querySelector("#results");

let paragraphResult = document.createElement("p");

let paragraphScore = document.createElement("p");
let headingWinner = document.createElement("h3");

results.appendChild(paragraphResult);
results.appendChild(paragraphScore);
results.appendChild(headingWinner);

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        paragraphResult.textContent = playRound(button.textContent.toLowerCase(), getComputerChoice());

        paragraphScore.textContent = `You ${humanScore} - ${computerScore} Computer`;

        if (humanScore === 5) {
            headingWinner.textContent = "You win!";
        } else if (computerScore === 5) {
            headingWinner.textContent = "Computer wins!";
        }


    })
});
