export class Cliente {
    private idCliente: number;
    private cpfCliente: string;
    private contasCliente: Conta[];

    constructor(cpfCliente: string) {
        this.idCliente = Math.floor(Math.random() * 1000); 
        this.cpfCliente = cpfCliente;
        this.contasCliente = [];
    }

    getIdCliente(): number {
        return this.idCliente;
    }

    getCpfCliente(): string {
        return this.cpfCliente;
    }

    getContasCliente(): Conta[] {
        return this.contasCliente;
    }

    adicionarConta(conta: Conta): void {
        this.contasCliente.push(conta);
    }

    removerConta(numeroConta: string): void {
        this.contasCliente = this.contasCliente.filter(conta => conta.getNumero() !== numeroConta);
    }
}
