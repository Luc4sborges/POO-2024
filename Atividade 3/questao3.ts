function ArrayParaString(numeros: number[]): string {
    let resultado = "";
    numeros.forEach((numero, index) => {
        resultado += numero; 
        if (index < numeros.length - 1) {
            resultado += "-"; 
        }
    });

    return resultado;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30];
console.log(ArrayParaString(array1));  
console.log(ArrayParaString(array2));
