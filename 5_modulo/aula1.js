// Revisando objetos

const pessoa1 = new Object();
pessoa1.nome = 'Fernando';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 24;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
};

pessoa1.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}

// const pessoa2 = {
//     nome: 'Fulano', 
//     sobrenome: 'de tal'
// }; 

// delete pessoa1.nome;
// console.log(pessoa2.nome, pessoa2.sobrenome);