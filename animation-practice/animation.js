const img = document.querySelector('#player-palm');
const imgRight = document.querySelector('#computer-palm');
const playerFist = document.querySelector('#player-fist');
const input = {};
let i = 0;
onkeydown = onkeyup = function (event) {
    input[event.key] = event.type == 'keydown';
    if (input['Enter'] && input[' '] && i < 3) {
        img.animate(handHit, palmTime,);
        imgRight.animate(handHitMirror, palmTime);
        playerFist.animate(hitHand, fistDownFast);
        i++
    }
    else if (input['Enter'] && input[' '] && i === 3) {
        console.log('hi');
        return i = 0;
    }
    }


const raiseHand = [
    {transform: 'rotate(-.08turn)'},
]

const hitHand = [
    {transform: 'rotate(-.03turn'},
]

const handHit = [
    { transform: 'rotate(0turn)'},
    {transform: 'rotate(.03turn', easing: 'ease-out', offset: '.17'},
    {transform: 'rotate(-.01turn'},
    { transform: 'rotate(0turn)'},
];

const handHitMirror = [
    { transform: 'rotate(0turn)'},
    {transform: 'rotate(-.03turn', easing: 'ease-out', offset: '.17'},
    {transform: 'rotate(.01turn'},
    { transform: 'rotate(0turn)'},
];
const palmTime = {
    duration: 800,
    delay: 100,
}

const fistUp = {
    duration: 400,
    fill: 'forwards',
}

const fistDown = {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-out'
}

const fistDownFast = {
    duration: 100,
    fill: 'forwards',
    easing: 'ease-in'
}

window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        playerFist.animate(raiseHand, fistUp);
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        playerFist.animate(hitHand, fistDown);
    }
})

