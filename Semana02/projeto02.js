const prompt = require('prompt-sync')();
console.clear();
console.log(`
            _____________
            |           |
            |  JOKENPÔ  |
            |   ✊🖐️-✌️   |       
            |___________|          
`);
console.log();
prompt(`⌨️  Pressione ENTER para ver tutorial!`); // intro
console.log();
console.log(`-------📃 TUTORIAL 📃-------

➡︎ Você informará seu nome.

➡︎ Escolherá  quantas rodadas deseja jogar.

➡︎ Após informar o número de rodadas, o computador escolherá sua opção automaticamente e o usuário digitará o número 
correspondente conforme indicação abaixo:

Pedra______Digite: 1 ✊              
Papel______Digite: 2 🖐️
Tesoura____Digite: 3 ✌️

➡︎ Quem ganha, quem perde:

Pedra_____perde de papel e ganha de tesoura.
Papel_____perde de tesoura e ganha de pedra.
Tesoura___perde de pedra e ganha de papel.
Iguais____escolhas iguais resultam em empate.

➡︎ Resultado:
O jogo indicará o vencedor/empate a cada rodada. 
Cada rodada equivale a um ponto, ao final, quem somar mais, ganha.`);

console.log();
prompt(`🟢 Pressione ENTER para começar o jogo!`);
console.log();

let vezesJogada = ``;
let jogar = ``;
let escolhaPc = ``;
let escolhaUsuario = ``;

while (jogar !== 'nao') {
    console.clear();

    nome = prompt(`Digite seu nome: `);

    while (!isNaN(nome)) {
        console.log('Apenas letras são aceitas como caracteres válidos!');
        nome = prompt(`Digite seu nome: `);
        console.log();
    }
    console.log();
    vezesJogada = +prompt(`Quantas rodadas você deseja jogar: `);
    while (vezesJogada == 0 || isNaN(vezesJogada)) {
        console.log('Você deve informar um número igual ou maior que 1!');
        vezesJogada = +prompt(`Quantas rodadas você deseja jogar: `);
        console.log();
    }
    console.log();
    let contPc = 0;
    let contUsu = 0;
    let contEmp = 0;
    for (let i = 0; i < vezesJogada; i++) {
        let item = [`ÍNDICEZERO`, `Pedra ✊`, `Papel 🖐️`, `Tesoura ✌️`];
        escolhaPc = Math.ceil(Math.random(item) * 3);
        escolhaUsuario = +prompt(
            `Digite o número referente a opção desejada (1-Pedra, 2-Papel, 3-Tesoura): `,
        );

        while (
            escolhaUsuario !== 1 &&
            escolhaUsuario !== 2 &&
            escolhaUsuario !== 3
        ) {
            escolhaUsuario = +prompt(`Digite uma entrada válida: `);
        }

        console.log(`${nome} escolheu: ${item[escolhaUsuario]}`);
        console.log(`Computador escolheu: ${item[escolhaPc]}`);

        if (escolhaUsuario == 1 && escolhaPc == 2) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 2 && escolhaPc == 1) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else if (escolhaUsuario == 2 && escolhaPc == 3) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 3 && escolhaPc == 2) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else if (escolhaUsuario == 3 && escolhaPc == 2) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 1 && escolhaPc == 3) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else {
            console.log(`❌ Empate!`);
            contEmp++;
            console.log();
        }
    }
    console.log();
    prompt(
        `⌨️  Pressione ENTER para descobrir quem foi o(a) GRANDE CAMPEÃ(O)!`,
    );
    console.clear();

    console.log(`
    @@@          @@@
    @  @@@@@@@@@@  @
    @  @@@@@@@@@@  @
     @  @@@@@@@@  @ 
       @ @@@@@@ @   
          @@@@      
           @@       
         @@@@@@    
        @@@@@@@@   
        
        `);

    console.log(`${nome} venceu: ${contUsu} vez(es)`);
    console.log(`Computador venceu: ${contPc} vez(es)`);
    console.log(`Empate: ${contEmp} vez(es)`);

    if (contUsu > contPc) {
        console.log(
            `--------------------------------------------------------------------`,
        );

        console.log(
            `🧍🏆 ${nome} foi o(a) grande vencedor(a) com ${contUsu} ponto(s)! 🏆 🧍`,
        );
        console.log(
            `--------------------------------------------------------------------`,
        );
    } else if (contUsu < contPc) {
        console.log(
            `--------------------------------------------------------------------`,
        );

        console.log(
            `🖥️  🏆  Computador foi o grande vencedor com ${contPc} ponto(s)! 🏆 🖥️`,
        );
        console.log(
            `--------------------------------------------------------------------`,
        );
    } else {
        console.log(
            `--------------------------------------------------------------------`,
        );
        console.log(`❌ Os jogadores empataram. ❌`);
        console.log(
            `--------------------------------------------------------------------`,
        );
    }

    console.log();
    jogar = prompt(`Jogar Novamente (sim ou não): `).toLowerCase();

    while (jogar !== 'nao' && jogar !== 'sim') {
        jogar = prompt(
            'Digite uma entrada válida (sim ou nao): ',
        ).toLowerCase();
    }
}

console.log(`
--------------------------------------------------------------------
🏁 FIM DE JOGO! 🏁                              
--------------------------------------------------------------------`);
