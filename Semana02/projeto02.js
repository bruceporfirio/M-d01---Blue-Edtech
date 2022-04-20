const prompt = require('prompt-sync')();

let item = [`Pedra`, `Papel`, `Tesoura`];
let escolhaPc = Math.floor(Math.random(item) * 3);
let escolhaUsuario = +prompt(
    `Digite um número referente a opção: 0-Pedra, 1- Papel, 2-Tesoura: `,
);

while (escolhaUsuario !== 0 && escolhaUsuario !== 1 && escolhaUsuario !== 2) {
    escolhaUsuario = +prompt(`Digite uma entrada válida: `);
}
console.log(escolhaPc, escolhaUsuario);

console.log(`Você escolheu: ${item[escolhaUsuario]}`);
console.log(`Computador escolheu: ${item[escolhaPc]}`);

if (escolhaUsuario == 0 && escolhaPc == 1) {
    console.log(
        `Você escolheu Pedra e o Computador escolheu Papel: Computador VENCEU!`,
    );
} else if (escolhaUsuario == 1 && escolhaPc == 0) {
    console.log(
        `Você escolheu Papel e o Computador escolheu Pedra: Você VENCEU!`,
    );
} else if (escolhaUsuario == 1 && escolhaPc == 2) {
    console.log(
        `Você escolheu Papel e o Computador escolheu Tesoura: Computador VENCEU!`,
    );
} else if (escolhaUsuario == 2 && escolhaPc == 1) {
    console.log(
        `Você escolheu Tesoura e o Computador escolheu Papel: Você VENCEU!`,
    );
} else if (escolhaUsuario == 2 && escolhaPc == 0) {
    console.log(
        `Você escolheu Tesoura e o Computador escolheu Pedra: Computador VENCEU!`,
    );
} else if (escolhaUsuario == 0 && escolhaPc == 2) {
    console.log(
        `Você escolheu Pedra e o Computador escolheu Tesoura: Você VENCEU!`,
    );
} else {
    console.log(`Empate!`)
}
