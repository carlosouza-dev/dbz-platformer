class GameOverScreen {

    #container;
    #score;
    #restartBtn;

    constructor(){
        this.#container = document.querySelector(".game-over");
        this.#score = document.querySelector("#score-final");
        this.#restartBtn = document.querySelector(".restart-btn");

        this.#restartBtn.addEventListener("click", () => {
            location.reload();
        })
    }

    update(event){
        if(event.type == Event.DEATH_EVENT){
            let scoreFinal = Score.instance().getScore();
            this.#score.innerText = `${scoreFinal}`;
            setTimeout(()=> {
                this.#container.style.display = "flex";
            }, 200);
        }
    }


}