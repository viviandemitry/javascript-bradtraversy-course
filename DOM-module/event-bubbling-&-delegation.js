//Event Bubbling

document.querySelector('.card-title').addEventListener('click', 
  function(){
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', 
  function(){
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', 
  function(){
  console.log('card');
});
document.querySelector('.col').addEventListener('click', 
  function(){
  console.log('col');
});

//EVENT DELEGATION

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

//ORR

document.body.addEventListener('click', delteItem);

function deleteItem(e){
  console.log('delete item');
  console.log(e.target);
  if(e.target.className === 'fa fa-remove'){   // just if you click in the icon with this class name (the intere name)
   console.log('delete item')
  }
}

//ORR

if(e.target.parentElement.classList.contains('delete-item')){
  consolo.log('delete item');
  e.target.parentElement.parentElement.remove():
  }
}

