//Atividade para fixar-JavaScript-Array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let valor = '';
let maior = numbers[0];
 
console.log(numbers);

for(i = 0; i < numbers.length; i += 1){
    soma = soma + numbers[i];
    if(soma > 20){
        valor = 'Valor maior que 20!';
    }
    else{
        valor = 'Valor menor que 20!';
    }
}

console.log(soma);

media = soma / numbers.length;
console.log(media);

console.log(valor);

for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maior){
        maior = numbers[index];
    }
}

console.log('O maior valor é: ' + maior);