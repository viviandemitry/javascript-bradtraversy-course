
const id = 100; // here the = sign is assigning id to 100

//EQUAL TO (just to compare
if(id == 100) {
 console.log('Corrrect');
} else {
  console.log('Incorrect');
}

// NOT EQUAL TO 
if(id != 100) {
 console.log('Corrrect');
} else {
  console.log('Incorrect');
}

// EQUAL TO VALUE & TYPE
if(id === 100) {
 console.log('Corrrect');
} else {
  console.log('Incorrect');
}

// NOT EQUAL TO VALUE & TYPE
if(id =!== 100) {
 console.log('Corrrect');
} else {
  console.log('Incorrect');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Greater or less than
if(id > 200){
  console.log(`CORRECT`);
} else {
  console.log('INCORRECT');
}


// IF ELSE

const color = 'yellow';

if (color === 'red'){
  console.log('Colo is red');
} else if (color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

//LOGICAL OPERATORS

const name = 'Vivian';
const agr = 27;

//AND &&
if(age > 0 && age < 12){
  console.log(`S{name} is a child`);
} else if(age >= 13 && age <=19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an dult`);
}
  
// OR ||
if(age < 16 || age > 65){
   console.log(`${name} can not run in race`);
   } else {
  console.log(`${name} is registered fot the race`);
}

//TERNARY OPERATOR
console.log(id === 10 ? 'CORRECT' : 'INCORRECT');


//SWITCHS

const color = 'red';

switch(color){
case 'red'
  console.log('Color is red');
  break;
case 'blue'
  console.log('Color is blue');
  break;  
default
  console.log('Color is not red or blue');
  break;  
}

let day;
switch(new Date(). getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;  
  case 2:
    day = 'Tueday';
    break;
    case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thurday';
    break;  
  case 5:
    day = 'Friday';
    break;  
  case 6:
    day = 'Saturday';
    break;  
}

console.log(`Today is ${dau}`);
 





