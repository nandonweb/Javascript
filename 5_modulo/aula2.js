// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
   enumerable: true, // motra a chave
   value: estoque, // valor
   writable: true, // pode alterar
   configurable: false // configuravel                           
  });
  Object.defineProperties(this, { 
    nome: {
    enumerable: true, // motra a chave
    value: nome, // valor
    writable: true, // pode alterar
    configurable: false // configuravel
    },
    preco: {
    enumerable: true, // motra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: false // configuravel
    },                      
   });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
// p1.estoque = 150;
// delete p1.estoque;
console.log(p1);