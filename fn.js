function verificarFibonacci() {
    const numeroInput = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        return;
    }

    let a = 0;
    let b = 1;
    
    // Verifica se o número é igual a 0 ou 1
    if (numero === a || numero === b) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
        return;
    }

    // Calcula a sequência de Fibonacci até que o número seja maior ou igual ao fornecido
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    // Verifica se o número pertence à sequência de Fibonacci
    if (b === numero) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}