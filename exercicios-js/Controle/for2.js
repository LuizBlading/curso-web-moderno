const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas){
    console.log(`${i} - ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// Percorrendo os valores de um objeto
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// O for IN percorre os atributos de um array ou objeto