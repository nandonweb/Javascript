/* eslint-disable */

// Tipos bascios
let nome: string = 'Fernando';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
   idade: 30,
   nome: 'Fernando'
};

// Funções
function soma(x: number, y: number) {
  return x + y;
};

const result = soma(2, 2);
