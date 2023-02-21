// document.getElementsByClassName()

const items = document.getElementsByClassName('collection-item');
console.log(items); // selected all the items from the collection-item turing into aray
console.log(items[0]); // Select the first element of this new array
items[0].style.color = 'red'; // changes the first element color
items[3].textContent = 'Hello'; // changes the fourth element text content

const listItems = document.querySelector('ul').getElementsByClassName('collection-items'); // inside of listItems will have l + collection-items

//document.getElementsByTagName - same functionality but it select the name instead of the class name
let lis = document.getElementsByagName('li');
console.log(lis);

// conver HTML collection into array
lis = Array.from(lis); // here it turn into an array
lis.reverse();
lis.forEach(function(li){
  console.log(li.className) // here displays in the console all the li items with its class name
 li.textContent = 'Hello'; // It changes all the text inside all of the li elemets.
});
console.log(lis);

//OR

lis.forEach(function(li, index){
  console.log(li.className) // here displays in the console all the li items with its class name
 li.textContent = `${index}: Hello `; // It will display 4 Hello , 3 Hello, etc (because it using reverse and we asked the index number first in the function)
});
console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
}); // turrned into an array not reversed and using less code.

console.log(items);

//Usando array para mudar linha sim linha não dos elementos.

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){ // aqui faz mudar as cores de forma alternada 
  li.style.background ='#ccc';
});

console.log(items)

//ORRR

for(let i = 0; i < liEven.length; i++){  // aqui vai mudar a partir do segundo elemento e alternando.
  liEven[i].style.background = '#f4f4f4';
}  // p usar nesse formato vc nao precisa converter em um array

console.log(items)




            
