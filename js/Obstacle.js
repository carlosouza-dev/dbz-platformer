class Obstacle {
    constructor(imagePath, cssClass) {
    this.element = document.createElement('div');
    this.element.classList.add(cssClass);
    
    this.element.style.backgroundImage = `url('${imagePath}')`;
    
    this.x = window.innerWidth;
    this.y = 20;
    
    document.querySelector('.game-background').appendChild(this.element);
    }

    draw() {
        this.element.style.left = this.x + "px";
        this.element.style.bottom = this.y + "px";
    }

    destroy() {
        this.element.remove();
    }
}