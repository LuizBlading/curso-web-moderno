function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    // Passando direto o valor e executa apenas se for verdade
    if(valor){
        console.log('È verdade...' + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({});