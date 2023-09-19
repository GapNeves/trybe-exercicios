import Estudante from './escola';

const estudante1 = new Estudante('1567', 'Gabriel', [7, 8, 9, 5], [9, 6]);
console.log(estudante1);
console.log('Soma das notas: ', estudante1.sumNotas());
console.log('Média das notas: ', estudante1.medNotas());

// const escola1 = new Escola();
// console.log(escola1);
