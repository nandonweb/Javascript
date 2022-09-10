/* 
RESUMO TERCEIRO MODULO

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

*/