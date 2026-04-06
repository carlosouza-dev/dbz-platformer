class Layer{
    constructor(selector){
        this.element = document.querySelector(selector);
    }

    update(){
        this.element.classList.add('pause');
    }
}