const goku = new Goku();

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space'){
        goku.jump();
    }
});