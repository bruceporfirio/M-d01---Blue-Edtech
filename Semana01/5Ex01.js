// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
// mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require(`prompt-sync`)();

let nome = ``;
let senha = ``;

while (senha == nome) {
    nome = prompt(`Digite seu nome: `);
    senha = prompt(`Digite sua senha: `);
    if (senha == nome) {
        console.log(`Nome e senha não podem ser iguais.`);
    }
}
console.log(`Nome: ${nome}
Senha: ${senha}
`);
