class EnergyBall extends Obstacle {

    #speed;
    #falseBehavior;

    constructor(speed) {
        super('assets/images/energy-ball.gif', 'energy-ball');

        this.y = this.#randomHeight();

        this.#speed = speed;
        this.#falseBehavior = this.#randomBehavior();
    }

    #randomHeight(){
        let n = Math.random();

        if (n > 0.5){
            return 100;
        } else {
             return 20;
        }
    }

    #randomBehavior() {
        let n = Math.random();

        if (n > 0.5){
            return true;
        } else {
             return false;
        }
    }

    update(){
        this.x -= this.#speed;

        // if (this.#falseBehavior && this.x <= window.innerWidth/2){
        //     if (this.y > 20) {
        //         this.y = 20;
        //     } else {
        //         this.y = 100;
        //     }
        // }
        this.draw();
    }
}