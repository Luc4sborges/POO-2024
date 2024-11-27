import { Banco } from './Banco';

let banco = new Banco();
banco.testarTodosOsMetodos();


/* Saída:
--- Teste: Inserir Conta ---
Conta inserida com sucesso.
Conta inserida com sucesso.
Erro: Já existe uma conta com este ID.    
Erro: Já existe uma conta com este número.
--- Teste: Inserir Cliente ---
Cliente inserido com sucesso.
Cliente inserido com sucesso.
Erro: Já existe um cliente com este ID.   
Erro: Já existe um cliente com este CPF.
--- Teste: Consultar Conta ---
Conta { idConta: 949, numero: '111-1', saldo: 1000 }
Conta não encontrada.
undefined
--- Teste: Consultar Cliente ---
Cliente {
  idCliente: 1,
  nomeCliente: 'João Silva',
  cpfCliente: '123.456.789-00',
  dtNasCliente: 1990-01-01T00:00:00.000Z,
  contasCliente: []
}
Cliente não encontrado.
undefined
--- Teste: Associar Conta a Cliente ---
Conta associada ao cliente com sucesso.
A conta já está associada a este cliente.
Conta não encontrada.
Cliente não encontrado.
--- Teste: Listar Contas do Cliente ---
[ Conta { idConta: 949, numero: '111-1', saldo: 1000 } ]
Cliente não encontrado.
Cliente não encontrado.
[]
--- Teste: Totalizar Saldo do Cliente ---
1000
Cliente não encontrado.
Cliente não encontrado.
0
