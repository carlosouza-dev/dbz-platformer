class Layer{
    constructor(selector){
        this.element = document.querySelector(selector);
    }

    update(event){
        if (event.type = Event.DEATH_EVENT){
            this.element.classList.add('pause');
        }
    }
}