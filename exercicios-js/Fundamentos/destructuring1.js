// novo recurso no ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Tire de dentro do objeto pessoa os atributos nome, e idade
console.log(nome,idade)

const { nome: n, idade: i } = pessoa // Tirando os atributos nome e idade, e mudando o nome da variavel para n e i 
console.log(n, i)

const { sobrenome, bemHumorada = "Não existe"} = pessoa 
// Se não houver o atributo no obj, "substitui" por um valor padrão como = true ou = "não existe"
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)