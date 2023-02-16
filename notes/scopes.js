// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

//FUNCTION SCOPE - everything insede is not changing the variables from global scope, even var.
function test(){
var a = 4;
let b = 5;
const c = 6;
  console.log('Function Scope: ', a , b, c);
}

if(true) {     // the var is changing because it's in the global scope and it can ben reassigned.
  //Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c); 




  
