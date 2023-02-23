document.querySelector('.clear-tasks').addEventListener('click', function(e){
console.log('Hello');

  e.preventDefault(); // when we dont have a # in the href we can stop the text using this
});

//ORR

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log('Clicked'); //Its going to show this word in the console once you click the button
//ORR
  
  let val;
  val = e;
  
  //Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  
  // event type
  val = e.type;
  
  //Timestamp
  val = e.timeStamp;
  
  //Coords event relative to the window
  val = e.clientY;
  val = e.clientX;
  
 //Coords event relative to the element
 val = e.offsetY; // show the position once you click
 val = e.offsetX; 
  
  
  console.log(val);
}



