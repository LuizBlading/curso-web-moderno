const nums = [1,2,3,4,5,6,7,8,9,10];

//  o break interrompe a repetição mais proximo dele
for(let x in nums){
    if(x == 5){
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

// o continue ele pula a repetição atual, indo para a proxima
for(let y in nums){
    if(y == 5){
        continue;
    }
    console.log(`Indice [${y}] = ${nums[y]}`)
}

// Rotulo
// Faz com que possamos fazer o break em um laço de repetição mais externo
// Isso quando temos dois laços de repetição 

// OBS: Evite o uso...
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}

console.log('Fim');