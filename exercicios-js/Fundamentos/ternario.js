const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //Operador ternario
// Se a condição relacional retornar verdadeiro, retorna Aprovado, se não falso

console.log(resultado(7.1))
console.log(resultado(6.7))

/* outra forma de fazer ainda com return em função arrow
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
} */