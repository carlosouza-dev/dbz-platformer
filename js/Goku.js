class Goku extends Persona {

    #runningImgPath;
    #jumpingImgPath;
    #deadingImgPath;
    #screamAudio;
    #jumpAudio;

    constructor() {
        super('.persona');

        this.#runningImgPath = './assets/images/goku-running.gif';
        this.#jumpingImgPath = './assets/images/goku-jumping.png';
        this.#deadingImgPath = './assets/images/goku-dead.png';

        this.#screamAudio = new Audio('./assets/audios/goku-scream.mp3');
        this.#jumpAudio = new Audio('./assets/audios/goku-jump.mp3');

        this.element.src = this.#runningImgPath;

    }

    jump() {
        if (super.isDead()) return;

        this.element.src = this.#jumpingImgPath;
        this.#jumpAudio.play();
        this.y = 90;
        this.draw();

        setTimeout(() => {
            this.y = 0;
            this.draw();
            if (super.isDead()) return;
            this.element.src = "assets/images/goku-running.gif";
         }, 400);
    }

    dead() {
        super.dead();

        this.element.src = this.#deadingImgPath
        this.element.style.marginBottom = "-10px"; 
        this.#screamAudio.play();

        
    }

}