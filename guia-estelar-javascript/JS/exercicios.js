// 1. Declare uma variável de nome weight
    // let weight = 21;

// 2. Que tipo de dados é a variável acima?
    // console.log(typeof weight);
/*
    3. Declare uma variável e atribua valores para cadaum dos dados:
        * name: String
        * age: Number (integer)
        * weight: Number (float)
        * isSubscribed: Boolean
*/ 

// let name = 'Eliel';
// let age = 21;
// let weight = 60.5;
// let isSubscribed = true;

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: 'Eliel',
    age: 21,
    weight: 60.5,
    isSubscribed: true
};

// console.log(`${student.name} tem ${student.age} de idade e pesa ${student.weight} kg`)
// console.log(typeof student);


/*
    5. Declare uma variável do tipo Arrya, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/ 

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. ( Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

// console.log(students);

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
// console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/ 

const john = {
    name: 'John',
    age: 23,
    weight: 60.6,
    isSubscribed: true
}

// students = [
//     student,
//     john
// ]

students[1] = john;
console.log(students);

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

R: undefined
*/ 

console.log(a)
var a = 1

