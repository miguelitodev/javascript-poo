import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente();
const contaCorrenteMiguel = new ContaCorrente();
const contaDeTransferencia = new ContaCorrente();

cliente1.nome = "Miguel";
cliente1.cpf = 11122233345;

contaCorrenteMiguel.agencia = 1001;
contaCorrenteMiguel.sacar(50);
contaCorrenteMiguel.depositar(50);

let valor = 200;
contaCorrenteMiguel.transferir(valor, contaDeTransferencia);

console.log(contaCorrenteMiguel);
console.log(cliente1);
