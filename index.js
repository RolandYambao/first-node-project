const numbers = [1, 2, 4, 6, 22, 34];
const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name: 'Tesla',
        model: 'Model S',
        year: 2020
    }
}
console.log(numbers);
console.log(person.foods);


const somethingElse = require('./utils/myModule');

console.log(somethingElse); // object, 

somethingElse.hello(); // {string}
console.log(somethingElse.hello()); // => "Good morning. Please put sonic emoji in Slack."