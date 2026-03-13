const persona = document.querySelector('.persona');

document.addEventListener('keydown', jump);

function jump(){
    persona.src = "assets/images/goku-jumping.png";
    persona.classList.add('jump');

    setTimeout(() => {
        persona.classList.remove('jump');
        persona.src = "assets/images/goku-running.gif"
    }, 500);
}