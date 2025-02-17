import readlineSync from "readline-sync";

function exibirTabuada(n: number, m: number): void {
    for (let i = 1; i <= m; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

const n: number = parseInt(readlineSync.question("Digite o número para a tabuada (n): "));
const m: number = parseInt(readlineSync.question("Digite o valor até onde a tabuada vai (m): "));

if (isNaN(n) || isNaN(m)) {
} else if (m < 1) {
    console.log("O valor de m deve ser maior ou igual a 1.");
} else {
    exibirTabuada(n, m);
}
