import prompt from 'prompt-sync';
import { Conta, Cliente, Banco } from './banco';

class ClassApp {
    input = prompt();
    banco = new Banco();

    iniciar(): void {
        let opcao: string = '';

        do {
            console.log('\nBem-vindo');
            let tipoUsuario = this.input('Você é (1) Banco ou (2) Cliente? ');

            if (tipoUsuario === '1') {
                this.menuBanco();
            } else if (tipoUsuario === '2') {
                this.menuCliente();
            }

            this.input("Operação finalizada. Digite <enter> para continuar...");
        } while (opcao != "0");

        console.log("Aplicação encerrada");
    }

    menuBanco(): void {
        console.log('\nOperações do Banco:');
        console.log('1 - Inserir conta');
        console.log('2 - Consultar conta');
        console.log('3 - Quantidade de contas');
        console.log('4 - Total de dinheiro no banco');
        console.log('5 - Média do saldo das contas');
        console.log('6 - Inserir cliente');
        console.log('7 - Consultar cliente');
        console.log('8 - Associar conta a cliente');
        console.log('9 - Listar contas de um cliente');
        console.log('10 - Totalizar saldo de um cliente');
        console.log('11 - Listar contas sem cliente e atribuir um cliente');
        console.log('12 - Excluir cliente');
        console.log('13 - Mudar titularidade da conta');
        console.log('0 - Sair');
        let opcao = this.input("Opção: ");

        switch (opcao) {
            case "1":
                this.inserirConta();
                break;
            case "2":
                this.consultarConta();
                break;
            case "3":
                this.quantidadeDeContas();
                break;
            case "4":
                this.totalDeDinheiroDepositadoNoBanco();
                break;
            case "5":
                this.mediaDoSaldoDasContas();
                break;
            case "6":
                this.inserirCliente();
                break;
            case "7":
                this.consultarCliente();
                break;
            case "8":
                this.associarContaCliente();
                break;
            case "9":
                this.listarContasCliente();
                break;
            case "10":
                this.totalizarSaldoCliente();
                break;
            case "11":
                this.listarContasSemCliente();
                break;
            case "12":
                this.excluirCliente();
                break;
            case "13":
                this.mudarTitularidadeConta();
                break;
        }
    }

    menuCliente(): void {
        console.log('\nOperações do Cliente:');
        console.log('1 - Sacar');
        console.log('2 - Depositar');
        console.log('3 - Excluir conta');
        console.log('4 - Transferir');
        console.log('5 - Transferir para várias contas');
        console.log('0 - Sair');
        let opcao = this.input("Opção: ");

        switch (opcao) {
            case "1":
                this.sacar();
                break;
            case "2":
                this.depositar();
                break;
            case "3":
                this.excluirConta();
                break;
            case "4":
                this.transferir();
                break;
            case "5":
                this.transferirParaVariasContas();
                break;
        }
    }

    inserirConta(): void {
        console.log("\nCadastrar conta\n");
        let numero: string = this.input('Digite o número da conta:');
        let saldo: number = parseFloat(this.input('Digite o saldo inicial:'));
        let conta: Conta = new Conta(numero, saldo);
        this.banco.inserirConta(conta);
    }

    consultarConta(): void {
        console.log("\nConsultar conta\n");
        let numero: string = this.input('Digite o número da conta:');
        let conta = this.banco.consultarConta(numero);
        if (conta) {
            console.log(`Número: ${conta.numero}, Saldo: ${conta.saldo}`);
        }
    }

    quantidadeDeContas(): void {
        console.log(`Quantidade de contas: ${this.banco.quantidadeDeContas()}`);
    }

    totalDeDinheiroDepositadoNoBanco(): void {
        console.log(`Total de dinheiro no banco: R$${this.banco.totalDeDinheiroDepositadoNoBanco()}`);
    }

    mediaDoSaldoDasContas(): void {
        console.log(`Média do saldo das contas: R$${this.banco.mediaDoSaldoDasContas()}`);
    }

