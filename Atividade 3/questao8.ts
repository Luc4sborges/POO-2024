const array = [10,15, 20, 25, 32];
const arrayDobrado = array.map(numero => numero * 2);
let somaTotal = 0;

for (let i = 0; i < arrayDobrado.length; i++) {
    somaTotal += arrayDobrado[i];
}

console.log("Original:", array);                 
console.log("dobrado:", arrayDobrado);           
console.log("Soma total dos elementos dobrados:", somaTotal); 
