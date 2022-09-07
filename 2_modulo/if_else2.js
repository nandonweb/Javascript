// se (numero >= 0 && numero <= 5) ocorrer, faça isso (codigo)
// se não faça isso (o codigo) 

const numero = 9;

if (numero <= 10) {
    console.log('O numero é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('o numero esta entrei 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11.');
} else {
    console.log('O numero nao esta entre 0 e 11.');
}