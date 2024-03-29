const computerHands = document.querySelector('.computer-hands');
const computerPalm = document.querySelector('#computer-palm');
const computerThumb = document.querySelector('#computer-thumb');
const computerFist = document.querySelector('#computer-fist');
const playerHands = document.querySelector('.player-hands');
const playerPalm = document.querySelector('#player-palm');
const playerFist = document.querySelector('#player-fist');
const scoreBoard = document.querySelector('.score-board');
const choices = document.querySelector('.choices');
const addChoices = document.querySelector('#test-choices');
const buttonCover = document.createElement('div');
const playerScoreArea = document.querySelector('#player-score-area');
const opponentScoreArea = document.querySelector('#opponent-score-area');
const playerZero = document.querySelector('#you');
const opponentZero = document.querySelector('#opponent');
const gameArea = document.querySelector('.game-area');
const bottomHands = document.querySelector('.bottom-hands');

const victory = document.createElement('img');
victory.src = ('./img/victory.svg');
victory.setAttribute('id', 'victory');
victory.style.opacity=0;
const defeat = document.createElement('img');
defeat.src = ('./img/defeat.svg');
defeat.setAttribute('id', 'defeat');
defeat.style.opacity=0;



const playerOne = document.createElement('img');
playerOne.src = ('./img/one.svg')
playerOne.setAttribute('id', 'player-one')
playerOne.style.opacity = 0;

const computerOne = document.createElement('img');
computerOne.src = ('./img/opponent-one.svg')
computerOne.setAttribute('id', 'computer-one')
computerOne.style.opacity = 0;

const playerTwo = document.createElement('img');
playerTwo.src = ('./img/two.svg');
playerTwo.setAttribute('id', 'player-two');
playerTwo.style.opacity = 0;

const computerTwo = document.createElement('img');
computerTwo.src = ('./img/opponent-two.svg');
computerTwo.setAttribute('id', 'computer-two');
computerTwo.style.opacity = 0;

const playerThree = document.createElement('img');
playerThree.src = ('./img/three.svg');
playerThree.setAttribute('id', 'player-three');
playerThree.style.opacity = 0;

const computerThree = document.createElement('img');
computerThree.src = ('./img/opponent-three.svg');
computerThree.setAttribute('id', 'computer-three');
computerThree.style.opacity = 0;

const playerFour = document.createElement('img');
playerFour.src = ('./img/four.svg');
playerFour.setAttribute('id', 'player-four');
playerFour.style.opacity = 0;

const computerFour = document.createElement('img');
computerFour.src = ('./img/opponent-four.svg');
computerFour.setAttribute('id', 'computer-four');
computerFour.style.opacity = 0;

const playerFive = document.createElement('img');
playerFive.src = ('./img/five.svg');
playerFive.setAttribute('id', 'player-five');
playerFive.style.opacity = 0;

const computerFive = document.createElement('img');
computerFive.src = ('./img/opponent-five.svg');
computerFive.setAttribute('id', 'computer-five');
computerFive.style.opacity = 0;

buttonCover.setAttribute('id', 'cover');
let computerChoice;
let playerScore = 0;
let computerScore= 0;
let playerChoice = '';

playerHands.style.visibility='hidden';
playerHands.style.opacity=0;
computerHands.style.visibility='hidden';
computerHands.style.opacity=0;
scoreBoard.style.visibility='hidden';
scoreBoard.style.opacity=0;

function buttonShow() {
    setTimeout(() => {
    rockButton.style.display = 'revert';
    paperButton.style.display = 'revert';
    scissorsButton.style.display = 'revert';
    rockButton.addEventListener('mouseover', rockOver);
    rockButton.addEventListener('mouseout', rockOut);
    paperButton.addEventListener('mouseover', paperOver);
    paperButton.addEventListener('mouseout', paperOut);
    scissorsButton.addEventListener('mouseover', scissorsOver);
    scissorsButton.addEventListener('mouseout', scissorsOut);
    rockButton.animate(appear, fadeTimeSlower);
    paperButton.animate(appear, fadeTimeSlower);
    scissorsButton.animate(appear, fadeTimeSlower);
}, 1000);
}

