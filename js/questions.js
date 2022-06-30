(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];/* Traigo el array*/
    console.log(titleQuestions) /* Ejecutar variable*/

    titleQuestions.forEach(question =>{/* Listo el array uno por uno los elementos */
        question.addEventListener('click', ()=>{/* Cuando clickee */
            let height = 0;
            let answer = question.nextElementSibling; /* El parrafo es el hermano del h3 que contiene el titulo */
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add'); /* Agrega la animación del CSS al padding igual que en el question */
            question.children[0].classList.toggle('questions__arrow--rotate');/* Lo que se hace es llamar a los hijos de  questions__title que no es otra cosa más que questions.children[0] se indica el elemento 0 porque este hace referencia al span, y dentro de este quiero listar las clases y agregarle la clase questions__arrow--rotate para que la flechita pueda girar*/

            if(answer.clientHeight === 0){ /* Si el height===0 es porque la respuesta está contraída */
                height = answer.scrollHeight;/* con scrollHeight consigo mostrar el alto minimo para mostrar el elemento */
            }

            answer.style.height = `${height}px`; /* mostrará el alto completo si estaba contraída, de no estarlo entonces mostrara el height =0 que se establece al inicio */
        });
    });
})();