const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Silva',
    idade: 23,
    endereço: {
      rua: 'Av Brasil',
      numero: 320
    }
};

// Atribuição via desestruturação objeto
const {nome, idade, ...resto} = pessoa;
console.log(nome, idade, resto);