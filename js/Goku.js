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

        this.element.src = "assets/images/goku-jumping.png";
        this.element.classList.add('jump');
        this.#jumpAudio.play();

        setTimeout(() => {
            this.element.classList.remove('jump');
            this.element.src = "assets/images/goku-running.gif";
        }, 600);
    }
}