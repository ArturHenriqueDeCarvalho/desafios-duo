import readlineSync from "readline-sync";

function exibirPiramideInvertida(n: number): void {
    for (let i = n; i >= 1; i--) {
        let espacos = " ".repeat(n - i);
        let numeros = Array.from({ length: i }, (_, index) => index + 1).join(" ");
        console.log(espacos + numeros);
    }
}

const n: number = parseInt(readlineSync.question("Digite o número para a pirâmide invertida (n): "));

if (isNaN(n) || n < 1) {
    console.log("Por favor, insira um número válido maior que 0.");
} else {
    exibirPiramideInvertida(n);
}
