const funcs = [];

for(let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

// Com o let, a função lembra qual era o valor de i no momento da iteração.
// Algo que não acontece ao usar o var. Ele só pega o ultimo valor quando saiu da funcao