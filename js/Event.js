class Event {
    static DEATH_EVENT = "Death Event";
    static LEVEL_UP_EVENT = "Level Up Event"

    #Observers;

    constructor(type) {
        this.type = type;
        this.#Observers = [];
    }

    addObserver(observer) {
        this.#Observers.push(observer);
    }

    addObservers(observers) {
        this.#Observers.push(...observers);
    }

    notifyObservers(){
        this.#Observers.forEach(observer => observer.update(this));
    }
}