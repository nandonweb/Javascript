// return
// Retorna o valor
// termina a função


// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome};
// } 
// const p1 = criaPessoa('Fernando', 'Silva');
// console.log(p1);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Fernando!');
console.log(resto);