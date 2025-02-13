import { idade } from "../dados"

type FaixaEtaria = { [key: string]: string };

const faixasEtarias: FaixaEtaria = {
    idoso: "Você é um idoso",
    adulto: "Você é um adulto",
    adolescente: "Você é um adolescente",
    crianca: "Você é uma criança",
};

function classificacaoEtaria(idade: number): string {
    return idade >= 60
        ? faixasEtarias.idoso
        : idade >= 18
            ? faixasEtarias.adulto
            : idade >= 13
                ? faixasEtarias.adolescente
                : faixasEtarias.crianca;
}

console.log(classificacaoEtaria(idade));