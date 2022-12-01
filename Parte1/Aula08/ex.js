const nome = 'Marcus';
const sobrenome = 'Paulo';
const idade = 21;
const peso = 68;
const altura = 1.83;
let imc = peso / (altura * altura);
let anoNasc = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', altura, 'de altura e seu IMC é', imc);
console.log(nome, sobrenome, 'nasceu em', anoNasc);