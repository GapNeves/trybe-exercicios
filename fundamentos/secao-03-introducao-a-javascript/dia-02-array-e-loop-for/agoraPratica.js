//Atividade para fixar-JavaScript-Array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let valor = '';
let maior = numbers[0];
let impar = 0;
let menor= numbers[0];
let div= 0;
 
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

for(ipar = 0; ipar < numbers.length; ipar += 1){
    if(numbers[ipar] % 2 !== 0){
        impar += 1;
    }
}

console.log('Temos ' + impar + ' numeros impares nesse array!');

for(iless = 0; iless < numbers.length; iless += 1){
    if(numbers[iless] < menor){
        menor = numbers[iless];
    }
}

console.log('O menor valor é: ' + menor);

let twent = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

console.log(twent);

for(it = 0; it < twent.length; it += 1){
    div = twent[it] % 2;
    console.log(div);
}
