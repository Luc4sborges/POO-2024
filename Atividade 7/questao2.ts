class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    soma(): number {
        return this.operando1 + this.operando2;
    }
    getOperando1(): number {
        return this.operando1;
    }
    getOperando2(): number {
        return this.operando2;
    }
}

const calculadora = new Calculadora(5, 10);

console.log(calculadora.soma()); 

console.log(calculadora.getOperando1()); 
console.log(calculadora.getOperando2()); 
