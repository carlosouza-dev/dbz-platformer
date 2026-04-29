let explosionAudio = new Audio('assets/audios/energy-collision.mp3');
let audio = document.querySelector(".audio");
audio.volume = 0.05;

const goku = new Goku();

let energyBall = new EnergyBall();
const persona = document.querySelector('.persona');
const score = Score.instance();

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space'){
        goku.jump();
    }
});

const loopScore = setInterval(() => {
    if (goku.isDead()){
        clearInterval(loopScore);
    }
    score.increase();
}, 1000);

const loopObstacle = setInterval(() => {
    if (goku.isDead()){
        clearInterval(loopObstacle)
    }
    energyBall.destroy();
    energyBall = new EnergyBall();
}, 2000)

const loopGame = setInterval(() => {
    energyBall.update();
    const personaPosition = Number(window.getComputedStyle(persona).bottom.replace("px", ""));

    if (energyBall.x < 70 && energyBall.x > 0 && personaPosition < 60){
        energyBall.destroy();
        goku.dead();

        audio.pause();

        explosionAudio.play();

        clearInterval(loopGame); 
    }
}, 10)

