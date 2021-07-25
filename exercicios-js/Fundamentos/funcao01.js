// funcao sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2) // soma um numero com um undefined , da um NaN
imprimirSoma(2, 3, 4, 5, 6)
imprimirSoma() // NaN


// Função com retorno
function soma(a, b = 1) // valor b tem o padrao 0 caso nao for passado nenhum valor como parametro
{
    return a + b;
}

console.log(soma(2))
console.log(soma()) // NaN