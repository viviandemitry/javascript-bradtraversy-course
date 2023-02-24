//Set local storage item
localStorage.setItem('name', 'john');
localStorage.setItem('age', '30');

//Set session storage item
sessionStorage.setItem('name', 'john');

//Remove from storage
localStorage.removeItem('name', 'john');

//get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// Clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit', 
  function(e){
  const task = document.getElementById('task').value; // we want to get the value
  
  let tasks;
  
  //creating an array of tasks each time we submit
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  
  localStorage.setItem('task', JSON.stringify(tasks));
  alert('Task saved');
  
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});
