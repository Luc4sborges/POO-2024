class Equipamento {
    ligado: boolean;

    constructor() {
        this.ligado = false; 
    }


    liga(): void {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Equipamento ligado.");
        } else {
            console.log("Equipamento já está ligado.");
        }
    }

    desliga(): void {
        if (this.ligado) { 
            this.ligado = false;
            console.log("Equipamento desligado.");
        } else {
            console.log("Equipamento já está desligado.");
        }
    }

    inverte(): void {
        this.ligado = !this.ligado;
        if (this.ligado) {
            console.log("Equipamento ligado.");
        } else {
            console.log("Equipamento desligado.");
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

const equipamento = new Equipamento();

equipamento.liga(); 
equipamento.desliga(); 
equipamento.inverte(); 
 

console.log(`Equipamento está ligado: ${equipamento.estaLigado()}`); 
