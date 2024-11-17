class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    ehTriangulo(): boolean {
        const { ladoA, ladoB, ladoC } = this;
        return Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC &&
               Math.abs(ladoA - ladoC) < ladoB && ladoB < ladoA + ladoC &&
               Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB;
    }
    ehIsosceles(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
    }

    ehEquilatero(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.ladoA === this.ladoB && this.ladoB === this.ladoC;
    }
    ehEscaleno(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
    }
}


const triangulo1 = new Triangulo(3, 4, 5);
console.log(`Triangulo 1 - É Triangulo: ${triangulo1.ehTriangulo()}`);
console.log(`Triangulo 1 - É Isosceles: ${triangulo1.ehIsosceles()}`);
console.log(`Triangulo 1 - É Equilatero: ${triangulo1.ehEquilatero()}`);
console.log(`Triangulo 1 - É Escaleno: ${triangulo1.ehEscaleno()}`);

const triangulo2 = new Triangulo(2, 2, 2);
console.log(`Triangulo 2 - É Triangulo: ${triangulo2.ehTriangulo()}`);
console.log(`Triangulo 2 - É Isosceles: ${triangulo2.ehIsosceles()}`);
console.log(`Triangulo 2 - É Equilatero: ${triangulo2.ehEquilatero()}`);
console.log(`Triangulo 2 - É Escaleno: ${triangulo2.ehEscaleno()}`);

const triangulo3 = new Triangulo(2, 2, 3);
console.log(`Triangulo 3 - É Triangulo: ${triangulo3.ehTriangulo()}`);
console.log(`Triangulo 3 - É Isosceles: ${triangulo3.ehIsosceles()}`);
console.log(`Triangulo 3 - É Equilatero: ${triangulo3.ehEquilatero()}`);
console.log(`Triangulo 3 - É Escaleno: ${triangulo3.ehEscaleno()}`);
