// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem
// decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de
// triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

const prompt = require(`prompt-sync`)();
console.log(`Descubra o tipo de triangulo!`);

let ladA = +prompt(`Digite o tamanho do maior lado(A) do triângulo:`);
let ladB = +prompt(`Digite o tamanho do  segundo maior lado(B) do triângulo:`);
let ladC = +prompt(`Digite o tamanho do menor lado do triângulo:`);

if (ladA >= ladB + ladC) {
    console.log(`Não forma triângulo.`);
} else if (ladA ** 2 === ladB ** 2 + ladC ** 2) {
    console.log(`Triângulo retângulo.`);
} else if (ladA ** 2 > ladB ** 2 + ladC ** 2) {
    console.log(`Triângulo obtusângulo.`);
} else if (ladA ** 2 < ladB ** 2 + ladC ** 2) {
    console.log(`Triângulo acutângulo.`);
} else if (ladA ** 2 === ladB ** 2 === ladC ** 2) {
    console.log('Triângulo equílatero.');
} else ladA === ladB || ladA === ladC || ladC === ladB;
{
    console.log(`Triângulo isósceles.`);
}
