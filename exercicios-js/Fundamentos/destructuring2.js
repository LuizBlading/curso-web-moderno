const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 ,8]
console.log(n1, n3, n5, n6)

// ignora o primeiro array, vai para o segundo, ignora o primeiro valor e pega o segundo, guardando na var nota
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)