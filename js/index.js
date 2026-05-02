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

    if (score.getScore() % 10 == 0){
            speed += 1;
    }
}, 1000);

function createEnergyBall(){
    const obstacle = new EnergyBall(speed);

    energyBalls.push(obstacle);

    if (energyBalls.length >= 10){
        energyBalls.splice(1, 1);
    }
    
}

function gameLoop(){
    for(const energyBall of energyBalls){

        energyBall.update();

        if (checkCollision(goku, energyBall)){
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

function checkCollision(persona, obstacle) {
    const p = persona.element.getBoundingClientRect();
    const o = obstacle.element.getBoundingClientRect();

    const personaPadding = 20; 
    const obstaclePadding = 10; 

    const pBox = {
        left: p.left + personaPadding + 10,
        right: p.right - personaPadding,
        top: p.top,
        bottom: p.bottom
    };

    const oBox = {
        left: o.left,
        right: o.right - obstaclePadding,
        top: o.top + obstaclePadding,
        bottom: o.bottom - obstaclePadding
    };

    return !(
        pBox.right < oBox.left || 
        pBox.left > oBox.right || 
        pBox.bottom < oBox.top || 
        pBox.top > oBox.bottom
    );
}

const loop = setInterval(createEnergyBall, 2000);
gameLoop();
