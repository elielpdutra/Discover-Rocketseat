// for...in
let person = {
    name: 'Eliel',
    age: 21,
    weight: 60
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}