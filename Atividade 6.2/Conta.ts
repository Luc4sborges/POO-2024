export class Conta {
    private idConta: number;
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number) {
        this.idConta = Math.floor(Math.random() * 1000); 
        this.numero = numero;
        this.saldo = saldo;
    }

    getIdConta(): number {
        return this.idConta;
    }

    getNumero(): string {
        return this.numero;
    }

    getSaldo(): number {
        return this.saldo;
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