function firstShow() {
    setTimeout(() => {
    rockButton.style.display = 'revert';
    paperButton.style.display = 'revert';
    scissorsButton.style.display = 'revert';
    rockButton.addEventListener('mouseover', rockOver);
    rockButton.addEventListener('mouseout', rockOut);
    paperButton.addEventListener('mouseover', paperOver);
    paperButton.addEventListener('mouseout', paperOut);
    scissorsButton.addEventListener('mouseover', scissorsOver);
    scissorsButton.addEventListener('mouseout', scissorsOut);
    rockButton.animate(appear, fadeTimeSlow);
    paperButton.animate(appear, fadeTimeSlower);
    scissorsButton.animate(appear, fadeTimeSlowest);
    }, 1000);
    setTimeout(() => {
        playerHands.style.visibility='visible';
        computerHands.style.visibility='visible';
        playerHands.animate(appear, fadeTimeSlower);
        computerHands.animate(appear, fadeTimeSlower)
    }, 5800);
    setTimeout(() => {
        scoreBoard.style.visibility='visible';
        scoreBoard.animate(appear, fadeTimeSlower);
    }, 7400);
}

/* needs to be inside function instead of button, so I can call each round */
document.addEventListener('DOMContentLoaded', function() {
    firstShow();
})

const appear = [
    {opacity: 0},
    {opacity: 1}
]
const disappear = [
    {opacity: 1},
    {opacity: 0}
]
const revertSize = [
    {transform: 'scale(1)'},
]
/* for tmr, trying to get this to increase in size, then fade out I want a slow (1at a time) fade in 
at game start, then each round fade in all together*/
const chooseRock = [
    {transform: 'scale(2.2) translateY(-2vw) translateX(5vh)'},
]
const choosePaper = [
    {transform: 'scale(2.2) translateY(2vw)'},
]
const chooseScissors = [
    {transform: 'scale(2.2) translateY(-2vw) translateX(-5vh)'},
]
const fadeTime = {
    duration: 300,
    fill: 'forwards'
}
const controlFadeTime = {
    duration: 400,
    fill: 'forwards'
}
const fadeTimeSlow = {
    delay: 1200,
    duration: 1800,
    fill: 'forwards'
}
const fadeTimeSlower = {
    delay: 2400,
    duration: 1800,
    fill: 'forwards'
}
const fadeTimeSlowest = {
    delay: 3600,
    duration: 1800,
    fill: 'forwards'
}
const fadeTimeDelay = {
    delay: 2400,
    duration: 1000,
    fill: 'forwards'
}

const rockButton = document.createElement('img');
rockButton.setAttribute('id', 'rock-button');
rockButton.src = ('./img/rock.svg');
rockButton.style.opacity=0;

const rockChoice = document.createElement('img');
rockChoice.setAttribute('id', 'rock-choice');
rockChoice.src = ('./img/rock-non-transparent.svg');
rockChoice.style.opacity=0;

const rockChoiceComputer = document.createElement('img');
rockChoiceComputer.setAttribute('id', 'rock-choice-computer');
rockChoiceComputer.src = ('./img/rock-non-transparent.svg');
rockChoiceComputer.style.opacity=0;

const paperButton = document.createElement('img');
paperButton.setAttribute('id', 'paper-button');
paperButton.src = ('./img/paper.svg');
paperButton.style.opacity=0;

const paperChoice = document.createElement('img');
paperChoice.setAttribute('id', 'paper-choice');
paperChoice.src = ('./img/paper-non-transparent.svg');
paperChoice.style.opacity=0;

const paperChoiceComputer = document.createElement('img');
paperChoiceComputer.setAttribute('id', 'paper-choice-computer');
paperChoiceComputer.src = ('./img/paper-non-transparent.svg');
paperChoiceComputer.style.opacity=0;

const scissorsButton = document.createElement('img');
scissorsButton.setAttribute('id', 'scissors-button');
scissorsButton.src = ('./img/scissors.svg');
scissorsButton.style.opacity=0;

const scissorsChoice = document.createElement('img');
scissorsChoice.setAttribute('id', 'scissors-choice');
scissorsChoice.src = ('./img/scissors-non-transparent.svg');
scissorsChoice.style.opacity=0;

const scissorsChoiceComputer = document.createElement('img');
scissorsChoiceComputer.setAttribute('id', 'scissors-choice-computer');
scissorsChoiceComputer.src = ('./img/scissors-non-transparent.svg');
scissorsChoiceComputer.style.opacity=0;

choices.appendChild(rockButton);
choices.appendChild(paperButton);
choices.appendChild(scissorsButton);
rockButton.style.display = 'none';
paperButton.style.display = 'none';
scissorsButton.style.display = 'none';

