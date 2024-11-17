1. (F) (F) (F) (V) (V) (V) (V)

2. Sim, ocorrerá um erro, pois a variável não foi incializada, o que vai resultar
em um erro, ja que sem ser inicializada, seu valor é undefined, e não é possível
fazer operações com undefined.

3. class Hotel {
    quantReservas: number;
    constructor(QuantReservas0: number) {
        this.quantReservas = QuantReservas0;
    }
    adicionarReserva(): void {
        this.quantReservas++;
    }
}
let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas); 

4. O erro de compilação acontece porque não foi passado nenhum parâmetro para
o construtor. A solução é bem simples, basta iniciar o construtor com um valor
padrão. (ex: constructor(volume: number = 0) {...}

5. a. O resultadi dos prints será 90, isso ocorre porque todos estão referenciando
ao mesmo objeto, primeiro todos passam a referenciar ao mesmo objeto, depois uma
operação de saque é feita (100-10 = 90). E depois tenta se fazer uma transferência,
porém, como todos estão referenciando ao mesmo objeto, é como tentar transferir dinheiro
de uma conta para a mesma, portanto, a operação não tem efeito, mantendo o resultado de 90.

b. O objeto para qual c1 apontava inicialmente, não tem mais nada referenciando a ele,
ficando inacessível.
