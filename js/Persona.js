class Persona {

    #isDead;

    constructor(selector){
        this.element = document.querySelector(selector);
        this.positionX = 0;
        this.positionY = 0;

        this.#initializePosition();

        this.#isDead = false;

        this.observers = []
    }

    #initializePosition() {
        this.element.style.rigth = this.positionX;
        this.element.style.bottom = this.positionY;
    }

    isDead() {
        return this.#isDead
    }

    dead() {
        this.#isDead = true;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    addObserverList(observerList){
        this.observers.push(...observerList);
    }

    notifyObservers(){
        this.observers.forEach((observer) => observer.update());
    }
}