// Função constutora -> objetos
// Função fabrica -> Objetos
// Constutora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function() {};
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Maria', 'Clara');
const p2 = new Pessoa('Fernando', 'Silva');
p1.metodo();

