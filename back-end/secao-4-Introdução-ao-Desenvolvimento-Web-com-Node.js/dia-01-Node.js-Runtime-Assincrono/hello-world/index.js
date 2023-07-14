/*HELLO WORLD! WITH NODE */
// console.log("Hello World!");

/*CONTATENATION AND SCREEN OUTPUT WITH NODE */
// const readline = require('readline-sync');

// const name = readline.question('Qual é o seu nome? ');
// const age = readline.question('Qual é o sua idade? ');

// console.log(`Hello, ${name}! You are ${age} years old!`);
// const OS = require('os');
// console.log(OS.cpus());

/*FUNCITON SYNC WITH NODE */
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 0);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}
