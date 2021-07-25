let a = 3 // local, dentro do arquivo

global.b = 123
this.c = 456 // exporta para fora do arquivo (global) 
this.d = false
this.e = "teste"

// o this é a mesma coisa que o module.exports

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // mostra em formato de objeto como no exemplo abaixo

// Criando uma variavel maluca: sem var e sem let!
abc = 3; // Não faça isso!!! Acaba criando a variavel no escopo global
console.log(global.abc)
// module.exports = { e: 456, f: false, g: 'teste}