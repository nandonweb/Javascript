// Reduce

// Some todos os numeros (reduce)
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