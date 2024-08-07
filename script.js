
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
    return userInput;
}

console.log(getHumanChoice());