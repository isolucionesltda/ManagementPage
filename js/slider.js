(function(){
    /* (function (){
        Aquí, dentro de ésta función es donde se trabaja, ya que function() se llama así misma con el fin de proteger el código y no mezclarlos con los otros archivos js que se van creando, para ello también se referencia en el index una etiqueta que llama a este script: <script src="./js/slider.js"></script>
    }) (); */
    
    const sliders = [...document.querySelectorAll('.testimony__body')]; /* Con esta constante se pueden llamar a todos los sliders que hay dentro del index, esto debido a que todos tienen la class = "testimony__body", también se ponen los [...document.query] con el fin de convertir lo que estoy seleccionando en un Array*/
    const buttonNext = document.querySelector('#next'); /* Aquí por ejemplo no se pone [...] por lo que selecciona un nodo del elemento llamado con identificador "next" */
    const buttonBefore = document.querySelector('#before');/* Ya con todo esto consigo tener variables con las que puedo interactuar y tratar como yo quiera*/
    let value;   /* se crea una variable con el nombre value */

    buttonNext.addEventListener('click', ()=>{/* Cuando alguien da click al elemento que referencia la variable buttonNext, el programa hace algo, para este caso llama a la función con el valor de 1 para que pase a la siguiente */
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{ /* Aquí como quiere retroceder le quita uno para que el valor cambie y se regrese */
        changePosition(-1);
    });

    const changePosition = (add)=>{ /* Dependiendo del valor que reciba add, avanzará o retrocederá */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; /* traeme la id que tiene el elemento identificado como testimony__body--show*/
        value = Number(currentTestimony); /* Se instancia value con el valor de currentTestimony*/
        value+= add; /* dependiendo del valor que recibe add va a restar o sumar*/


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show'); /* Antes de poder decirle a la clase que elemento mostrar toca quitarle el elemento que tiene antes de empezar osea la id 1*/
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1; 
        }

        sliders[value-1].classList.add('testimony__body--show');/* estoy diciendole a la clase que valor mostrar en este caso será value-1*/

    }

})();