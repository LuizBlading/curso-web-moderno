// O let executa apenas em escopo local. Diferente do Var que permite o global.
/* ISso significa que o let sempre prioriza o escopo "mais próximo",caso não encontrar
    a "variavel" dentro do escopo, ele vai para a proxima
*/

/* -> Com a palavra reservada Var, a variavel tem escopo global, escopo de função.
   -> COm a palavra reservada Let, a variavel tem escopo global, escopo de função e escopo de bloco
*/

var numero = 1;

{
    let numero = 2
    console.log("dentro = ", numero) 
}

console.log("fora = ", numero)