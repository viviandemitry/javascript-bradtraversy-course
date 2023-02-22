//Create Elements

const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add Id
li.id = 'new-item';

//Add attribute
li.setAttribute('title','New Item');

//Create text node and append (put something inside something)
li.appendChild(document.createTextNode('Hello World')); // its putting inside the tag

// Create a new link element
const link = document.createElement('a');
// add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innnerHTML = '<i class="fa fa-remove"></li>';
// Appendlink into li
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li); // it will display the new element into the display

console.log(li);



