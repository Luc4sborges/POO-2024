class Conta {
    numero: string;
    saldo: number;

   
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    
    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
            return false;
        }
    }

   
    depositar(valor: number): void {
        this.saldo += valor;
    }

   
    consultarSaldo(): number {
        return this.saldo;
    }

    
    transferir(destino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true;
        } else {
            console.log("Transferência não realizada devido a saldo insuficiente.");
            return false;
        }
    }
}


let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);

console.log(`Saldo inicial c1: ${c1.consultarSaldo()}`); 
console.log(`Saldo inicial c2: ${c2.consultarSaldo()}`); 


console.log(`Saque de 50 em c1: ${c1.sacar(50)}`); 
console.log(`Saldo após saque c1: ${c1.consultarSaldo()}`); 


console.log(`Saque de 60 em c1: ${c1.sacar(60)}`); 
console.log(`Saldo após tentativa de saque c1: ${c1.consultarSaldo()}`); 


console.log(`Transferência de 30 de c1 para c2: ${c1.transferir(c2, 30)}`); 
console.log(`Saldo após transferência c1: ${c1.consultarSaldo()}`); 
console.log(`Saldo após transferência c2: ${c2.consultarSaldo()}`); 


console.log(`Transferência de 50 de c1 para c2: ${c1.transferir(c2, 50)}`); 
console.log(`Saldo após tentativa de transferência c1: ${c1.consultarSaldo()}`); 
console.log(`Saldo após tentativa de transferência c2: ${c2.consultarSaldo()}`); 
