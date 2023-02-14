//Primitive Data Types:
//Stored directly in the location the variable accesses stored on the stack

//Reference Data Type:
//Accessed by reference > Objects that are stored on the heap, A pointer to a location in memory

//6 primitive data types:
// STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOLS(ES6)

//5 references data types/ Objects
//ARRAYS, OBJECT LITERALS, FUNCTIONS, DATES, ANYTHING ELSE..


//PRIMITIVES
//String
const name = 'Vivian';

//Number
const age = 45; //(without quotes, otherwise it'll turn a string)

//Boolean
const hasKids = true;
      
//Null
 const car = null;

//Undefined
let test;

//Symbol
const sym = Symbol();

//REFERENCE TYPE - Object
//Array
const hobbies = ['movies', 'music'];

//Objct literal
const adress = {
  ity: 'Boston',
  state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof today);
