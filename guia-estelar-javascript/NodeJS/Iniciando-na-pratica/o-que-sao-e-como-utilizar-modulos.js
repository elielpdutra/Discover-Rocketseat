// require 

// utilizamos require para utilizar os módulos dentro dos nossos arquivos e projetos do node.

//  Nativos
const path = require('path');

console.log(path.basename("/User/starter/docs.js"));


// Meus módulos

const mymodule = require("./criando-modulos");

console.log(mymodule);