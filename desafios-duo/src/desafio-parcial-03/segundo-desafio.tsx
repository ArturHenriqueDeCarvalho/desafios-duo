import readlineSync from "readline-sync";

function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;
    let passos: string[] = [];

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
        passos.push(`${i}`);
    }

    console.log(`Cálculo do fatorial de ${numero}:`);
    console.log(`${numero}! = 1 x ${passos.join(' x ')} = ${resultado}`);

    return resultado;
}

const numero: number = parseInt(readlineSync.question("Digite um número para calcular o fatorial: "));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro não negativo.");
} else {
    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}