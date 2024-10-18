class Retangulo {
    l1: number;
    l2: number;

    constructor(l1: number, l2: number) {
        this.l1 = l1;
        this.l2 = l2;
    }

    calcularArea(): number {
        return this.l1 * this.l2;
    }
}
const meuRetangulo = new Retangulo(100, 60);

console.log(`A área do retângulo é: ${meuRetangulo.calcularArea()} metros quadrados`)
