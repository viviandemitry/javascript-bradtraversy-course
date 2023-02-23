const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);
//keydown
taskInput.addEventListener('keydown', runEvent);
//keyup
taskInput.addEventListener('keyup', runEvent);
//keypress
taskInput.addEventListener('keypress', runEvent);
//Focus
taskInput.addEventListener('focus', runEvent);
//Blue
taskInput.addEventListener('blur', runEvent);
//Cut
taskInput.addEventListener('cut', runEvent);
//Paste
taskInput.addEventListener('paste', runEvent);
//Input
taskInput.addEventListener('input', runEvent);



function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  
  console.log(e.target.value);
  
  heading.innerText = e.target.value;

// Get input value
  console.log(taskInput.value);
  
  e.preventDefault();
  
}
  
  
