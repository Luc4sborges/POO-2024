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

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return Math.pow(this.getOperando1(), this.getOperando2());
    }
}
const calculadoraCientifica1 = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica1.exponenciar()); 

const calculadoraCientifica2 = new CalculadoraCientifica(5, 2);
console.log(calculadoraCientifica2.exponenciar()); 
