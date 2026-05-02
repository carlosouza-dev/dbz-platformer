class EnergyBall extends Obstacle {

    #speed;
    #heights = [100, 10];
    #falseBehavior;
    #changed;

    constructor(speed) {
        super('assets/images/energy-ball.gif', 'energy-ball');

        const initialIndex = Math.random() > 0.5 ? 0 : 1;
        this.#falseBehavior = Math.random() > 0.5;

        this.#changed = false;
        this.#speed = speed;

        this.y = this.#heights[initialIndex];

        this.update();
    }

    update(){
        this.x -= this.#speed;

        if (this.#falseBehavior && !this.#changed && this.x <= (window.innerWidth / 2) + 100){
            this.#changed = true;

            if (this.y === this.#heights[0]) {
                this.y = this.#heights[1];
            } else {
                this.y = this.#heights[0];
            }
        }

        this.draw();
    }
}