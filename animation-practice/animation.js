const computerPalm = document.querySelector('#computer-palm');
const computerThumb = document.querySelector('#computer-thumb');
const computerFist = document.querySelector('#computer-fist');
const playerPalm = document.querySelector('#player-palm');
const playerFist = document.querySelector('#player-fist');
const scoreBoard = document.querySelector('.score-board')

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
        playerPalm.animate(palmHit, palmTime,);
        computerPalm.animate(palmHitMirror, palmTime);
        computerThumb.animate(palmHitMirror, palmTime);
        playerFist.animate(hitPalm, fistDownTimeFast);
        computerFist.animate(hitPalmMirror, fistDownTimeFast);
        i++;
        delete input['Shift'];
    }
    else if (input['Shift'] && input[' '] && i === 3) {
        console.log('hi');
        return i = 0;
    }
    
}

const raiseHand = [
    {transform: 'rotate(-18deg) translateY(-44px)'}
]
const raiseHandMirror = [
    {transform: 'rotate(12deg) translateY(-40px)'},
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

