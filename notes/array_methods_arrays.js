//create some arrays

const number = [43, 56, 33, 23,44]
const number2 = new Array(22, 45, 33, 22, 34);
const fruit = ['aplle', 'banana', 'lemon'];
const mixed = [11, 'banana', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];
val = numbers[0];

//Insert into array
numbers[2] = 100; // change the number in the position number 2 to 100.

//Find thye index of a value
val = numbers.indexOf(44); // 5 position

// Mutating Arrays
numbers.push(250); // it will add 250 to the end of the array.

//add on to front
number.unshift(120);

//take off from end
numbers.pop();

//take off from the front
numbers.shift();

//splice values
numbers.splice(1,3);/ it would take off teh position 1 and 3

// reverse the array
numbers.reverse();// it will reverse the position of the components of the array

// concatenate array
val = numbers.concat(number2);

//sort arrays
val = fruit.sort();
val = numbers.sort();

// use the compare function, to have the max to min or min to max value.
val = numbers.sort(function(x,y){
  return x- y;
)}; // it will return min to max
                   
val = numbers.sort(function(x,y){
  return y- x;
)}; // it will return max to min
 
// find
function under50(num){
  return num > 50;
}

val = numbers.find(over50);// return the first number after 50.


                   
                   





