// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
const prompt = require(`prompt-sync`)();

let nome = ``;
let idade = ``;
let salario = ``;
let estadoCivil = ``;

while (nome.length < 3) {
    nome = prompt(`Digite seu nome (maior que 3 caracteres): `);
    if (nome.length <= 3) {
        console.log(`Número de caracteres inválidos!`);
    }
}

while (idade < 0 || idade > 150) {
    idade = +prompt(`Digite sua idade (entre 0 e 150): `);
    if (idade < 0 || idade > 150) {
        console.log(`Entrada inválida!`);
    }
}
while (salario <= 0) {
    salario = +prompt(`Digite seu salário (maior que 0): `);
    if (salario <= 0) {
        console.log(`Entrada inválida!`);
    }
}

while (
    estadoCivil !== `S` &&
    estadoCivil !== `C` &&
    estadoCivil !== `V` &&
    estadoCivil !== `D`
) {
    estadoCivil = prompt(`Digite seu estado civil (S: solteiro(a), C: Casado(a), V: Viúvo(a), D: Divorciado(a)): `);
    if (
        estadoCivil !== `S` &&
        estadoCivil !== `C` &&
        estadoCivil !== `V` &&
        estadoCivil !== `D`
    ) {
        console.log(`Caractere inválido!`);
    }
}

console.log(`Nome: ${nome}
Idade: ${idade}
Salário: ${salario}
Estado civil: ${estadoCivil}
`);
