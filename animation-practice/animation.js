const computerPalm = document.querySelector('#computer-palm');
const computerThumb = document.querySelector('#computer-thumb');
const computerFist = document.querySelector('#computer-fist');
const playerPalm = document.querySelector('#player-palm');
const playerFist = document.querySelector('#player-fist');
const scoreBoard = document.querySelector('.score-board');
const choices = document.querySelector('.choices');
const addChoices = document.querySelector('#test-choices');
const buttonCover = document.createElement('div');
buttonCover.setAttribute('id', 'cover')


addChoices.onclick = () => {
    rockButton.style.display = 'revert';
    paperButton.style.display = 'revert';
    scissorsButton.style.display = 'revert';
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

/* for tmr, trying to get this to increase in size, then fade out I want a slow (1attime) fade in 
at game start, then each round fade in all together*/
const disappearChoice = [
    {transform: 'scale(3)'},
    
]

const fadeTime = {
    duration: 1400,
    fill: 'forwards'
}
const fadeTimeDelay = {
    duration: 1400,
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

rockButton.addEventListener('mouseover', () => {
    rockButton.animate(iconGrow, growTime);
})
rockButton.addEventListener('mouseout', () => {
    rockButton.animate(iconShrink, shrinkTime);
})
paperButton.addEventListener('mouseover', () => {
    paperButton.animate(iconGrow, growTime);
})
paperButton.addEventListener('mouseout', () => {
    paperButton.animate(iconShrink, shrinkTime);
})
scissorsButton.addEventListener('mouseover', () => {
    scissorsButton.animate(iconGrow, growTime);
})
scissorsButton.addEventListener('mouseout', () => {
    scissorsButton.animate(iconShrink, shrinkTime);
})

rockButton.addEventListener('click', () => {
    playerChoice = 0;
    rockButton.animate(disappear, fadeTime);
    paperButton.animate(disappear, fadeTime);
    scissorsButton.animate(disappear, fadeTime);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = 'none';
    buttonCover.style.display = 'none';
    }, 1400);
    console.log(playerChoice);
    return playerChoice;
})
paperButton.addEventListener('click', () => {
    playerChoice = 1;
    rockButton.animate(disappear, fadeTime);
    paperButton.animate(disappear, fadeTime);
    scissorsButton.animate(disappear, fadeTime);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = 'none';
    buttonCover.style.display = 'none'
    }, 1400);
    console.log(playerChoice);
    return playerChoice;
})
scissorsButton.addEventListener('click', () => {
    playerChoice = 2;
    rockButton.animate(disappear, fadeTime);
    paperButton.animate(disappear, fadeTime);
    scissorsButton.animate(disappear, fadeTime);
    choices.appendChild(buttonCover);
    buttonCover.style.display = 'revert';
    setTimeout(() => {
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = 'none';
    buttonCover.style.display = 'none'
    }, 1400);
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
   
function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3);
    computerChoice = computerInt === 0 ? 'Rock' 
    : computerInt === 1 ? 'Paper'
    : computerInt === 2 ? 'Scissors'
    : console.log('Error');
    console.log(computerChoice);
    return computerChoice;
}

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
const input = {};
let i = 0;
onkeydown = onkeyup = function (event) {
    input[event.key] = event.type == 'keydown';
    if (input['Shift'] && input[' '] && i < 3 && !event.repeat) {
        playerPalm.animate(palmHit, palmTime);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        i++;
        delete input['Shift'];
    }
    else if (input['Shift'] && input[' '] && i === 3) {
        playerPalm.animate(palmHit, palmTime,);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        console.log('hi');
        return i = 0;
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

