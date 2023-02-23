const clearBtn = document.queySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click - interactive things, when the mouse pass around the page for exemple
clearBtn.addEventListener('click', runEvent);
//Double click
clearBtn.addEventListener('dbclick', runEvent);
//Mousedown
clearBtn.addEventListener('mousedown', runEvent);
//Mouseenter
clearBtn.addEventListener('mouseenter', runEvent);
//Mouseleave
clearBtn.addEventListener('mouseleave', runEvent);
//Mouseover
clearBtn.addEventListener('mouseover', runEvent);
//Mouseout
clearBtn.addEventListener('mouseout', runEvent);
//Mousemove
clearBtn.addEventListener('mousemove', runEvent);


//EVENT HANDLER
function runEvent(e) {
  console.log(ÉVENT TYPE: ${e.type}`);
  
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  
  document.body.style.backgroundColor = ´rgb(${e.offsetX}, S{e.offsetY}, 40)`;
}
