export class Banco {
    private contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    // Métodos Públicos
    inserirConta(conta: Conta): void {
    for (let con of this.contas) {
        if (con.getIdConta() === conta.getIdConta()) {
            console.log("Erro: Já existe uma conta com este ID.");
            return;
        }
        if (con.getNumero() === conta.getNumero()) {
            console.log("Erro: Já existe uma conta com este número.");
            return;
        }
    }
    this.contas.push(conta);
    console.log("Conta inserida com sucesso.");
}

    inserirCliente(cliente: Cliente): void {
        for (let cli of this.clientes) {
            if (cli.getIdCliente() === cliente.getIdCliente()) {
                console.log("Erro: Já existe um cliente com este ID.");
                return;
            }
            if (cli.getCpfCliente() === cliente.getCpfCliente()) {
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
        if (conta.getNumero() === numero) {
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
            if (cliente.getCpfCliente() === cpfdoCliente) {
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
            for (let c of cliente.getContasCliente()) {
                if (c.getNumero() === numeroConta) {
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
            return cliente.getContasCliente();
        } else {
            console.log("Cliente não encontrado.");
            return [];
        }
    }

    totalizarSaldoCliente(cpf: string): number {
        let cliente = this.consultarCliente(cpf);
            let somaTotal = 0;
        if (cliente) {
            for (let c of cliente.getContasCliente()) {
                somaTotal += c.getSaldo();
            }
            return somaTotal;
        } else {
            console.log("Cliente não encontrado.");
            return 0;
    }
}

   

    excluir(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndice(numero); 
        if (indiceProcurado !== -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();

            // Encontra o proprietário da conta
            let cliente: Cliente | null = null;
            for (let i = 0; i < this.clientes.length; i++) {
                for (let j = 0; j < this.clientes[i].contasCliente.length; j++) {
                    if (this.clientes[i].contasCliente[j].numero === numero) {
                        cliente = this.clientes[i];
                        break;
                    }
                }
                if (cliente) {
                    break;
                }
            }

            if (cliente) {
                cliente.removerConta(numero);

                // Verifica se o cliente ainda possui contas
                if (cliente.contasCliente.length === 0) {
                    let indiceCliente = -1;
                    for (let i = 0; i < this.clientes.length; i++) {
                        if (this.clientes[i] === cliente) {
                            indiceCliente = i;
                            break;
                        }
                    }

                    if (indiceCliente !== -1) {
                        for (let i = indiceCliente; i < this.clientes.length - 1; i++) {
                            this.clientes[i] = this.clientes[i + 1];
                        }
                        this.clientes.pop();
                    }
                    console.log(`Cliente com CPF ${cliente.cpfCliente} foi excluído por não ter mais contas.`);
                }
            }
            console.log(`Conta número ${numero} excluída com sucesso.`);
        } else {
            console.log("Erro: Conta não encontrada.");
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

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
    let contaDebito = this.consultarConta(numeroDebito);
    let contaCredito = this.consultarConta(numeroCredito);
    if (contaDebito && contaCredito) {
        if (contaDebito.getSaldo() >= valor) {
            contaDebito.sacar(valor);
            contaCredito.depositar(valor);
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

    sacar(numero: string, valor: number): void {
        let conta = this.consultarConta(numero);
        if (conta) {
            if (conta.getSaldo() >= valor) {
                conta.sacar(valor);
                console.log(`Saque de R$${valor} realizado com sucesso.`);
            } else {
                console.log("Erro: Saldo insuficiente.");
            }
        } else {
            console.log("Erro: Conta não encontrada.");
     }
}

    depositar(numero: string, valor: number): void {
        let conta = this.consultarConta(numero);
        if (conta) {
            conta.depositar(valor);
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Conta não encontrada.");
    }
}


    transferirParaVariasContas(numeroDebito: string, numerosCredito: string[], valor: number): void {
    let contaDebito = this.consultarConta(numeroDebito);
    if (contaDebito) {
        let valorTotal = valor * numerosCredito.length;
        if (contaDebito.getSaldo() >= valorTotal) {
            for (let numeroCredito of numerosCredito) {
                let contaCredito = this.consultarConta(numeroCredito);
                if (contaCredito) {
                    contaDebito.sacar(valor);
                    contaCredito.depositar(valor);
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
    mudarTitularidadeConta(numeroConta: string, cpfNovoCliente: string): void {
    let conta = this.consultarConta(numeroConta);
    let novoCliente = this.consultarCliente(cpfNovoCliente);

    if (!conta) {
        console.log("Erro: Conta não encontrada.");
        return;
    }

    if (!novoCliente) {
        console.log("Erro: Novo cliente não encontrado.");
        return;
    }
    let clienteAtual = null;
    for (let cliente of this.clientes) {
        if (cliente.contasCliente.includes(conta)) {
            cliente.removerConta(numeroConta);
            clienteAtual = cliente;
            break;
        }
    }
    novoCliente.adicionarConta(conta);
    console.log(`Conta número ${numeroConta} transferida para o cliente com CPF ${cpfNovoCliente}.`);

    if (clienteAtual && clienteAtual.contasCliente.length === 0) {
        this.excluirCliente(clienteAtual.cpfCliente);
    }
}
    excluirCliente(cpfCliente: string): void {
    let cliente = this.consultarCliente(cpfCliente);
    if (!cliente) {
        console.log("Erro: Cliente não encontrado.");
        return;
    }

    let contasParaExcluir = [...cliente.contasCliente];
    for (let conta of contasParaExcluir) {
        this.excluir(conta.numero);
    }

    let indiceCliente = this.clientes.findIndex(cli => cli.cpfCliente === cpfCliente);
    if (indiceCliente !== -1) {
        this.clientes.splice(indiceCliente, 1);
        console.log(`Cliente com CPF ${cpfCliente} e todas as suas contas foram excluídos.`);
    } else {
        console.log("Erro: Cliente não encontrado na lista.");
    }
}

