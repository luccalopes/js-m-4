const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('7 de abril', '10', 'República', 'São Paulo', 'SP')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())