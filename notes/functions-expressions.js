//FUNCTIONS DECLARATIONS

function greet(firstName, lastName){
  return 'Hello' + firstName + ' ' + lastName
}

console.log(greet('John', 'Doer')):  //passei dois parametros para a função

//FUNCTIONS EXPRESIONS

const square = function(x){
  return x*x;
};
console.log(square(8)); //64

// IMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -- IIFES
(function(){
 console.log('IIFE Ran..');
 })();


(function(name){
 console.log('Hello' + name);
 })('Brad'); // Hello Brad

//PROPERTIES METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(Èdit todo ${id}`);
    }
  }
    todo.add():
    todo.edit(22);



