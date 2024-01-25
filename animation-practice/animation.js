const img = document.querySelector('#player-palm');
const imgRight = document.querySelector('#computer-palm');
const playerFist = document.querySelector('#player-fist');

const input = {};
onkeydown = onkeyup = function (event) {
    input[event.key] = event.type == 'keydown';
    if (input['Enter'] && input[' ']) {
        img.animate(handHit, palmTime,);
        imgRight.animate(handHitMirror, palmTime);
    
    }
}



const raiseHand = [
    {transform: 'rotate(-.08turn)'},
]

const hitHand = [
    {transform: 'rotate(-.03turn'}
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
    delay: 200,
}

const fistUp = {
    duration: 550,
    fill: 'forwards',
}

const fistDown = {
    duration: 200,
    fill: 'forwards',
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

window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && keyLog[' '] === ' ') {
    img.animate(handHit, palmTime,);
    imgRight.animate(handHitMirror, palmTime);
    
    };

});