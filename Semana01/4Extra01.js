// Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe
// contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de
//  um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// Salários até R$ 280,00 (incluindo): aumento de 20%.
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

const prompt = require(`prompt-sync`)();

console.log(`Descubra qual reajuste de salário foi recebido!`);
let salario = (+prompt(`Digita o salário atual R$:`)).toFixed(2);
salario = Number(salario);
// console.log(salario, typeof salario); Verificação de tipo e valor.

if (salario <= 280) {
    console.log(
        `Seu salário atual é: R$${salario}. \nReajuste: 20%. \nAumento de: R$${(
            0.2 * salario
        ).toFixed(2)}. \nNovo salário: R$${(salario + salario * 0.2).toFixed(
            2,
        )} `,
    );
} else if (salario >= 280 && salario <= 700) {
    console.log(
        `Seu salário atual é: R$${salario}. \nReajuste: 15%. \nAumento de: R$${(
            0.15 * salario
        ).toFixed(2)}. \nNovo salário: R$${(salario + salario * 0.15).toFixed(
            2,
        )} `,
    );
} else if (salario >= 700 && salario <= 1500) {
    console.log(
        `Seu salário atual é: R$${salario}. \nReajuste: 10%. \nAumento de: R$${(
            0.1 * salario
        ).toFixed(2)}. \nNovo salário: R$${(salario + salario * 0.1).toFixed(
            2,
        )} `,
    );
} else {
    console.log(
        `Seu salário atual é: R$${salario}. \nReajuste: 5%. \nAumento de: R$${(
            0.05 * salario
        ).toFixed(2)}. \nNovo salário: R$${(salario + salario * 0.05).toFixed(
            2,
        )} `,
    );
}
