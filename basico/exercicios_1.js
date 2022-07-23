const nome = "Fernando";
const sobrenome = "da Silva";
const idade = "23";
const peso = "68";
const altura = "1.8";

let imc = (peso / (altura * altura));
let anoNascimento = (2022 - idade);

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg")
console.log("tem", altura, "de altura e seu IMC é de", imc,)
console.log(nome, "nasceu em", anoNascimento)