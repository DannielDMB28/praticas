let primeiroNumero = Number(prompt('Digite um numero: '));
let segundoNumero = Number(prompt('Digite outro numero: '));

let operadores = prompt('escolha um operador: +, -, *, /');

let resultado;

if (operadores === '+') {
    resultado = primeiroNumero + segundoNumero;
} else if (operadores === '-') {
    resultado = primeiroNumero - segundoNumero;
} else if (operadores === '*') {
    resultado = primeiroNumero * segundoNumero;
} else if (operadores === '/') {
    if (segundoNumero !== 0) {
        resultado = primeiroNumero / segundoNumero;
    } else {
    resultado = "Erro! Não é possível dividir por 0.";
    }    
} else {
    resultado = 'Operação invalida';
}

alert(`O resultado da operação é: ${resultado}`);