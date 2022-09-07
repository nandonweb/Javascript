// IIFE -> Immediately invoked function expression
// Funções Imediatadas - (IIFE)

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
