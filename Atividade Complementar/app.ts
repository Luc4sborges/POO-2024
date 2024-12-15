import prompt from 'prompt-sync';
import { Conta, Cliente, Banco } from './banco';

let input = prompt();
let banco = new Banco();
let opcao: string = '';

do {
    console.log('\nBem-vindo');
    let tipoUsuario = input('Você é (1) Banco ou (2) Cliente? ');

    if (tipoUsuario === '1') {
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
        console.log('11 - Listar contas sem cliente e atribuir um cliente')
        console.log('12 - Excluir cliente')
        console.log('13 - Mudar titularidade da conta')
        console.log('0 - Sair');
        opcao = input("Opção: ");

        switch (opcao) {
            case "1":
                inserirConta();
                break;
            case "2":
                consultarConta();
                break;
            case "3":
                quantidadeDeContas();
                break;
            case "4":
                totalDeDinheiroDepositadoNoBanco();
                break;
            case "5":
                mediaDoSaldoDasContas();
                break;
            case "6":
                inserirCliente();
                break;
            case "7":
                consultarCliente();
                break;
            case "8":
                associarContaCliente();
                break;
            case "9":
                listarContasCliente();
                break;
            case "10":
                totalizarSaldoCliente();
                break;
            case "11":
                listarContasSemCliente();
                break;
            case "12":
                excluirCliente();
                break;
            case "13":
                mudarTitularidadeConta();
                break;
        }
    } else if (tipoUsuario === '2') {
        console.log('\nOperações do Cliente:');
        console.log('1 - Sacar');
        console.log('2 - Depositar');
        console.log('3 - Excluir conta');
        console.log('4 - Transferir');
        console.log('5 - Transferir para várias contas');
        console.log('0 - Sair');
        opcao = input("Opção: ");

        switch (opcao) {
            case "1":
                sacar();
                break;
            case "2":
                depositar();
                break;
            case "3":
                excluirConta();
                break;
            case "4":
                transferir();
                break;
            case "5":
                transferirParaVariasContas();
                break;
        }
    }

    input("Operação finalizada. Digite <enter> para continuar...");
} while (opcao != "0");

console.log("Aplicação encerrada");

// Funções para operações do banco
function inserirConta(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let saldo: number = parseFloat(input('Digite o saldo inicial:'));
    let conta: Conta = new Conta(numero, saldo);
    banco.inserirConta(conta);
}

function consultarConta(): void {
    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta = banco.consultarConta(numero);
    if (conta) {
        console.log(`Número: ${conta.numero}, Saldo: ${conta.saldo}`);
    }
}

function quantidadeDeContas(): void {
    console.log(`Quantidade de contas: ${banco.quantidadeDeContas()}`);
}

function totalDeDinheiroDepositadoNoBanco(): void {
    console.log(`Total de dinheiro no banco: R$${banco.totalDeDinheiroDepositadoNoBanco()}`);
}

function mediaDoSaldoDasContas(): void {
    console.log(`Média do saldo das contas: R$${banco.mediaDoSaldoDasContas()}`);
}

function inserirCliente(): void {
    console.log("\nCadastrar cliente\n");
    let cpf: string = input('Digite o CPF do cliente:');
    let cliente: Cliente = new Cliente(cpf);
    banco.inserirCliente(cliente);
}

function consultarCliente(): void {
    console.log("\nConsultar cliente\n");
    let cpf: string = input('Digite o CPF do cliente:');
    let cliente = banco.consultarCliente(cpf);
    if (cliente) {
        console.log(`CPF: ${cliente.cpfCliente}, Contas: ${cliente.contasCliente.map(conta => conta.numero).join(', ')}`);
    }
}

function associarContaCliente(): void {
    console.log("\nAssociar conta a cliente\n");
    let cpf: string = input('Digite o CPF do cliente:');
    let numero: string = input('Digite o número da conta:');
    banco.associarContaCliente(numero, cpf);
}

