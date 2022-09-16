// Tipo tuple
const dadosCliente1: [number, string] = [1, 'Fernando'];
const dadosCliente2: [number, string, string] = [1, 'Fernando', 'Silva'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);

// readonly array
const array1: readonly string[] = ['Fernando', 'Silva'];
const array2: ReadonlyArray<string> = ['Fernando', 'Silva'];

console.log(array1);
console.log(array2);
