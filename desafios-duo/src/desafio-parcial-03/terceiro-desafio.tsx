import readlineSync from "readline-sync";

function somarImpares(inicio: number, fim: number): void {
    let soma = 0;
    let impares: number[] = [];

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
            soma += i;
        }
    }

    console.log(`Números ímpares entre ${inicio} e ${fim}: ${impares.join(', ')}`);
    console.log(`Soma dos números ímpares: ${soma}`);
}

const inicio: number = parseInt(readlineSync.question("Digite o número inicial: "));
const fim: number = parseInt(readlineSync.question("Digite o número final: "));

if (isNaN(inicio) || isNaN(fim)) {
    console.log("Por favor, insira números válidos.");
} else if (inicio > fim) {
    console.log("O número inicial não pode ser maior que o número final.");
} else {
    somarImpares(inicio, fim);
}
