// Manipulando Arrays

let techs = ['html', 'css', 'js'];

// adicionar um item no fim

techs.push('nodejs');

// adicionar no começo

techs.unshift('sql');

// remover do começo

techs.pop();

// remover do começo

techs.shift();

// pegar somente alguns elementos do array

// *** console.log(techs.slice(1,3));

// remover 1 ou mais items em qualquer posição do array

// **** techs.splice(1, 2);

// encontrar a posição deum elemento no array

let index = techs.indexOf('html');
techs.splice(index, 1);

console.log(techs);