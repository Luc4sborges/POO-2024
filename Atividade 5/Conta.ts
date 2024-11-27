class Conta {
    numero: string;
    saldo: number;
    idConta: number;
    cliente: Cliente;

    constructor(numero: string, saldo: number, idConta: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.idConta = idConta
        this.cliente = cliente
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
