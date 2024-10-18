class situacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor (valorCreditos: number, valorDebitos: number){
        this.valorCreditos = valorCreditos
        this.valorDebitos = valorDebitos
    }
    calcularSaldo() : number {
    return this.valorCreditos - this.valorDebitos;
    }
}

const meuSaldo = new situacaoFinanceira(1700, 900);
console.log(`O seu saldo bancário atual é de R$${meuSaldo.calcularSaldo().toFixed(2)}`)
