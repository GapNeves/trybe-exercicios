const a = 35;
const b = 27;

console.log('Adição ' + a + ' + ' + b + ' = ' + ( a + b) );
console.log('Subitração ' + a + ' - ' + b + ' = ' + ( a - b) );
console.log('Multiplicação '  + a + ' * ' + b + ' = ' + ( a * b) );
console.log('Divisão ' + a + ' / ' + b + ' = ' + ( a / b) );
console.log('Módulo ' + a + ' % ' + b + ' = ' + ( a % b) );

const num1 =15;
const num2 =12;
const num3 =27;
let numMaior = '';

if(num1 > num2 && num1 > num3){
    numMaior = num1 + ' é o maior entre os números!';
}
else if(num2 > num1 && num2 > num3){
    numMaior = num2 + ' é o maior entre os números!';
}
else{
    numMaior = num3 + ' é o maior entre os números!';
}
console.log(numMaior);

const inter = 0.35;
let inform = '';

if(inter >= 0){
    inform = inter + ' é positivo!';
}
else{
    inform = inter + ' é negativo!';
}
console.log(inform);
