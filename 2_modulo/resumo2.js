/* 
RESUMO SEGUNDO MODULO

1 - Operadores de Comparação
> maior que 
>= maior que ou igual a
< menor que 
<= menor que ou igual a  
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)

2 - Operadores Logicos
&& -> AND -> E / Todas as expressoes precisam ser verdadeira para retornar true
|| -> OR -> OU / Todas as expressoes precisam ser falsa para retornar false
! -> NOT -> NÃO 


3 - Curto Circuito
&& -> false && true -> false "o valor mesmo" ex: 0
|| -> true || false ->  vai retornar "o valor verdadeiro"
FALSY
*false
0
'' "" ``
null / undefined 


4 - If Else 
If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter varios else if's ba checagem
So posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
// se (numero >= 0 && numero <= 5) ocorrer, faça isso (codigo)
// se não faça isso (o codigo) 

5 - Operação Ternária
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';


6 - Objeto Date
// const d3horas = 60 * 60 * 3 * 1000;
// const d24Horas = 60 * 60 * 24 * 1000;
// const d30dias = d24Horas * 30;
// const d1ano = d30dias * 12;
// const data = new Date(d3horas); // 01/01/1970 Timestamp unix ou epoca unix
// const data = new Date(2022, 1, 1, 15, 20) / a, m, d, h, M, s, ms

7 - Switch Case
// const data = new Date('1987-04-21 00:00:00');
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// switch (diaSemana) {
// case 0: 
//     diaSemanaTexto = 'Domingo';
//     break;
// case 1: 
//     diaSemanaTexto = 'Segunda';
//     break;
// case 2: 
//     diaSemanaTexto = 'Terça';
//     break;
// case 3: 
//     diaSemanaTexto = 'Quarta';
//     break;
// case 4: 
//     diaSemanaTexto = 'Quinta';
//     break;
// case 5: 
//     diaSemanaTexto = 'Sexta';
//     break;
// case 6: 
//     diaSemanaTexto = 'Sabado';
//     break;
// }

// console.log(diaSemana, diaSemanaTexto);


8 - Atribuição via Desestruturação
1. Arrays
2. Objetos

9 -> For - Estrutura de Repetição
// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// Estrutura de repetição
// i = index - muito usado no for

// for (let i = 0; i <= 100; i++) {
//   console.log('Linha', i);
// }

// const frutas = ['Maça', 'Pera', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Indice ${i}`,  frutas[i]);
// }


10 -> DOM - Arvore DOM
// EX: ir no console 
// const p = document.querySelector('p');
// p.style.color = 'red'; - Muda a cor do texto da pagina


11 -> For in - Estrutura de Repetição
FAZER A AULA


12 -> For of - Estrutura de Repetição
FAZER A AULA


13 -> While e Do - Estrutura de Repetição
// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// } 


14 -> Break e Continue
// Continue continua para proxima iteração
// Break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrato, saindo...');
        break;
    }
}

14 -> Tratando e Lançando Erros / try, catch, throw
// try, catch, throw

try {
 // é executada quando não há erros
 console.log(a);
 console.log('Abri um arquivo');
 console.log('Manipulei o arquivo e gerou erro');
 console.log('Fechei o arquivo');
} catch (e) {
 // é executado quando há erros
 console.log('Tratando o erro');
} finally {
    console.log('Finally: Eu sempre sou executado');
    // Sempre
}


15 -> setInterval e setTimeout

function mostraHora() {
    let data = new Date;

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);


*/
