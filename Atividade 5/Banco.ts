class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): void {
        for (let con of this.contas){
            if (con.idConta === conta.idConta){
                console.log("Erro: Já existe uma conta com este ID.")
            }
            if (con.numero === conta.numero){
                console.log("Erro: Já existe uma conta com este número.")
            }
        }
        this.contas.push(conta);
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
    
    listarContasCliente(cpf: string): Conta[]{
        let cliente = this.consultarCliente(cpf);
        if (cliente){
            return cliente.contasCliente
            }
        else {
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

}
