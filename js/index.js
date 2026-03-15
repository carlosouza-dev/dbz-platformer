const persona = document.querySelector('.persona');
const energyBall = document.querySelector('.energy-ball');
const scenario = document.querySelector('.game-board')
let explosionAudio = new Audio('/assets/audio/explosion.mp3');
let screamAudio = new Audio('../assets/audio/scream.mp3');

document.addEventListener('keydown', jump);

function jump(){
    persona.src = "assets/images/goku-jumping.png";
    persona.classList.add('jump');

    setTimeout(() => {
        persona.classList.remove('jump');
        persona.src = "assets/images/goku-running.gif";
    }, 600);
}

const loop = setInterval(() => {
    const energyBallPosition = energyBall.offsetLeft;
    const personaPosition = Number(window.getComputedStyle(persona).bottom.replace("px", ""));

    if (energyBallPosition < 70 && energyBallPosition > 0 && personaPosition < 60){
        explosionAudio.play();
        screamAudio.play();

        energyBall.style.animation = 'none';
        energyBall.style.left = "-50px";

        persona.src = "assets/images/goku-dead.png";
        persona.style.marginBottom = "-10px";

        scenario.classList.add('pause');

        clearInterval(loop); 
    }
}, 10)