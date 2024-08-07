
// Getting the computer choice

function getComputerChoice() {
    let randomValue = Math.random();
    let computerChoice;

    if (randomValue < 1/3) {
        return 'rock';
    } else if (randomValue >= 1/3 && randomValue < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
