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
