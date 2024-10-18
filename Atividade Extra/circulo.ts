class Circulo {
    raio: number;
    
    constructor (raio : number){
        this.raio = raio;

    }

    calcularPerimetro(): number {
        return this.raio * 2 * 3.14
    }

    calcularArea (): number {
        return 3.14 * Math.pow(this.raio,2)
    }

}
const meuCirculo = new Circulo(5);
console.log(`A área do círculo é: ${meuCirculo.calcularArea().toFixed(2)} metros quadrados 
e o perímetro é de ${meuCirculo.calcularPerimetro().toFixed(2)}
`);