    inserirCliente(): void {
        console.log("\nCadastrar cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        let cliente: Cliente = new Cliente(cpf);
        this.banco.inserirCliente(cliente);
    }

    consultarCliente(): void {
        console.log("\nConsultar cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        let cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            console.log(`CPF: ${cliente.cpfCliente}, Contas: ${cliente.contasCliente.map(conta => conta.numero).join(', ')}`);
        }
    }

    associarContaCliente(): void {
        console.log("\nAssociar conta a cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        let numero: string = this.input('Digite o número da conta:');
        this.banco.associarContaCliente(numero, cpf);
    }

    listarContasCliente(): void {
        console.log("\nListar contas de um cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        let contas = this.banco.listarContasCliente(cpf);
        if (contas.length > 0) {
            contas.forEach(conta => console.log(`Número: ${conta.numero}, Saldo: ${conta.saldo}`));
        }
    }

    totalizarSaldoCliente(): void {
        console.log("\nTotalizar saldo de um cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        let total = this.banco.totalizarSaldoCliente(cpf);
        console.log(`Total do saldo das contas do cliente: R$${total}`);
    }

    listarContasSemCliente(): void {
        console.log("\nListar contas sem cliente e atribuir titularidade\n");
        let contasSemCliente: Conta[] = [];
        
        for (let i = 0; i < this.banco.contas.length; i++) {
            let contaTemCliente = false;
            for (let j = 0; j < this.banco.clientes.length; j++) {
                for (let k = 0; k < this.banco.clientes[j].contasCliente.length; k++) {
                    if (this.banco.clientes[j].contasCliente[k] === this.banco.contas[i]) {
                        contaTemCliente = true;
                        break;
                    }
                }
                if (contaTemCliente) {
                    break;
                }
            }
            if (!contaTemCliente) {
                contasSemCliente.push(this.banco.contas[i]);
            }
        }

        if (contasSemCliente.length === 0) {
            console.log("Não há contas sem cliente.");
            return;
        }

        console.log("Contas sem cliente:");
        for (let i = 0; i < contasSemCliente.length; i++) {
            console.log(`Número: ${contasSemCliente[i].numero}, Saldo: ${contasSemCliente[i].saldo}`);
        }

        let numeroConta: string = this.input('Digite o número da conta que deseja atribuir titularidade:');
        let cpfCliente: string = this.input('Digite o CPF do cliente para atribuir a conta:');

        let contaSelecionada: Conta | null = null;
        for (let i = 0; i < contasSemCliente.length; i++) {
            if (contasSemCliente[i].numero === numeroConta) {
                contaSelecionada = contasSemCliente[i];
                break;
            }
        }

        let cliente = this.banco.consultarCliente(cpfCliente);

        if (contaSelecionada && cliente) {
            cliente.adicionarConta(contaSelecionada);
            console.log(`Conta ${numeroConta} atribuída ao cliente com CPF ${cpfCliente} com sucesso.`);
        } else {
            console.log("Erro: Conta ou cliente não encontrados.");
        }
    }

    excluirConta(): void {
        console.log("\nExcluir conta\n");
        let numero: string = this.input('Digite o número da conta:');
        this.banco.excluir(numero);
    }

    excluirCliente(): void {
        console.log("\nExcluir cliente\n");
        let cpf: string = this.input('Digite o CPF do cliente:');
        this.banco.excluirCliente(cpf);
    }

    mudarTitularidadeConta(): void {
        console.log("\nMudar titularidade de uma conta\n");
        let numeroConta: string = this.input('Digite o número da conta:');
        let cpfNovoCliente: string = this.input('Digite o CPF do novo cliente:');
        this.banco.mudarTitularidadeConta(numeroConta, cpfNovoCliente);
    }


    sacar(): void {
        console.log("\nSacar\n");
        let numero: string = this.input('Digite o número da conta:');
        let valor: number = parseFloat(this.input('Digite o valor do saque:'));
        this.banco.sacar(numero, valor);
    }

    depositar(): void {
        console.log("\nDepositar\n");
        let numero: string = this.input('Digite o número da conta:');
        let valor: number = parseFloat(this.input('Digite o valor do depósito:'));
        this.banco.depositar(numero, valor);
    }


    transferir(): void {
        console.log("\nTransferir\n");
        let numeroDebito: string = this.input('Digite o número da conta de débito:');
        let numeroCredito: string = this.input('Digite o número da conta de crédito:');
        let valor: number = parseFloat(this.input('Digite o valor da transferência:'));
        this.banco.transferir(numeroCredito, numeroDebito, valor);
    }

    transferirParaVariasContas(): void {
        console.log("\nTransferir para várias contas\n");
        let numeroDebito: string = this.input('Digite o número da conta de débito:');
        let numerosCredito: string[] = this.input('Digite os números das contas de crédito separados por vírgula:').split(',');
        let valor: number = parseFloat(this.input('Digite o valor da transferência para cada conta:'));
        this.banco.transferirParaVariasContas(numeroDebito, numerosCredito, valor);
    }
}

const appClientes = new ClassApp();
appClientes.iniciar();
