const persona = document.querySelector('.persona');
const energyBall = document.querySelector('.energy-ball');

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

    console.log(personaPosition);

    if (energyBallPosition < 70 && energyBallPosition > 0 && personaPosition < 60){
        energyBall.style.animation = 'none';
        energyBall.style.left = "-50px";

        persona.src = "assets/images/goku-dead.png";
        persona.style.marginBottom = "-10px";

        clearInterval(loop); 
    }
}, 10)