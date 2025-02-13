import { idade, altura } from "../dados";

const idadeFloat: number = parseFloat(idade.toString());
const alturaInt: number = parseInt(altura.toString());

console.log(`Idade em Float: ${idadeFloat}`);
console.log(`Altura em Inteiro: ${alturaInt}`);
