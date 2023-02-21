//DOCUMENT OBJECT MODEL
// Tree of nodes/ elements created by the browser

let val

val = document;
val = document.all; // shows in an array all the elements names in the document
val = document.all[2]; // shows the second element we have in the document
val = document.all.legth; // shows how many elements we have in the document.
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.links; // shows all the links inside the document
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src'); // selecting the src attribute;


console.log(val);

// document.getElementById()
console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#333';
document.getElementById('task-title').style.padding = '5px';
document.getElementById('task-title').style.display = 'none'; // The element disappears

//Change content displayed
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Task List';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task</span>'; // you change the html element

// Best options to change the content 

const taskTitle = document.getElementById('task-title'); // you create a const with a new name and select the element by Id name.

//Change styling
taskTitle.style.background = '#333'; 
taskTitle.style.olor = '#333'; 
taskTitle.style.padding = '5px'; 


//Change content
taskTitle.textContent = 'tasks';
taskTitle.innerText = 'tasks';
taskTitle.innerHTML = '<span style="color:red">Task</span>'; 

// document.querySelector() - you can get whatever you need, not just ID elementss.

console.log(document.querySelector('#task-title')); //selected an ID
console.log(document.querySelector('.card-title')); //selected a CLASS
console.log(document.querySelector('h5')); // It selected the first h5 of the document.

document.querySelector('li').style.color = 'red'; // Selected just the first li
document.querySelector('li:last-child').style.color = 'red'; // Selected the last li element
document.querySelector('li:nth-child(3)').style.color = 'red'; // Selected the third element of the document

document.querySelector('li:nth-child(odd)').style.color = 'red'; // selected first li element 
document.querySelector('li:nth-child(even)').style.color = 'red'; // selected second li element 




