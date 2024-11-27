export class Conta {
    idConta: number;
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.idConta = Math.floor(Math.random() * 1000); // Supondo que cada conta tenha um ID único gerado aleatoriamente
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

