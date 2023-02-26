// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log(name);
}
// try...catch
try {
    sayMyName('Eliel');
} catch(e) {
    console.log(e);
}

console.log('Após ao try/catch');