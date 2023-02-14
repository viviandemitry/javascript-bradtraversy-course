const firstName = 'Vian';
const lastName = 'Mitry';
const age = 27;
const str = 'Hello there, my name is Vivian';

let val;

val = firstName + lastName;

//Concatenation

val = firstName + ' ' + lastName;

val = 'Hello, my name ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait';

// Escaping
val = 
console.log(val);

// length
val = firstName.length;

//concat

val = firstName.concat(' ', lastName);

// change case
val = fistName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[]; // inside the array depending wich number I write it will give me back the letter tha refrers to this number position.

// indexOf()
val = firstName.indexOf(''); // the letter you write inside, the outcome will be the number refering to the position of the letter in the length string;
val = firstName.lastIndexOf(''); // If the letter you write inside repeat in the string, it will show the position number of the last one.

// charAt()
val = firstName.charAt(''); // the outcome will be the letter that corresponds to the number you write insede.

//Get last char
val = firstName.charAt(firstName.length -1); // the -1 represent the last letter os the string


// substring()
val = firstName.substring(0,4); // the first 4 places of the string

// slice()
val = firstName.slice(-3); // the -3 represents the last 3 letter of the strinf

// split()
 val = str.split(''); // i will have each word in a string

//replace()
val = str.replace('Vivian', 'Jack');


// includes()
val = str.includes('Hello'); // if the word existe in teh string will return true.




