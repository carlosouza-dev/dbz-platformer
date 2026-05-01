let explosionAudio = new Audio('assets/audios/energy-collision.mp3');
const audio = document.querySelector('.audio');
let speed = 10;

const goku = new Goku();

let energyBalls = [];
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

function createEnergyBall(){
    const obstacle = new EnergyBall(speed);

    speed += 2;

    energyBalls.push(obstacle);
    console.log(energyBalls.length);

    if (energyBalls.length >= 10){
        energyBalls.splice(1, 1);
    }
    
}

function gameLoop(){
    for(const energyBall of energyBalls){

        energyBall.update();

        const personaPosition = Number(window.getComputedStyle(persona).bottom.replace("px", ""));

        if (energyBall.x < 70 && energyBall.x > 0 && energyBall.y < 100 && personaPosition < 60){
            energyBalls.forEach((energyBall) => energyBall.destroy());
            goku.dead();

            audio.pause();

            explosionAudio.play();
            clearInterval(loop);
        } 
    }

    if (!goku.isDead()){
        requestAnimationFrame(gameLoop)
    }
}

const loop = setInterval(createEnergyBall, 2000);
gameLoop();
