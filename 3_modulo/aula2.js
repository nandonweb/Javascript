// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao2(a, b = 2, c = 4) {
//     console.log(a + b + c);
// } 
// funcao(2, 10, 20);

// function funcao3([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Fernando Silva', 'de Souza', 23]);

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }   

    console.log(acumulador); 
}
conta('*', 10, 20, 30, 40, 50);

const conta2 = (...args) => {
    console.log(args);
};
conta('+', 1, 20 , 30, 40, 50)

