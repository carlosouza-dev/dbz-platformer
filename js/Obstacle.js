class Obstacle {

    #removed;

    constructor(imagePath, cssClass) {
    this.element = document.createElement('div');
    this.element.classList.add(cssClass);
    
    this.element.style.backgroundImage = `url('${imagePath}')`;
    
    this.x = window.innerWidth;
    this.y = 0;
    
    this.#removed = false;
    
    document.querySelector('.game-background').appendChild(this.element);
    }

    draw() {
        this.element.style.left = this.x + "px";
        this.element.style.bottom = this.y + "px";

        if (this.x < -100 && !this.#removed) {
            this.destroy();
            this.#removed = true;
        }
    }

    destroy() {
        this.element.remove();
    }
}