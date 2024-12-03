import { Cliente } from './Cliente';
import { Conta } from './Conta';

export class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): void {
        for (let con of this.contas){
            if (con.idConta === conta.idConta){
                console.log("Erro: Já existe uma conta com este ID.");
                return;
            }
            if (con.numero === conta.numero){
                console.log("Erro: Já existe uma conta com este número.");
                return;
            }
        }
        this.contas.push(conta);
        console.log("Conta inserida com sucesso.");
    }

    inserirCliente(cliente: Cliente): void {
        for (let cli of this.clientes) {
            if (cli.idCliente === cliente.idCliente) {
                console.log("Erro: Já existe um cliente com este ID.");
                return;
            }
            if (cli.cpfCliente === cliente.cpfCliente) {
                console.log("Erro: Já existe um cliente com este CPF.");
                return;
            }
        }
        this.clientes.push(cliente);
        console.log("Cliente inserido com sucesso.");
    }

    consultarConta(numero: string): Conta | void {
        let contaProcurada: Conta | undefined;
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                contaProcurada = conta;
                break;
            }
        }
        if (contaProcurada) {
            return contaProcurada;
        } else {
            console.log("Conta não encontrada.");
        }
    }

    consultarCliente(cpfdoCliente: string): Cliente | void {
        let clienteProcurado: Cliente | undefined;
        for (let cliente of this.clientes) {
            if (cliente.cpfCliente === cpfdoCliente) {
                clienteProcurado = cliente;
                break;
            }
        }
        if (clienteProcurado) {
            return clienteProcurado;
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let conta = this.consultarConta(numeroConta);
        let cliente = this.consultarCliente(cpfCliente);
        if (conta && cliente) {
            let contaJaAssociada = false;
            for (let c of cliente.contasCliente) {
                if (c.numero === numeroConta) {
                    contaJaAssociada = true;
                    break;
                }
            }
            if (contaJaAssociada) {
                console.log("A conta já está associada a este cliente.");
            } else {
                cliente.adicionarConta(conta);
                console.log("Conta associada ao cliente com sucesso.");
            }
        }
    }

    listarContasCliente(cpf: string): Conta[] {
        let cliente = this.consultarCliente(cpf);
        if (cliente) {
            return cliente.contasCliente;
        } else {
            console.log("Cliente não encontrado.");
            return [];
        }
    }

    totalizarSaldoCliente(cpf: string): number {
        let cliente = this.consultarCliente(cpf);
        let somaTotal = 0;
        if (cliente) {
            for (let c of cliente.contasCliente) {
                somaTotal += c.saldo;
            }
            return somaTotal;
        } else {
            console.log("Cliente não encontrado.");
            return 0;
        }
    }

    consultarPorIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero == numero) {
        indice = i;
        break;
        }
        }
        return indice;
        }
    
    excluir(numero: string): void {
    let indiceProcurado: number = this.consultarPorIndice(numero); 
    if (indiceProcurado !== -1) {
        for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop(); 
         }
    }

    alterar(conta: Conta): void {
        let indiceProcurado: number = this.consultarPorIndice(conta.numero);
        if (indiceProcurado !== -1) {
            this.contas[indiceProcurado] = conta;
        } else {
            console.log("Conta não encontrada.");
        }
    }

    sacar(numero: string, valor: number): void {
        let conta: Conta | void = this.consultarConta(numero); 
        if (conta) { 
            if (conta.saldo >= valor) { 
                conta.saldo -= valor; 
                console.log(`Saque de R$${valor} realizado com sucesso.`);
            } else {
                console.log("Erro: Saldo insuficiente.");
            }
        } else {
            console.log("Erro: Conta não encontrada.");
        }
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta | void = this.consultarConta(numero);
        if (conta) {
            conta.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        let contaDebito: Conta | void = this.consultarConta(numeroDebito);
        let contaCredito: Conta | void = this.consultarConta(numeroCredito);
        if (contaDebito && contaCredito) {
            if (contaDebito.saldo >= valor) {  
                this.sacar(numeroDebito, valor);
                contaCredito.saldo += valor;
                console.log(`Transferência de R$${valor} realizada com sucesso.`);
            } else {
                console.log("Erro: Saldo insuficiente na conta de débito.");
            }
        } else {
            if (!contaDebito) {
                console.log("Erro: Conta de débito não encontrada.");
            }
            if (!contaCredito) {
                console.log("Erro: Conta de crédito não encontrada.");
            }
        }
    }
    
    transferirParaVariasContas(numeroDebito: string, numerosCredito: string[], valor: number): void {
        let contaDebito: Conta | void = this.consultarConta(numeroDebito);
        if (contaDebito) {
            let valorTotal = valor * numerosCredito.length;
            if (contaDebito.saldo >= valorTotal) {
                for (let numeroCredito of numerosCredito) {
                    let contaCredito: Conta | void = this.consultarConta(numeroCredito);
                    if (contaCredito) {
                        this.sacar(numeroDebito, valor);
                        contaCredito.saldo += valor;
                        console.log(`Transferência de R$${valor} para conta ${numeroCredito} realizada com sucesso.`);
                    } else {
                        console.log(`Erro: Conta de crédito ${numeroCredito} não encontrada.`);
                    }
                }
            } else {
                console.log("Erro: Saldo insuficiente na conta de débito para todas as transferências.");
            }
        } else {
            console.log("Erro: Conta de débito não encontrada.");
        }
    }

    quantidadeDeContas(): number { 
        return this.contas.length;
    }

    totalDeDinheiroDepositadoNoBanco(): number {
        let total = 0;
        for (let i = 0; i < this.contas.length; i++) {
            total += this.contas[i].saldo;
        }
        return total;
    }

    mediaDoSaldoDasContas(): number {
        let quantidade = this.quantidadeDeContas();
        let total = this.totalDeDinheiroDepositadoNoBanco();
        if (quantidade === 0) {
            return 0; 
        }
        return total / quantidade;
    }
