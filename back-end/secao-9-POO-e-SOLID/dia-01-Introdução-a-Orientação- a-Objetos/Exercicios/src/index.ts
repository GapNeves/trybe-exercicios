//IMPORTAÇÕES:
import Cliente from './cliente';
import Data from './data';
import Estudante from './escola';
import ItemDoPedido from './itemDoPedido';
import Pedido from './pedido';

//ESCOLA:
const estudante1 = new Estudante('1567', 'Gabriel', [7, 8, 9, 5], [9, 6]);
console.log(estudante1);
console.log('Soma das notas: ', estudante1.sumNotas());
console.log('Média das notas: ', estudante1.medNotas());

//LANCHONETE:
const cliente = new Cliente('José');

const coxinha = new ItemDoPedido('coxinha', 3.5);
const pastel = new ItemDoPedido('pastel', 3.5);

const pedido1 = new Pedido(cliente, [coxinha, pastel], 'debito', 0.1);

console.log('\x1b[36m', pedido1);
console.log(pedido1.totalDoPedido());
console.log(pedido1.totalComDesconto());

//DATA
const testDate = new Data(29, 1, 1989);

console.log('\x1b[36m', 'Dia: ', testDate.dia);
console.log('\x1b[36m', 'Mês: ', testDate.mes);
console.log('\x1b[36m', 'Ano: ', testDate.ano);
console.log('\x1b[36m', 'Mês por extenso: ', testDate.getMonthName());
console.log('\x1b[36m', 'É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log('\x1b[36m', testDate.format('dd/mm/aaaa'));
console.log('\x1b[36m', testDate.format('dd-mm-aaaa'));
console.log('\x1b[36m', testDate.format('aaaa/mm/dd'));
console.log('\x1b[36m', testDate.format('aaaa-mm-dd'));
console.log('\x1b[36m', testDate.format('dd de M de aa'));
console.log('\x1b[36m', testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log('\x1b[36m', `A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
// const invalidDate = new Data(31, 2, 2021);

// console.log('Teste data inválida: ', invalidDate);

// formato inválido
// console.log(invalidDate.format('a m d'));
