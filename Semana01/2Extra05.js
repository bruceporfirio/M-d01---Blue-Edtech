// Faça um programa de cadastro de clientes que mostre um menu de opções
// e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const prompt = require(`prompt-sync`)();
console.log('Escolha sua refeição:');

let opc1 = `Fritas`;
let opc2 = `Shake`;
let opc3 = `Hambúrguer`;

console.log(`1 - Fritas \n2 - Shake \n3 - Hambúrguer`);

let escolha = (+prompt(
    `Digite o número correspondente a seu pedido: `,
)).toFixed(0);

if (escolha == 1) {
    console.log(`Você escolheu ${opc1}.`);
} else if (escolha == 2) {
    console.log(`Você escolheu ${opc2}.`);
} else if (escolha == 3) {
    console.log(`Você escolheu ${opc3}.`);
} else {
    console.log(`Opção digitada inválida!`);
}
