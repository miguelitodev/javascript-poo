class Cliente {
	nome;
	cpf;
}

class ContaCorrente {
	agencia;
	// #saldo = 200;
	_saldo = 200;
	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
		}
	}
	depositar(valor) {
		if (valor <= 0) return;
		this._saldo += valor;
	}
}

const cliente1 = new Cliente();
const contaCorrenteMiguel = new ContaCorrente();

cliente1.nome = "Miguel";
cliente1.cpf = 11122233345;

contaCorrenteMiguel.agencia = 1001;
contaCorrenteMiguel.sacar(50);
contaCorrenteMiguel.depositar(50);

console.log(contaCorrenteMiguel);
console.log(cliente1);
