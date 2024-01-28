const computerPalm = document.querySelector('#computer-palm');
const computerThumb = document.querySelector('#computer-thumb');
const computerFist = document.querySelector('#computer-fist');
const playerPalm = document.querySelector('#player-palm');
const playerFist = document.querySelector('#player-fist');
const scoreBoard = document.querySelector('.score-board');
const choices = document.querySelector('.choices');
const addChoices = document.querySelector('#test-choices');
const buttonCover = document.createElement('div');
buttonCover.setAttribute('id', 'cover');
let computerChoice;
let playerScore;
let computerScore;
let playerChoice = '';


/* needs to be inside function instead of button, so I can call each round */
addChoices.onclick = () => {
    rockButton.style.display = 'revert';
    paperButton.style.display = 'revert';
    scissorsButton.style.display = 'revert';
    rockButton.addEventListener('mouseover', rockOver);
    rockButton.addEventListener('mouseout', rockOut);
    paperButton.addEventListener('mouseover', paperOver);
    paperButton.addEventListener('mouseout', paperOut);
    scissorsButton.addEventListener('mouseover', scissorsOver);
    scissorsButton.addEventListener('mouseout', scissorsOut);
    rockButton.animate(appear, fadeTime);
    paperButton.animate(appear, fadeTime);
    scissorsButton.animate(appear, fadeTime);
} 

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
    duration: 600,
    fill: 'forwards'
}
const fadeTimeSlow = {
    delay: 600,
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

const paperButton = document.createElement('img');
paperButton.setAttribute('id', 'paper-button');
paperButton.src = ('./img/paper.svg');
paperButton.style.opacity=0;

const scissorsButton = document.createElement('img');
scissorsButton.setAttribute('id', 'scissors-button');
scissorsButton.src = ('./img/scissors.svg');
scissorsButton.style.opacity=0;

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
        setTimeout( () => {
        controls.style.display = 'none';
        }, 600);
        i++;
        delete input['Shift'];
    }
    else if (input['Shift'] && input[' '] && i === 3 && (playerChoice === 0 || playerChoice === 1 || playerChoice === 2)) {
        playerPalm.animate(palmHit, palmTime,);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        setTimeout( () => {playRound()}, 400);
        playerChoice = '';
        return i = 0;
    }
}
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}   
function playRound() {
    getComputerChoice();
    if (computerChoice === playerChoice) {
        alert('It\'s a tie! We both picked ' + playerChoice + '!');
    }
    else if (computerChoice === 0 && playerChoice === 2
    || computerChoice === 1 && playerChoice === 0
    || computerChoice === 2 && playerChoice === 1) {
        computerScore = ++computerScore;
        alert('You lose this round :(');
    }
    else {
        playerScore = ++playerScore;
        console.log(playerScore)
        alert('You win this round :)');
    }
    console.log(computerScore + ' ' + playerScore);
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

