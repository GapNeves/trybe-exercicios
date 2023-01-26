//Atividade para fixar-JavaScript-Lógica de Programação-Fatorial

const number = 10;
let fatorial = 1;

for (let index = number; index > 1; index -=1){
    fatorial = fatorial * index ;
}

console.log(fatorial);

//Atividade para fixar-JavaScript-Lógica de Programação-Invertendo palavras

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

//Atividade para fixar-JavaScript-Lógica de Programação-Maior e menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let big= array[0];
let small= array[0];

for(let index = 0; index < array.length; index += 1){
    if(array[index].length > big.length){
        big = array[index];
    }
}

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < small.length){
        small = array[index];
    }
}
console.log(big);
console.log(small);

//Atividade para fixar-JavaScript-Lógica de Programação-Número Primo
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

//Atividade para fixar-JavaScript-Lógica de Programação-Exercicios Bonús

//Exercicio 1

// let n = 5;
// let simbolo = '*';
// let line = '';

// for(index = 0; index < n; index += 1){
//     line = line + simbolo;
// }
// for(index = 0; index < n; index += 1){
//     console.log(line);
// }

//Exercicio 2

// let n = 5;
// let simbolo = '*';
// let line = '';

// for(index = 0; index < n; index += 1){
//     line = line + simbolo;
//     console.log(line);
// }

//Exercicio 3

let n = 5;
let symbol = '*';
let line = '';
let position = n - 1;

for(let index = 0; index < n; index += 1){
    for(let i = 0; i < n; i += 1){
        if(i < position){
            line = line + ' ';
        }
        else{
            line = line + symbol;
        }
    }
    console.log(line);
    line = '';
    position -= 1;
}