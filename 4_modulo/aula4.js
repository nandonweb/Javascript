// filter - Sempre retornar um array, com a mesma quantidade elementos ou menos


// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 3, 4, 5, 8, 11, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas pessoas cujo nome termina com letra a

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