const controls = document.createElement('img');
controls.setAttribute('id', 'controls');
controls.src = ('./img/controls.svg');
choices.appendChild(controls);
controls.style.display = 'none';
controls.style.opacity=0;

rockButton.addEventListener('click', () => {
    playerChoice = 0;
    rockButton.animate(chooseRock, fadeTimeSlow);
    rockButton.removeEventListener('mouseover', rockOver, false);
    rockButton.removeEventListener('mouseout', rockOut, false);
    paperButton.removeEventListener('mouseover', paperOver, false);
    paperButton.removeEventListener('mouseout', paperOut, false);
    scissorsButton.removeEventListener('mouseover', scissorsOver, false);
    scissorsButton.removeEventListener('mouseout', scissorsOut, false);
    paperButton.animate(disappear, fadeTime);
    scissorsButton.animate(disappear, fadeTime);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
        rockButton.animate(disappear, fadeTimeSlow);
        rockButton.animate(revertSize, fadeTimeDelay);
    }, 1600);
    setTimeout(() => {
        rockButton.style.display = 'none';
        buttonCover.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        controls.style.display= 'revert';
        controls.animate(appear, fadeTimeSlow);
    }, 4000);
    setTimeout(() => {
        controls.animate(disappear, controlFadeTime);
    }, 8000);
    setTimeout(() => {
        controls.style.display = 'none';
    }, 8600);
    return playerChoice;
})
paperButton.addEventListener('click', () => {
    playerChoice = 1;
    paperButton.animate(choosePaper, fadeTimeSlow);
    rockButton.animate(disappear, fadeTime);
    scissorsButton.animate(disappear, fadeTime);
    rockButton.removeEventListener('mouseover', rockOver, false);
    rockButton.removeEventListener('mouseout', rockOut, false);
    paperButton.removeEventListener('mouseover', paperOver, false);
    paperButton.removeEventListener('mouseout', paperOut, false);
    scissorsButton.removeEventListener('mouseover', scissorsOver, false);
    scissorsButton.removeEventListener('mouseout', scissorsOut, false);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
        paperButton.animate(disappear, fadeTimeSlow);
        paperButton.animate(revertSize, fadeTimeDelay);
    }, 1600);
    setTimeout(() => {
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        buttonCover.style.display = 'none';
        controls.style.display= 'revert';
        controls.animate(appear, fadeTimeSlow);
    }, 4000);
    setTimeout(() => {
        controls.animate(disappear, controlFadeTime);
    }, 8000);
    setTimeout(() => {
        controls.style.display = 'none';
    }, 8600);
    console.log(playerChoice);
    return playerChoice;
})
scissorsButton.addEventListener('click', () => {
    playerChoice = 2;
    scissorsButton.animate(chooseScissors, fadeTimeSlow);
    rockButton.animate(disappear, fadeTime);
    paperButton.animate(disappear, fadeTime);  
    rockButton.removeEventListener('mouseover', rockOver, false);
    rockButton.removeEventListener('mouseout', rockOut, false);
    paperButton.removeEventListener('mouseover', paperOver, false);
    paperButton.removeEventListener('mouseout', paperOut, false);
    scissorsButton.removeEventListener('mouseover', scissorsOver, false);
    scissorsButton.removeEventListener('mouseout', scissorsOut, false);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
        scissorsButton.animate(disappear, fadeTimeSlow);
        scissorsButton.animate(revertSize, fadeTimeDelay);
    }, 1600);
    setTimeout(() => {
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        buttonCover.style.display = 'none';
        controls.style.display= 'revert';
        controls.animate(appear, fadeTimeSlow);
    }, 4000);
    setTimeout(() => {
        controls.animate(disappear, controlFadeTime);
    }, 8000);
    setTimeout(() => {
        controls.style.display = 'none';
    }, 8600);
    console.log(playerChoice);
    return playerChoice;
})
const iconGrow = [
    {transform: 'scale(1.4)'}
]
const iconShrink = [
    {transform: 'scale(1)'}
]
growTime = {
    duration: 300,
    fill: 'forwards'
}
shrinkTime = {
    duration: 500,
    fill: 'forwards'
}

