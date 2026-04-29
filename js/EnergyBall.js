class EnergyBall extends Obstacle {

    constructor() {
        super('assets/images/energy-ball.gif', 'energy-ball');

        this.velocidade = 5;
    }

    update(){
        this.x -= this.velocidade;
        this.draw();
    }
}