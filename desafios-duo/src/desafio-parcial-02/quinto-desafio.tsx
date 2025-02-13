import readlineSync from "readline-sync";

function validarNota(): number {
    let nota = parseInt(readlineSync.question("Digite a nota (0-100): "));
    while (isNaN(nota) || nota < 0 || nota > 100) {
        console.log("Por favor, digite uma nota válida entre 0 e 100.");
        nota = parseInt(readlineSync.question("Digite a nota (0-100): "));
    }
    return nota;
}

function classificarNota(nota: number): void {
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 50) {
        console.log("Regular");
    } else {
        console.log("Insuficiente");
    }
}

const nota: number = validarNota();

classificarNota(nota);
