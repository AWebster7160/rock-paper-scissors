
/* getComputerChoice function should get a random integer (0, 1, or 2 with equal odds) 
and convert 0 -> 'Rock', 1 -> 'Paper', and 2 -> 'Scissors'. 
Then it should return this str any time getComputerChoice is called */

function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3);
    computerChoice = computerInt === 0 ? 'Rock' 
    : computerInt === 1 ? 'Paper'
    : computerInt === 2 ? 'Scissors'
    : console.log('Error');
    return computerChoice;
}

console.log(getComputerChoice())