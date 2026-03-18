class Persona {

    #isDead;

    constructor(selector){
        this.element = document.querySelector(selector);

        this.#isDead = false;
    }

    isDead() {
        return this.#isDead
    }

    dead() {
        this.#isDead = true;
    }
}