function listarContasCliente(): void {
    console.log("\nListar contas de um cliente\n");
    let cpf: string = input('Digite o CPF do cliente:');
    let contas = banco.listarContasCliente(cpf);
    if (contas.length > 0) {
        contas.forEach(conta => console.log(`Número: ${conta.numero}, Saldo: ${conta.saldo}`));
    }
}

function totalizarSaldoCliente(): void {
    console.log("\nTotalizar saldo de um cliente\n");
    let cpf: string = input('Digite o CPF do cliente:');
    let total = banco.totalizarSaldoCliente(cpf);
    console.log(`Total do saldo das contas do cliente: R$${total}`);
}

// Funções para operações dos clientes
function sacar(): void {
    console.log("\nSacar\n");
    let numero: string = input('Digite o número da conta:');
    let valor: number = parseFloat(input('Digite o valor do saque:'));
    banco.sacar(numero, valor);
}

function depositar(): void {
    console.log("\nDepositar\n");
    let numero: string = input('Digite o número da conta:');
    let valor: number = parseFloat(input('Digite o valor do depósito:'));
    banco.depositar(numero, valor);
}

function excluirConta(): void {
    console.log("\nExcluir conta\n");
    let numero: string = input('Digite o número da conta:');
    banco.excluir(numero);
}

function excluirCliente(): void {
    console.log("\nExcluir conta\n");
    let cpf: string = input('Digite o CPF do cliente:');
    banco.excluirCliente(cpf);
}

function transferir(): void {
    console.log("\nTransferir\n");
    let numeroDebito: string = input('Digite o número da conta de débito:');
    let numeroCredito: string = input('Digite o número da conta de crédito:');
    let valor: number = parseFloat(input('Digite o valor da transferência:'));
    banco.transferir(numeroCredito, numeroDebito, valor);
}

function transferirParaVariasContas(): void {
    console.log("\nTransferir para várias contas\n");
    let numeroDebito: string = input('Digite o número da conta de débito:');
    let numerosCredito: string[] = input('Digite os números das contas de crédito separados por vírgula:').split(',');
    let valor: number = parseFloat(input('Digite o valor da transferência para cada conta:'));
    banco.transferirParaVariasContas(numeroDebito, numerosCredito, valor);
}

function listarContasSemCliente(): void {
    console.log("\nListar contas sem cliente e atribuir titularidade\n");
    let contasSemCliente: Conta[] = [];
    
    for (let i = 0; i < banco.contas.length; i++) {
        let contaTemCliente = false;
        for (let j = 0; j < banco.clientes.length; j++) {
            for (let k = 0; k < banco.clientes[j].contasCliente.length; k++) {
                if (banco.clientes[j].contasCliente[k] === banco.contas[i]) {
                    contaTemCliente = true;
                    break;
                }
            }
            if (contaTemCliente) {
                break;
            }
        }
        if (!contaTemCliente) {
            contasSemCliente.push(banco.contas[i]);
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
    let numeroConta: string = input('Digite o número da conta que deseja atribuir titularidade:');
    let cpfCliente: string = input('Digite o CPF do cliente para atribuir a conta:');

    let contaSelecionada: Conta | null = null
    for (let i = 0; i < contasSemCliente.length; i++) {
        if (contasSemCliente[i].numero === numeroConta) {
            contaSelecionada = contasSemCliente[i];
            break;
        }
    }
    let cliente = banco.consultarCliente(cpfCliente);
    if (contaSelecionada && cliente) {
        cliente.adicionarConta(contaSelecionada);
        console.log(`Conta ${numeroConta} atribuída ao cliente com CPF ${cpfCliente} com sucesso.`);
    } else {
        console.log("Erro: Conta ou cliente não encontrados.");
    }
}

function mudarTitularidadeConta(): void {
    console.log("\nMudar titularidade de uma conta\n");
    let numeroConta: string = input('Digite o número da conta:');
    let cpfNovoCliente: string = input('Digite o CPF do novo cliente:');
    banco.mudarTitularidadeConta(numeroConta, cpfNovoCliente);
}
