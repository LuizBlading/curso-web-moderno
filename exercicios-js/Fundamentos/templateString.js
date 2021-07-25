const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!` //Interpolação, quando pega a variavel e interpreta dentro do texto
console.log(concatenacao, template)

// ` template string `

// expressoes...
console.log(`1 + 1 = ${1 + 1}`); // irá somar somente a interpolação dentro do texto com crase 

const up = texto => texto.toUpperCase() // Criando arrow function, onde up é o nome da funcao, e texto é 
// o parametro
console.log(`Ei... ${up('Cuidado')}!`)