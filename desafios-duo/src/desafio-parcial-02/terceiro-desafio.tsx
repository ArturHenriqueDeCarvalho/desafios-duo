import readlineSync from "readline-sync";

function validarNumero(prompt: string): number {
    let numero = parseFloat(readlineSync.question(prompt));
    while (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        numero = parseFloat(readlineSync.question(prompt));
    }
    return numero;
}

function compararNumeros(a: number, b: number, c: number): void {
    if (a > b && a > c) {
        console.log(`O número A (${a}) é o maior.`);
    } else if (b > a && b > c) {
        console.log(`O número B (${b}) é o maior.`);
    } else if (c > a && c > b) {
        console.log(`O número C (${c}) é o maior.`);
    } else {
        console.log("Existem números iguais, logo não há um único maior.");
    }
}

const a: number = validarNumero("Digite o número A: ");
const b: number = validarNumero("Digite o número B: ");
const c: number = validarNumero("Digite o número C: ");

compararNumeros(a, b, c);
