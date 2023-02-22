// function expression
// function anonymous

let total = 0;

// parâmetros (parameters)
const sum = function (number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 25;

// console.log(`o número 1 é ${number1}`);
// console.log(`o número 2 é ${number2}`);

console.log(`a soma é ${sum(number1, number2)}`);
console.log(total);

// sum(2,3); // arguments - argumentos
