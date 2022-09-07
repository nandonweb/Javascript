// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
   this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
   enumerable: true, // motra a chave
   configurable: true, // configuravel
   get: function () {
    return estoque;
   }, 
   set: function (valor) {
    if(typeof valor !== 'number') {
        console.log('Bad value');
        return;
    }
     estoquePrivado = valor;
   }        
  });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
           valor = valor.replace('coisa..');
           nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);