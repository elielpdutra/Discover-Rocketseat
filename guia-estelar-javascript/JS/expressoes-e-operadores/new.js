/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/ 

let name = new String('Eliel');
name.surName = 'Dutra'
let age = new Number(23);
console.log(name.surName, age);

let date = new Date('2023-03-25');
console.log(date.__proto__);