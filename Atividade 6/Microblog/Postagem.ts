class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0; 
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }
    
    toString(): string {
        return `Postagem: ${this.texto} | Curtidas: ${this.quantidadeCurtidas}`;
    }
}
