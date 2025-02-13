import readlineSync from "readline-sync";

function validarNome(): string {
    let nome = readlineSync.question("Digite seu nome completo: ");
    while (!nome || nome.trim().length === 0) {
        console.log("O nome não pode estar vazio. Tente novamente.");
        nome = readlineSync.question("Digite seu nome completo: ");
    }
    return nome;
}

function validarIdade(): number {
    let idade = parseInt(readlineSync.question("Digite sua idade: "));
    while (isNaN(idade) || idade <= 0 || idade > 110) {
        console.log("Idade inválida. A idade deve ser um número inteiro entre 1 e 110.");
        idade = parseInt(readlineSync.question("Digite sua idade: "));
    }
    return idade;
}

function validarAltura(): number {
    let altura = parseFloat(readlineSync.question("Digite sua altura (em metros): "));
    while (isNaN(altura) || altura <= 0 || altura > 2.5) {
        console.log("Altura inválida. A altura deve ser um número positivo entre 0 e 2.50 metros.");
        altura = parseFloat(readlineSync.question("Digite sua altura (em metros): "));
    }
    return altura;
}

function validarPeso(): number {
    let peso = parseFloat(readlineSync.question("Digite seu peso (em kg): "));
    while (isNaN(peso) || peso <= 0 || peso > 200) {
        console.log("Peso inválido. O peso deve ser um número positivo entre 0 e 200 kg.");
        peso = parseFloat(readlineSync.question("Digite seu peso (em kg): "));
    }
    return peso;
}

function validarMesAtual(): number {
    let mesAtual = parseInt(readlineSync.question("Digite o número do mês atual (1-12): "));
    while (isNaN(mesAtual) || mesAtual < 1 || mesAtual > 12) {
        console.log("Mês inválido. O mês deve ser um número entre 1 e 12.");
        mesAtual = parseInt(readlineSync.question("Digite o número do mês atual (1-12): "));
    }
    return mesAtual;
}

export const nome: string = validarNome();
export const idade: number = validarIdade();
export const altura: number = validarAltura();
export const peso: number = validarPeso();
export const mesAtual: number = validarMesAtual();

export function anoNascimento(): number {
    return new Date().getFullYear() - idade;
}

export function calcularImc(): string {
    return (peso / (altura * altura)).toFixed(2);
}

export function converteAltura(): number {
    return altura * 100;
}

export function calcularMesesDeVida(): number {
    return (idade - 1) * 12 + mesAtual;
}
