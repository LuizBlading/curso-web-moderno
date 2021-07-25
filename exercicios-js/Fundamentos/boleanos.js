let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo) // Colocado a exclamação 2x, ele faz o "não não", que é voltar para o valor origina

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' '); //espaço vazio
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)) // verifica se o resultado (true) é resolvido para verdadeiro. 


console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar");
console.log(!!('' || null || '0' || ' ')); // retorna true
console.log(!!('' && 'epa')); // retorna false

// valor padrão para var

let nome = '';

console.log(nome || 'Desconhecido') // valor padrao para variavel
