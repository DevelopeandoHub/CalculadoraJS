window.addEventListener('load', () => {
    /* Busco los botones y el display */
    const keypadButtons = document.getElementsByClassName('keypad-button'); /* no usar querySelector porque devuelve un NodeList en vez de un HTML Collection */
    const display = document.querySelector('.calculator-display'); /* usar querySelector para que nos de el elemento solo */
    
    /* Convierto la HTMLCollection a Array para poder iterar */
    const keypadButtonsArray = Array.from(keypadButtons);
    
    /* Agrego un evento de click a cada boton */
    keypadButtonsArray.forEach( (button) => {

        button.addEventListener('click', () => {
            /* Llamo a una funcion cada vez que ocurra un click */
            calcular(button, display);
        });

    });
});

function calcular(button, display) {
    /* funcion que decide que hacer */
    if(button.innerHTML == 'C') {
        display.innerHTML = 0;
    } else {
        display.innerHTML = '';
        display.innerHTML = display.innerHTML + button.innerHTML;
    } 
}