class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    public getHora(): number {
        return this.hora;
    }

    public getMinuto(): number {
        return this.minutos;
    }

    public getSegundo(): number {
        return this.segundos;
    }

    public RetornoHora(): string {
        const hh = this.hora < 10 ? '0' + this.hora : this.hora.toString();
        const mm = this.minutos < 10 ? '0' + this.minutos : this.minutos.toString();
        const ss = this.segundos < 10 ? '0' + this.segundos : this.segundos.toString();
        return `${hh}:${mm}:${ss}`;
    }
}
