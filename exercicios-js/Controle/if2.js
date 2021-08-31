function teste1(num){
    if(num > 7)
        console.log(num);
    
    console.log('Final')
}

// teste1(6)
// teste1(8)

// No js vc pode não usar as {} de bloco no if, porém ele aceita apenas uma sentença

function teste2(num){
    if(num > 7)
        ; // Cuidado com o ;, não usar com as estruturas de controles
    
    // Sentença de bloco separado do if
    {
        console.log(num);
    }
}

teste2(6);
teste2(8);