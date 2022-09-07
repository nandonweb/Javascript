/* 
Curto Circuito
&& -> false && true -> false "o valor mesmo" ex: 0
|| -> true || false ->  vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined 
*/

// console.log('Fulano' && null);

// function falaOi () { 
//     return 'Oi';
// }

// let nome = 'Nando';
// const vaiExecutar = true;

// console.log(vaiExecutar && falaOi() + nome);

// console.log(0 || false || null || 'Nando' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'azul';

console.log(corPadrao); 