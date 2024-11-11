1. Na tipagem estática devemos declarar os tipos das variáveis explicitamente, ja na tipagem dinâmica,
os tipos são inferidos na hora da execução.

2. O principal problema é os erros de tipos so serem descobertos no momento da execução.

3. Um sistema de e-commerce armazena preços como números, mas uma atualização inadvertida armazena um preço como string.
let precoProduto = 50; // Número
precoProduto = "40"; //String
let total = precoProduto + 10; // Problema: resultado é "4010" (concatenação) ao invés de 50 (soma)
console.log(total);

4. Isso acontece porque se atribuirmos um tipo a uma variável que anteriormente foi definida com outro tipo
o C vai fazer uma conversão implícita, exemplo:
#include <stdio.h>
int main(){
float f = 3.14;
int i = f; // Conversão implícita de float para int
printf("Valor de i: %d\n", i); // Resultado: 3 return 0;

5. Não, pois essa é apenas uma característica da linguagem, que facilita a manipulação de números,
jq que dessa forma, não precisamos definir tipos específicos de números para cada caso.

