
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
        getPlayerChoice();
    }
} 

/* I want a global variable to track the score so I can stop when one player reaches 3 wins */

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    console.log(computerChoice + playerChoice);
    if (computerChoice === playerChoice) {
        alert('It\'s a tie! We both picked ' + playerChoice + '!');
        /* This restarts playRound()*/
        playRound();
        
    }
    else if (computerChoice === 'Rock' && playerChoice === 'Scissors'
    || computerChoice === 'Paper' && playerChoice === 'Rock'
    || computerChoice === 'Scissors' && playerChoice === 'Paper') {
        computerScore = ++computerScore;
        alert('You lose this round :(');
    }
    /* Since all lose conditions are explicitly stated as well as tie, only other options are win */
    else {
        playerScore = ++playerScore;
        console.log(playerScore)
        alert('You win this round :)');
    }
    console.log(computerScore + ' ' + playerScore);
}

function playGame() {
computerScore = 0;
playerScore = 0;
    for (rounds = 0; computerScore + playerScore < 5 && computerScore < 3 && playerScore < 3; rounds++) {
        playRound();
        console.log()
        if (computerScore === 3) {
            alert('I win this time! >:)');
        }
        else if (playerScore === 3) {
            alert('Drats! You\'ve bested me this time! >:(');
        }
        else {
            alert('The current score is Computer: ' + computerScore + ' Player: ' + playerScore);
        }
    }
   
    if (confirm("Would you like to play again?")) {
        alert('You\'re on!');
        playGame();
    }
    else {
        if (computerScore === 3) {
            alert('CYA L8R LOSER');
        }
        else {
            alert('Come on, reload the page. Give me another chance!');
        }
    }
}