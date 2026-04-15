class Score {

    static #instance;
    #score;
    #element;
    #blockIncrease;

    constructor() {
        if (Score.#instance){
            return Score.#instance;
        }

        this.#element = document.querySelector(".score");
        this.#score = 0;
        this.#element.innerText = this.#score;
        this.#blockIncrease = false;

        Score.#instance = this;
    }

    static instance() {
        if (!Score.#instance){
            Score.#instance = new Score();
        }
        return Score.#instance;
    }

    increase(){
        if(!this.#blockIncrease){
            this.#score++;
            this.#element.innerText = this.#score
        }
    }

    getScore(){
        return this.#score
    }

    update(event){
        if(event.type = Event.DEATH_EVENT){
            this.#blockIncrease = true;
        }
    }
}