"use strict";
class Retangulo {
    constructor(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
    ehQuadrado() {
        if (this.l1 === this.l2) {
            return true;
        }
        else {
            return false;
        }
    }
}
const meuRetangulo = new Retangulo(60, 60);
if (meuRetangulo.ehQuadrado()) {
    console.log('Na verdade, isso é um quadrado');
}
else {
    console.log(`A área do retângulo é: ${meuRetangulo.calcularArea()} metros quadrados`);
}
