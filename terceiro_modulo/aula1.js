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