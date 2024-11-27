import { Conta } from './Conta';
export class Cliente {
    idCliente: number;
    nomeCliente: string;
    cpfCliente: string;
    dtNasCliente: Date;
    contasCliente: Conta[];

    constructor(idCliente: number, nomeCliente: string, cpfCliente: string, dtNasCliente: Date) {
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.dtNasCliente = dtNasCliente;
        this.contasCliente = [];
    }

    adicionarConta(conta: Conta): void {
        this.contasCliente.push(conta);
    }
}
