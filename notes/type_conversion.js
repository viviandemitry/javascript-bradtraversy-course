let val;

//Number to string

val = 5;

//output
console.log(val);
console.log(typeof val); // number
console.log(val.length); // undefined

// to converse:

let val;

//Number to string

val = String(5);

//output
console.log(val);
console.log(typeof val); // string
console.log(val.length); // 1

// More conversions:

let val;

//Number to string

val = String(5);

// boolean to a string

val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4])

//OR

val = (5).toString(): // 5 will turn a string

//output
console.log(val);
console.log(typeof val); 
console.log(val.length);

// String to number
val = Number('5');

//output
console.log(val);
console.log(typeof val); 
console.log(val.toFixed()); // toFixed() you can define de decimal of the number, if is toFixed(2) the outcome is 5.00

