class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    adicionarPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }
    
    consultarIndice(id: number): number {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === id) {
                return i;
            }
        }
        return -1; 
    }

    excluirPostagem(id: number): void {
        let indice = this.consultarIndice(id);
        if (indice !== -1) {
            for (let i = indice; i < this.postagens.length - 1; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
            console.log(`Postagem com id ${id} excluída com sucesso.`);
        } else {
            console.log(`Postagem com id ${id} não encontrada.`);
        }
    }

    postagemMaisCurtida(): Postagem | void {
        if (this.postagens.length === 0) {
            console.log("Nenhuma postagem encontrada.");
            return;
        }
        
        let maisCurtida = this.postagens[0];
        for (let postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    }

    curtirPostagem(id: number): void {
        let indice = this.consultarIndice(id);
        if (indice !== -1) {
            this.postagens[indice].curtir();
            console.log(`Postagem com id ${id} curtida com sucesso.`);
        } else {
            console.log(`Postagem com id ${id} não encontrada.`);
        }
    }

    toString(): string {
        return this.postagens.map(postagem => postagem.toString()).join('\n');
    }
}
