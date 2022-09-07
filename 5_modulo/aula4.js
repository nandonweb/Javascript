/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
 
*/

const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});
// Object.freeze(produto);

outraCoisa.nome = 'outro nome';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}