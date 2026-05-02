class EnergyBall extends Obstacle {

    #speed;

    constructor(speed) {
        super('assets/images/energy-ball.gif', 'energy-ball');

        this.y = this.#randomHeight();

        this.#speed = speed;
    }

    #randomHeight(){
        let n = Math.random();

        if (n > 0.5){
            return 100;
        } else {
             return 10;
        }
    }

    update(){
        this.x -= this.#speed;

        this.draw();
    }
}