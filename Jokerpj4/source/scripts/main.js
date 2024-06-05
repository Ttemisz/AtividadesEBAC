document.addEventListener('DOMContentLoaded',function(){
    const questions = document.querySelectorAll('[data-faq-questions]' );

    for (let i=0; i< questions.length; i++){
        questions[i].addEventListener('click',abreOuFechaResposta)
    }


})

function abreOuFechaResposta(elemento){
    const classe ='faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;

    elementopai.classList.toggle(classe)
}

function abrirlinkdoyoutube(){
    window.open("https://www.youtube.com/watch?v=zAGVQLHvwOY", "_blank");
}