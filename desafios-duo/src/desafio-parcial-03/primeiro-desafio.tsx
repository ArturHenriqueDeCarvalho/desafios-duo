import readlineSync from "readline-sync";

function ehPrimo(numero: number): boolean {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const numero: number = parseInt(readlineSync.question("Digite um número inteiro: "), 10);

if (isNaN(numero) || numero < 1) {
    console.log("Por favor, digite um número inteiro positivo.");
} else {
    console.log(`Números primos entre 1 e ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        if (ehPrimo(i)) {
            console.log(i);
        }
    }
}