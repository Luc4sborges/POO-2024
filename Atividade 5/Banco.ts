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


//Testes abaixos gerados por IA

    testarTodosOsMetodos() {
        console.log('--- Teste: Inserir Conta ---');
        let conta1 = new Conta('111-1', 1000);
        let conta2 = new Conta('222-2', 2000);
        let contaDuplicadaID = new Conta('333-3', 3000);
        contaDuplicadaID.idConta = conta1.idConta; // Supondo que idConta é um campo único e já existe uma conta com idConta
        let contaDuplicadaNumero = new Conta('111-1', 4000);

        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(contaDuplicadaID);  // Deve exibir erro de ID duplicado
        this.inserirConta(contaDuplicadaNumero);  // Deve exibir erro de número duplicado

        console.log('--- Teste: Inserir Cliente ---');
        let cliente1 = new Cliente(1, 'João Silva', '123.456.789-00', new Date('1990-01-01'));
        let cliente2 = new Cliente(2, 'Maria Souza', '987.654.321-00', new Date('1985-05-15'));
        let clienteDuplicadoID = new Cliente(1, 'Pedro Almeida', '111.222.333-44', new Date('1975-03-20'));
        let clienteDuplicadoCPF = new Cliente(3, 'Ana Clara', '123.456.789-00', new Date('1992-07-11'));

        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);
        this.inserirCliente(clienteDuplicadoID); // Deve exibir erro de ID duplicado
        this.inserirCliente(clienteDuplicadoCPF); // Deve exibir erro de CPF duplicado

        console.log('--- Teste: Consultar Conta ---');
        console.log(this.consultarConta('111-1')); // Deve retornar e exibir a conta encontrada
        console.log(this.consultarConta('333-3')); // Deve exibir "Conta não encontrada."

        console.log('--- Teste: Consultar Cliente ---');
        console.log(this.consultarCliente('123.456.789-00')); // Deve retornar e exibir o cliente encontrado
        console.log(this.consultarCliente('000.000.000-00')); // Deve exibir "Cliente não encontrado."

        console.log('--- Teste: Associar Conta a Cliente ---');
        this.associarContaCliente('111-1', '123.456.789-00'); // Deve associar a conta ao cliente
        this.associarContaCliente('111-1', '123.456.789-00'); // Deve informar que a conta já está associada
        this.associarContaCliente('333-3', '123.456.789-00'); // Deve exibir "Conta não encontrada."
        this.associarContaCliente('111-1', '000.000.000-00'); // Deve exibir "Cliente não encontrado."

        console.log('--- Teste: Listar Contas do Cliente ---');
        console.log(this.listarContasCliente('123.456.789-00')); // Deve retornar e exibir as contas associadas ao cliente
        console.log(this.listarContasCliente('000.000.000-00')); // Deve exibir "Cliente não encontrado." e retornar []

        console.log('--- Teste: Totalizar Saldo do Cliente ---');
        console.log(this.totalizarSaldoCliente('123.456.789-00')); // Deve retornar e exibir o saldo total das contas do cliente
        console.log(this.totalizarSaldoCliente('000.000.000-00')); // Deve exibir "Cliente não encontrado." e retornar 0
    }
    
}
