class Persona {

    #isDead;
    #DeathEvent;
    #LevelUpEvent;

    constructor(){
        this.element = document.createElement('img');
        this.element.classList.add('persona');
        this.x = 50;
        this.y = 0;

        this.#DeathEvent = new DeathEvent();
        this.#LevelUpEvent = new LevelUpEvent();

        this.#isDead = false;

        this.#initializeObservers();
        this.draw();

        document.querySelector('.game-background').appendChild(this.element);
    }


    #initializeObservers(){
        this.#DeathEvent.addObservers([
            new Layer('.clouds'),
            new Layer('.mountains-far-away'),
            new Layer('.mountains-closer'),
            new GameOverScreen(),
            Score.instance()
        ]);
    }

    isDead() {
        return this.#isDead
    }

    dead() {
        this.#isDead = true;
        this.#DeathEvent.notifyObservers();
    }

    draw() {
        this.element.style.left = this.x + "px";
        this.element.style.bottom = this.y + "px";
    }
}