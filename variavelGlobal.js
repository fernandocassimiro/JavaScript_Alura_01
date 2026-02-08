// Variável global
var fora = 'Estou fora (var)';

if (true) {
    var dentro = 'Estou dentro (var)';
    console.log('--- Dentro do Bloco (var) ---');
    console.log(fora);   
    console.log(dentro); 
}

console.log('--- Fora do Bloco (var) ---');
console.log(fora);   
console.log(dentro); 