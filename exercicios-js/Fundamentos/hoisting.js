// Jogar a declaração VAR da variavel pra cima/topo

console.log("1 - a = ", a)

var a = 2;

console.log("2 - a = ", a)

// tbm fuciona dentro da funcao

function teste(){
    console.log("b = ",b);
    var b = 3;
    console.log("b = "+b);
}

teste();

/* COm let o hoisting não ocorre

function teste2(){
    console.log("c = ",c);
    let c = 5;
    console.log("c = ",c);
}

teste2(); */