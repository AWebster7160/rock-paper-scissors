
/* getComputerChoice function should get a random integer (0, 1, or 2 with equal odds) 
and convert 0 -> 'Rock', 1 -> 'Paper', and 2 -> 'Scissors'. 
Then it should return this str any time getComputerChoice is called
*/

function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3);
    computerChoice = computerInt === 0 ? 'Rock' 
    : computerInt === 1 ? 'Paper'
    : computerInt === 2 ? 'Scissors'
    : console.log('Error');
    console.log(computerChoice);
    return computerChoice;
}

/* getPlayerChoice will take user input str, and convert it to have only the first letter capitalized.
It will do this by first converting to lowercase. At this point it will check if choice was valid 
(i.e. 'rock' 'paper' or 'scissors') any string other than this will alert('Not a valid choice').
If valid, it will convert to array, capitalize letter at 0 position, then concat this with remaining via slice(1)
Finally, it will return playerChoice which should be 'Rock' 'Paper' or 'Scissors' 
*/

function getPlayerChoice () {
    playerInput = prompt('Rock, Paper, or Scissors?');
    playerInputLow = playerInput.toLowerCase();
    if (playerInputLow === 'rock' 
    || playerInputLow ==='paper' 
    || playerInputLow === 'scissors') {
        playerChoice = playerInputLow.charAt(0).toUpperCase() 
        + playerInputLow.slice(1);
        console.log(playerChoice);
        return playerChoice;
    }
    else {
        alert('Not a valid choice');
    }
} 

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    console.log(computerChoice + playerChoice);
    if (computerChoice === playerChoice) {
        alert('It\'s a tie! We both picked ' + playerChoice + '!');
        playRound();
        
    }
    else if (computerChoice === 'Rock' && playerChoice === 'Scissors'
    || computerChoice === 'Paper' && playerChoice === 'Rock'
    || computerChoice === 'Scissors' && playerChoice === 'Paper') {
        alert('You lose :(');
    }
    else {
        alert('You win :)');
    }
}
