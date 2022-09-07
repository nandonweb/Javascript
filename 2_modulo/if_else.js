// const data = new Date(). toLocaleString();
/* 
Entre 0 - 11 - Bom Dia 
Entre 12 e 17 - Boa Tarde
Entre 18 - 23 - Boa Noite 
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else if's ba checagem
// So posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log("Bom Dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa Noite");
} else {
    console.log('Erro');
}
       

