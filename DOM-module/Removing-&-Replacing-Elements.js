//Replace element

// Create an element
const newHeading = document.creatElement('h2');

//Add id
newHeading.id= 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent (need to get through the parents because its accessing their child)
const cardAction = document.querySelector('.card-action');

//Replacing
cardAction.replaceChild(newHeading, oldHeading);

//Remove element
const lis = document.querySelector('li');
const list = document.querySelector('ul');

//Removing list item
lis[0].remove(); // It will remove the first element from the li elements

//Remove child element
list.removeChild(li[3]); //remove the fouth child of the ul element

//Classes e ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test'); // adding classes
link.classList.remove('test'); // removing classes
val = link;

//Attribute
val = link.getAttribute('href'); // getting the attribut
val = link.setAttribute('href', 'http://google.com'); // setting the attribute
link.setAttribute('title', 'google'); // adding attribute
val = link.hasAttribute('title');
val = link;
