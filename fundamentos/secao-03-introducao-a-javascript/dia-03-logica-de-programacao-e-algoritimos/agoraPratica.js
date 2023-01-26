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

