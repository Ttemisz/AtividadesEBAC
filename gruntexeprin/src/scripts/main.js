document.addEventListener('DOMContentLoaded', function() {
    
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const resultado = document.getElementById('Resultado');
    const button = document.querySelector('button');

    button.addEventListener('click', function(event) {
        
        event.preventDefault(); 

        const valor1 = parseFloat(input1.value);
        const valor2 = parseFloat(input2.value);
        const multiplicacao = valor1 * valor2;
        resultado.textContent = multiplicacao;
        
    });
});
