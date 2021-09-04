function RandomNumber(min, max){
    let valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let contador = true;

while(contador){
    console.log("Hmmm, to pensando em um numero aqui.... \n");

    let resultado = RandomNumber(0, 10);

    if(resultado == 2)
    {
        console.log(`Acertou, pensei no ${resultado}`);
        return false;
    }
}