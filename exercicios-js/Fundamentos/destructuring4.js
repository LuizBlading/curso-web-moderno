function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] //O que é minimo passa a ser maximo, e o que é maximo passa a ser minimo
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([922]))
console.log(rand([,10]))
console.log(rand([])) // Usa os parametros padrões
console.log(rando()) // da erro. pq tenta desestruturar algo que é vazio ou null