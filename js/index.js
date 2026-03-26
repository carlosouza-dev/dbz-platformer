const goku = new Goku();
const energyBall = document.querySelector('.energy-ball');
const scenario = document.querySelector('.game-board')
const persona = document.querySelector('.persona');

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space'){
        goku.jump();
    }
});

const loop = setInterval(() => {
    const energyBallPosition = energyBall.offsetLeft;
    const personaPosition = Number(window.getComputedStyle(persona).bottom.replace("px", ""));

    if (energyBallPosition < 70 && energyBallPosition > 0 && personaPosition < 60){
        goku.dead();

        energyBall.style.animation = 'none';
        energyBall.style.left = "-50px";

        scenario.classList.add('pause');

        clearInterval(loop); 
    }
}, 10)

