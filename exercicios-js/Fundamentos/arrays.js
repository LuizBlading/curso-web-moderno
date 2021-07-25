/*
    - Em JS um arrey é dinamico, não tem um tamanho fixo, logo ela cresce e diminui de acordo 
    com a necessidade. 

    - Indexada, logo ela aceita qualquer tipo, seja number, string, objeto. Porém NÃO é uma boa pratica

    - Quando tentamos acessar um indice que não existe (não te valor indexado nele), ele retorna Undefined
    ao invés de retornar erro.
*/

const valores = [7.7, 8.9, 6.3, 8.7];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[10] = 10;
console.log(valores)
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); // push() adiciona valores no array
console.log(valores);


valores.pop(valores.pop()) // remove o ultimo item do array
console.log(valores)

delete valores[0]; // Serve bem para deletar um atributo de um objeto
console.log(valores);

console.log(typeof valores);