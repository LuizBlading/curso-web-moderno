const escola = "coder";

console.log(escola.charAt(2)); // Mostra a posição do caracter na string |Pegar um caractere dentro da string
console.log(escola.charAt(5)); // Não retorna erro, apenas deixa vazio |Pegar um caractere dentro da string
console.log(escola.charCodeAt(3)); // charCodeAt() retorna o unicode do caractere

console.log(escola.indexOf("o")); // Saber em qual indic se encontra o caractere

console.log(escola.substring(1)); // mostra os a string sem o valor do indice informado
console.log(escola.substring(0, 3)) // Mostra a string com um inicio e um fim, mas não incluindo o valor do indice do segundo valor


console.log("Escola ".concat(escola).concat("!")); // concatenar valores
console.log(escola.replace("e", "3")); // substituindo valores

console.log("Ana,Maria,Pedro".split(", ")) // transformando strings em array