/*  ARRAYS

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


*/