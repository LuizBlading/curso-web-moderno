const funcs = [];

for(var i = 0; i<10; i++){
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

// Como var nao tem escopo de bloco, ao tentar acessar ao indice do arrey no loop, 
// ele ira sempre imprimir 10,por que ele não respeita o laço de repetição