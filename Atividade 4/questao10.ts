class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(outroJogador: Jogador): void {
        if (!outroJogador.estaVivo()) {
            console.log(`${outroJogador.toString()} já está morto. Não pode ser atacado.`);
            return;
        }
        const dano = this.calcularAtaque();
        outroJogador.pontos -= dano;
        console.log(`${this.toString()} atacou ${outroJogador.toString()} causando ${dano} de dano.`);
    }

    estaVivo(): boolean {
        return this.pontos > 0;
    }


    toString(): string {
        return `Jogador [Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos}]`;
    }
}

const jogador1 = new Jogador(10, 2, 100);
const jogador2 = new Jogador(8, 3, 90);

console.log(jogador1.toString()); 
console.log(jogador2.toString()); 

jogador1.atacar(jogador2);
console.log(jogador2.toString()); 
jogador2.atacar(jogador1);
console.log(jogador1.toString()); 

console.log(`Jogador1 está vivo: ${jogador1.estaVivo()}`);
console.log(`Jogador2 está vivo: ${jogador2.estaVivo()}`); 

if (jogador1.pontos > jogador2.pontos) {
    console.log(`Jogador1 tem mais pontos: ${jogador1.pontos}`);
} else if (jogador2.pontos > jogador1.pontos) {
    console.log(`Jogador2 tem mais pontos: ${jogador2.pontos}`);
} else {
    console.log("Ambos os jogadores têm o mesmo número de pontos.");
}
