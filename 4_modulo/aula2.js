//               -5       -4       -3       -4          -5 
//                0        1        2        3           4      
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-2, Number.MAX_VALUE);
//push
nomes.splice(nomes.length, 0, 'Fernando');
console.log(nomes, removidos);
console.log(Number.MAX_VALUE);