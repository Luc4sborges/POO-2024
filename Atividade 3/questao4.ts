function soma(x: number, y?: any): number {
    return x + y
    }
    console.log(soma(1, 2));
    console.log(soma(1, "2"));
    console.log(soma(1));

// No primeiro caso, a soma ocorre normalmente e o resultado é 2,

// No segundo caso, a string "2" é convertida para número e concatenada.

// No terceiro caso, o parâmetro X é fornecido, mas o parâmetro Y não,
// no entando, como o parâmetro y é opcional (y?), ele consta como undefined
// e ao somar um Number com undefined teremos umk NaN
