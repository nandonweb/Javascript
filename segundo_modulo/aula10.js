// Operação ternaria
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Azul';
let cor = 'cor';

console.log(nivelUsuario, cor, corPadrao);

