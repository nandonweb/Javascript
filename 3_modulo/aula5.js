// Closures

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



