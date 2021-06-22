import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Miguel";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteMiguel = new ContaCorrente();
contaCorrenteMiguel.agencia = 1001;
contaCorrenteMiguel.cliente = cliente1;
contaCorrenteMiguel.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteMiguel.tranferir(valor, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);
