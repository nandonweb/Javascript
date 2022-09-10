// Funções Fabrica, Factory Functions
// Constructor function (função construtora)
// Getter, Setter

function criaPessoa(nome, sobrenome, a, p) {
  return {
   nome,
   sobrenome,

   // Getter
   get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
   },

   // Setter
   set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
   },

   fala: function(assunto) {
    return `${this.nome} está ${assunto}.`;
   },
   altura: a,
   peso: p,
   // Getter
   get imc() {
    const indice = this.peso / (this.altura ** 2);
    return indice.toFixed(2);
   }
  };
}

const p1 = criaPessoa('Fernando', 'Silva', 1.8, 85);
const p2 = criaPessoa('Fernando', 'Silva', 1.6, 52);
const p3 = criaPessoa('Fernando', 'Silva', 1.5, 70);


console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);