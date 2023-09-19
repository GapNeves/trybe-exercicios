import Cliente from './cliente';
import Estudante from './escola';
import ItemDoPedido from './itemDoPedido';
import Pedido from './pedido';

const estudante1 = new Estudante('1567', 'Gabriel', [7, 8, 9, 5], [9, 6]);
console.log(estudante1);
console.log('Soma das notas: ', estudante1.sumNotas());
console.log('Média das notas: ', estudante1.medNotas());

const cliente = new Cliente('José');

const coxinha = new ItemDoPedido('coxinha', 3.5);
const pastel = new ItemDoPedido('pastel', 3.5);

const pedido1 = new Pedido(cliente, [coxinha, pastel], 'debito', 0.1);

console.log('\x1b[36m', pedido1);
console.log(pedido1.totalDoPedido());
console.log(pedido1.totalComDesconto());

// const escola1 = new Escola();
// console.log(escola1);
