"use strict";
class Retangulo {
    constructor(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
}
const meuRetangulo = new Retangulo(100, 60);
console.log(`A área do retângulo é: ${meuRetangulo.calcularArea()} metros quadrados`);
