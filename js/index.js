let explosionAudio = new Audio('assets/audios/energy-collision.mp3');
const goku = new Goku();

const energyBall = document.querySelector('.energy-ball');
const persona = document.querySelector('.persona');
const score = document.querySelector('.score');

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space'){
        goku.jump();
    }
});

let contSeg = 0;

const loopScore = setInterval(() => {
    if (goku.isDead()){
        clearInterval(loopScore);
    }
    contSeg += 1;
    score.textContent = String(contSeg);
}, 1000);

const loopGame = setInterval(() => {
    const energyBallPosition = energyBall.offsetLeft;
    const personaPosition = Number(window.getComputedStyle(persona).bottom.replace("px", ""));

    if (energyBallPosition < 70 && energyBallPosition > 0 && personaPosition < 60){
        goku.dead();

        explosionAudio.play();
        energyBall.style.animation = 'none';
        energyBall.style.left = "-50px";


        clearInterval(loopGame); 

    }
}, 10)

