"use strict";
class situacaoFinanceira {
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
const meuSaldo = new situacaoFinanceira(1700, 900);
console.log(`O seu saldo bancário atual é de R$${meuSaldo.calcularSaldo().toFixed(2)}`);
