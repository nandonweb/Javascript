/* 
RESUMO CURSO JAVASCRIPT 

-- Fazer um arquivo .MD apos o acabar o curso

RESUMO 1 - BASICO ----

Print - console.log 
Variaveis - Const, Let

Dados Primitivos - String, Number, undefined, null, boolean, symbol

Operadores Aritimeticos: + Soma, / DIvisão,  * Multiplicação, - Subtração, + Contatenação, 
** Potencia / Elevado, % Resto da Divisão, Incremento / contador++, Decremento / contador--

Operadores de atribuição
contador2 +-/*= number; 

Alert, Prompt, Confirm

parsetInt, parsetFloor

Objeto Math
Função
Array

Valores Primitivos e valores por referencia

RESUMO 2 - SEGUNDO MODULO ----

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


RESUMO 3 - TERCEIRO MODULO

1 - Maneiras de declarar funções

// Declaraçõ de função (Function hoisting)

falaoi();

function falaoi() {
    console.log('Olá');
}

// First-class objects (Objetos de primeira classe)
// Function expresson
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// function executaFuncao(funcao) {
//   console.log('Executa a função abaixo');  
//   funcao();
// }

// executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou um arrow function');
};
funcaoArrow();

const obj = {
    falar: function () {
        console.log('Estou falando....')
    }
}
obj.fa();

2 - Parametros de funções

// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

3 - Retorno da função

// return
// Retorna o valor
// termina a função

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Fernando!');
console.log(resto);

4 - Escopo lexico

const nome = 'Fernando';

function falaNome() {
    console.log(nome);
}
falaNome(nome);


5 - Closures

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Fernando');
const funcao2 = retornaFuncao('Silva');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());


6 - Funções de callback

function rand(min = 1000, max = 3000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
   f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Fernando!')
}

7 - Funções imediatas (IIFE)

(function (idade, peso, altura) {
    const sobrenome = 'Silva'
    function criaNome(nome) { 
    return nome + ' ' + sobrenome;
}

function falaNome() {
    console.log(criaNome('Fernando'));
}

falaNome();
console.log(idade, peso, altura);

})(23, 70, 1.80);

8 - Funções Fabrica

// Funções Fabrica, Factory Functions
// Constructor function (função construtora)
// Getter, Setter

function criaPessoa(nome, sobrenome, a, p) {
  return {
   nome,
   sobrenome,

   // Getter
   get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
   },

   // Setter
   set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
   },

   fala: function(assunto) {
    return `${this.nome} está ${assunto}.`;
   },
   altura: a,
   peso: p,
   // Getter
   get imc() {
    const indice = this.peso / (this.altura ** 2);
    return indice.toFixed(2);
   }
  };
}

const p1 = criaPessoa('Fernando', 'Silva', 1.8, 85);
const p2 = criaPessoa('Fernando', 'Silva', 1.6, 52);
const p3 = criaPessoa('Fernando', 'Silva', 1.5, 70);


console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

9 - Funções construtoras

function Pessoa(nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function() {};
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Maria', 'Clara');
const p2 = new Pessoa('Fernando', 'Silva');
p1.metodo();

10 - Funções recursivas

// Ela retorna ela mesma
// tem um limite bloqueado pelo proprio JS

function recursiva(max) {
    if (max >= 10000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-1);

11 - Funções Geradoras

function* gerador1() {
    //Codigo qualquer
    yield 'Valor 1';
    //Codigo qualquer
    yield 'Valor 2';
    //Codigo qualquer
    yield 'Valor 3';
}

function* gerador2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g1 = gerador1();
const g2 = gerador2();
const func1 = g1.next().value;
const func2 = g2.next().value;

func1();
func2();

RESUMO 4 - QUARTO MODULO

1 - Revisão
//                 0         1        2         3
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace'];
const novo = nomes.slice(0, 3);
console.log(nomes);

2 - Splice 
//               -5       -4       -3       -4          -5 
//                0        1        2        3           4      
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-2, Number.MAX_VALUE);
//push
nomes.splice(nomes.length, 0, 'Fernando');
console.log(nomes, removidos);
console.log(Number.MAX_VALUE);

3 - Concatenando Array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// const a3 = a1.concat(a2, [7, 8, 9], 'Fernando');
// ... rest -> ...spread
const a3 = [...a1, ...a2];
console.log(a3);

4 - Filter
// filter - Sempre retornar um array, com a mesma quantidade elementos ou menos


// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 3, 4, 5, 8, 11, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrade = pessoas.filter(obj => obj.nome.length >= 5);

const mais50anos = pessoas.filter(obj => obj.idade >= 50);

const nomeLetraA = pessoas.filter(obj => obj.nome.endsWith('a'));

console.log(nomeLetraA);

5 - MAP

// Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));

const comIds = pessoas.map(function(obj, indice) {
  const newObj = { ...obj };
  newObj.id = (indice + 1);
  return newObj;
});

// console.log(pessoas);
console.log(comIds);


6 - Reduce

/ Some todos os numeros (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    // if(valor % 2 === 0) acumulador.push(valor); //pares
    // console.log(acumulador, valor);
   return acumulador;
}, []);

console.log(total);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 82 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 53 },
];

const maisVelho = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelho);


7 - Filter, Map, Reduce juntos

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

8 - ForEach

const a1 = [10, 20, 30];

let total = 0;
a1.forEach(valor =>  {
   total += valor;
});

console.log(total); // resultado 60



RESUMO 5 -  QUINTO MODULO

*/