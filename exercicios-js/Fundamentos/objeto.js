// Um objet em js é um conjunto de chave e valor
// A Chave significa que ela é unica, não se repete. 
// Ou seja, não pode ter dois atributos com o mesmo nome

const prod1 = {}; // de forma literal

// Criou obj vazio, e foi atribuindo dinamicamente
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4990.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributoscom espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.00
}

console.log(prod2)