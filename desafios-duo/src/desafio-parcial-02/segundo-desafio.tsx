import readlineSync from "readline-sync";

function validarNumero(): number {
    let numero = parseInt(readlineSync.question("Digite um número: "));
    while (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        numero = parseInt(readlineSync.question("Digite um número: "));
    }
    return numero;
}

function verificarNumero(numero: number): void {
    if (numero > 0) {
        if (numero % 2 === 0) {
            console.log("O número é positivo e par.");
        } else {
            console.log("O número é positivo e ímpar.");
        }
    } else if (numero === 0) {
        console.log("O número é zero.");
    } else {
        console.log("O número é negativo.");
    }
}

// Solicita e valida o número
const numero: number = validarNumero();

// Verifica as condições do número
verificarNumero(numero);
