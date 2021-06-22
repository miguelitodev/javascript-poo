export class ContaCorrente {
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
	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}
