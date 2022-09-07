let num1 = 12; // Number
let num2 = 8; // Number
let num3 = 15.3439434834;

let num4 = 0.7; // Number
let num5 = 0.1; // Number

num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0

num4 = parseFloat(num4.toFixed(2)); 

console.log(num4);

// console.log(num1.toString() + num2); 
// num1 = num1.toString();
// console.log(typeof num1) // Retorna String
// console.log(num3.toFixed(2)); // Retorna 2 Casas Decimais
// console.log(Number.isInteger(num2)); // Verifica se o nomero é inteiro
// console.log(Number.isFinite(num2));