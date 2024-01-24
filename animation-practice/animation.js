const img = document.querySelector('#wantToSpin');

const handHit = [
    { transform: 'rotate(0turn)'},
    {transform: 'rotate(.03turn', easing: 'ease-out', offset: '.17'},
    {transform: 'rotate(-.01turn'},
    { transform: 'rotate(0turn)'},
];
const spinTime = {
    duration: 800
}

window.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
    img.animate(handHit, spinTime);
    };
});