const img = document.querySelector('#player-palm');
const imgRight = document.querySelector('#computer-palm');
const playerFist = document.querySelector('#player-fist');
const raiseHand = [
    {transform: 'rotate(0)'},
    {transform: 'rotate(-.08turn)', offset: '.70'},
    {transform: 'rotate(0'}
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
}

const fistTime = {
    duration: 550,
}

window.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        playerFist.animate(raiseHand, fistTime);
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
    img.animate(handHit, palmTime,);
    imgRight.animate(handHitMirror, palmTime);
    
    };

});