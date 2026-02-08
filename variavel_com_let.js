console.log('\n----------------------------\n');

let foraLet = 'Estou fora (let)';

if (true) {
    let dentroLet = 'Estou dentro (let)';
    console.log('--- Dentro do Bloco (let) ---');
    console.log(foraLet);  
    console.log(dentroLet); 
}

console.log('--- Fora do Bloco (let) ---');
console.log(foraLet);   
// console.log(dentroLet); // SE DESCOMENTAR, DARÁ ERRO: ReferenceError: dentroLet is not defined
console.log('A variável "dentroLet" não pode ser acessada aqui fora!');