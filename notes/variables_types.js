// var, let, const

// você pode reatribuir variávies como var e let
var name = 'Vivian Vivian';
console.log(name); //Vivian Vivian

name = 'Vivian';
console.log(name); // Vivian

// variables can include letters, numbers, _, $
// Can't start with number

// Multi word vars
var firstName ='John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case

let name = 'Vivian Vivian';
console.log(name); //Vivian Vivian
name = 'Vivian';
console.log(name); // Vivian

// const can't reassign and you have to assign a value.

const name = 'Vivian Vivian';
console.log(name); //Vivian Vivian

//you can reassign a value corresponding to the const. you can't reassign the object 'person', but you can change his content.
const person = {
  name:'john',
  age: 30
}
person.name =' Sara';

console.log(person)// {name: 'Sara', age: 30}

