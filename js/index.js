let explosionAudio = new Audio('assets/audios/energy-collision.mp3');
const goku = new Goku();

const energyBall = document.querySelector('.energy-ball');
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

