import readlineSync from "readline-sync";

function validarNumero(): number {
    let numero = parseInt(readlineSync.question("Digite um número: "));
    while (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        numero = parseInt(readlineSync.question("Digite um número: "));
    }
    return numero;
}

function verificarDivisibilidade(numero: number): void {
    const divisivelPor2 = numero % 2 === 0;
    const divisivelPor3 = numero % 3 === 0;

    if (divisivelPor2 && divisivelPor3) {
        console.log("O número é divisível por 2 e 3.");
    } else if (divisivelPor2) {
        console.log("O número é divisível apenas por 2.");
    } else if (divisivelPor3) {
        console.log("O número é divisível apenas por 3.");
    } else {
        console.log("O número não é divisível nem por 2 nem por 3.");
    }
}

const numero: number = validarNumero();

verificarDivisibilidade(numero);
