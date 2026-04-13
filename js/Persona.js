class Persona {

    #isDead;
    #DeathEvent;
    #LevelUpEvent;

    constructor(selector){
        this.element = document.querySelector(selector);
        this.positionX = 0;
        this.positionY = 0;

        this.#DeathEvent = new DeathEvent();
        this.#LevelUpEvent = new LevelUpEvent();

        this.#isDead = false;

        this.#initializePosition();
        this.#initializeObservers();
    }

    #initializePosition() {
        this.element.style.rigth = this.positionX;
        this.element.style.bottom = this.positionY;
    }

    #initializeObservers(){
        this.#DeathEvent.addObservers([
            new Layer('.clouds'),
            new Layer('.mountains-far-away'),
            new Layer('.mountains-closer')
        ]);
    }

    isDead() {
        return this.#isDead
    }

    dead() {
        this.#isDead = true;
        this.#DeathEvent.notifyObservers();
    }
}