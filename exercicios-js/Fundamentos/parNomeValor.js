// par noe/valor
const saudacao = "Opa" // Contexto lexico 1 

function exec(){
    const saudacao = 'faala' // COntexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)