rockButton.addEventListener('mouseover', rockOver);
function rockOver() {
    rockButton.animate(iconGrow, growTime);
}
rockButton.addEventListener('mouseout', rockOut);
function rockOut() {
    rockButton.animate(iconShrink, shrinkTime);
}
paperButton.addEventListener('mouseover', paperOver);
function paperOver() {
    paperButton.animate(iconGrow, growTime);
}
paperButton.addEventListener('mouseout', paperOut)
function paperOut() {
    paperButton.animate(iconShrink, shrinkTime);
}
scissorsButton.addEventListener('mouseover', scissorsOver);
function scissorsOver() {
    scissorsButton.animate(iconGrow, growTime);
}
scissorsButton.addEventListener('mouseout', scissorsOut);
function scissorsOut() {
    scissorsButton.animate(iconShrink, shrinkTime);
}

const input = {};
let i = 0;
onkeydown = onkeyup = function (event) {
    input[event.key] = event.type == 'keydown';
    if (input['Shift'] && input[' '] && i < 3 && !event.repeat && (playerChoice === 0 || playerChoice === 1 || playerChoice === 2)) {
        playerPalm.animate(palmHit, palmTime);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        controls.animate(disappear, controlFadeTime);
        controls.style.display = 'none';
        i++;
        delete input['Shift'];
    }
    else if (input['Shift'] && input[' '] && i === 3 && (playerChoice === 0 || playerChoice === 1 || playerChoice === 2)) {
        playerPalm.animate(palmHit, palmTime,);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        computerFist.animate(disappear, fadeTimeSlow);
        playerFist.animate(disappear, fadeTimeSlow);
        controls.style.display = 'none';
        getComputerChoice()
        setTimeout( () => {
            if (playerChoice === 0) {
                playerHands.appendChild(rockChoice);
                rockChoice.style.display='revert';
                rockChoice.animate(appear, fadeTimeSlow);
                playerChoice = '';
                setTimeout(() => {
                    rockChoice.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    rockChoice.style.display='none';
                    playerFist.style.display='revert'
                    playerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
            else if (playerChoice === 1) {
                playerHands.appendChild(paperChoice);
                paperChoice.style.display='revert';
                paperChoice.animate(appear, fadeTimeSlow);
                playerChoice = '';
                setTimeout(() => {
                    paperChoice.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    paperChoice.style.display='none';
                    playerFist.style.display='revert'
                    playerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
            else if (playerChoice === 2) {
                playerHands.appendChild(scissorsChoice);
                scissorsChoice.style.display='revert';
                scissorsChoice.animate(appear, fadeTimeSlow);
                playerChoice = '';
                setTimeout(() => {
                    scissorsChoice.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    scissorsChoice.style.display='none';
                    playerFist.style.display='revert'
                    playerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
        }, 2400);
        setTimeout( () => {
            if (computerChoice === 0) {
                computerHands.appendChild(rockChoiceComputer);
                rockChoiceComputer.style.display='revert'
                rockChoiceComputer.animate(appear, fadeTimeSlow);
                computerChoice = '';
                setTimeout(() => {
                    rockChoiceComputer.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    rockChoiceComputer.style.display='none';
                    computerFist.style.display='revert'
                    computerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
            else if (computerChoice === 1) {
                computerHands.appendChild(paperChoiceComputer);
                paperChoiceComputer.style.display='revert'
                paperChoiceComputer.animate(appear, fadeTimeSlow);
                computerChoice = '';
                setTimeout(() => {
                    paperChoiceComputer.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    paperChoiceComputer.style.display='none';
                    computerFist.style.display='revert'
                    computerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
            else if (computerChoice === 2) {
                computerHands.appendChild(scissorsChoiceComputer);
                scissorsChoiceComputer.style.display='revert'
                scissorsChoiceComputer.animate(appear, fadeTimeSlow);
                computerChoice = '';
                setTimeout(() => {
                    scissorsChoiceComputer.animate(disappear, fadeTimeSlow);
                }, 2400);
                setTimeout(() => {
                    scissorsChoiceComputer.style.display='none';
                    computerFist.style.display='revert'
                    computerFist.animate(appear, fadeTimeSlow);
                }, 5600);
            }
        }, 2400);
        setTimeout( () => {playRound()}, 1200);
        return i = 0;
    }
}
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}   

function playRound() {
    buttonShow();
    if (computerChoice === playerChoice) {
    }
    else if (computerChoice === 0 && playerChoice === 2
    || computerChoice === 1 && playerChoice === 0
    || computerChoice === 2 && playerChoice === 1) {
        computerScore = ++computerScore;
        if (computerScore === 1) {
            opponentZero.animate(disappear, fadeTime);
            setTimeout(() => {
                opponentZero.replaceWith(computerOne);
                computerOne.animate(appear, fadeTime);
            }, 600);
        }
        else if (computerScore === 2) {
            computerOne.animate(disappear, fadeTime);
            setTimeout(() => {
                computerOne.replaceWith(computerTwo);
                computerTwo.animate(appear, fadeTime);
            }, 600);
        }
        else if (computerScore === 3) {
            computerTwo.animate(disappear, fadeTime);
            setTimeout(() => {
                computerTwo.replaceWith(computerThree);
                computerThree.animate(appear, fadeTime);
            }, 600);
        }
        else if (computerScore === 4) {
            computerThree.animate(disappear, fadeTime);
            setTimeout(() => {
                computerThree.replaceWith(computerFour);
                computerFour.animate(appear, fadeTime);
            }, 600);
        }
        else if (computerScore === 5) {
            computerFour.animate(disappear, fadeTime);
            setTimeout(() => {
                computerFour.replaceWith(computerFive);
                computerFive.animate(appear, fadeTime);
            }, 600);
            setTimeout(() => {
                gameArea.animate(disappear, fadeTimeSlow);
                bottomHands.animate(disappear, fadeTimeSlow);
            }, 1200);
            setTimeout(() => {
                choices.appendChild(defeat);
                defeat.animate(appear, fadeTimeSlow);
            }, 2600);
        }
    }
    else {
        playerScore = ++playerScore;
        if (playerScore === 1) {
            playerZero.animate(disappear, fadeTime);
            setTimeout(() => {
                playerZero.replaceWith(playerOne);
                playerOne.animate(appear, fadeTime);
            }, 600);
        }
        else if(playerScore === 2) {
            playerOne.animate(disappear, fadeTime);
            setTimeout(() => {
                playerOne.replaceWith(playerTwo);
                playerTwo.animate(appear, fadeTime);
            }, 600);
        }
        else if(playerScore === 3) {
            playerTwo.animate(disappear, fadeTime);
            setTimeout(() => {
                playerTwo.replaceWith(playerThree);
                playerThree.animate(appear, fadeTime);
            }, 600);
        }
        else if(playerScore === 4) {
            playerThree.animate(disappear, fadeTime);
            setTimeout(() => {
                playerThree.replaceWith(playerFour);
                playerFour.animate(appear, fadeTime);
            }, 600);
        }
        else if(playerScore === 5) {
            playerFour.animate(disappear, fadeTime);
            setTimeout(() => {
                playerFour.replaceWith(playerFive);
                playerFive.animate(appear, fadeTime);
            }, 600);
            setTimeout(() => {
                gameArea.animate(disappear, fadeTimeSlow);
                bottomHands.animate(disappear, fadeTimeSlow);
            }, 1200);
            setTimeout(() => {      
            choices.appendChild(victory);
            victory.animate(appear, fadeTimeSlow);
            }, 2600);
        }
}
}
const raiseHand = [
    {transform: 'rotate(-18deg) translateY(-44px)'}
]
const raiseHandMirror = [
    {transform: 'rotate(12deg) translateY(-50px)'},
]
const raiseHandTime = {
    duration: 800,
    fill: 'forwards',
    iterations: 1,
}
const hitPalm = [
    {transform: 'rotate(-11deg'},
]
const hitPalmMirror = [
    {transform: 'rotate(-10deg'},
]
const fistDownTime = {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-out'
}
const fistDownTimeFast = {
    duration: 100,
    fill: 'forwards',
    easing: 'ease-in'
}
const palmHit = [
    { transform: 'rotate(0)'},
    {transform: 'rotate(4deg)', easing: 'ease-out', offset: '.17'},
    {transform: 'rotate(0.6deg'},
    { transform: 'rotate(0)'},
];
const palmHitMirror = [
    { transform: 'rotate(-6deg)'},
    {transform: 'rotate(-14deg', easing: 'ease-out', offset: '.17'},
    {transform: 'rotate(-8.4deg'},
    { transform: 'rotate(-10deg)'},
];
const palmTime = {
    duration: 800,
    delay: 100,
}
window.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
        playerFist.animate(raiseHand, raiseHandTime);
        computerFist.animate(raiseHandMirror, raiseHandTime);
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key == 'Shift') {
        playerFist.animate(hitPalm, fistDownTime);
        computerFist.animate(hitPalmMirror, fistDownTime);
    }
})

