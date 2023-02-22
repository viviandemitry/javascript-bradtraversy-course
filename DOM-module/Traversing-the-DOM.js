let val;
const list = document.querySelector('ul.collection');
const lisItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//1 - Elemet
//2 - Attribute
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - Doctype

//Get children element nodes
val = list.children; // gives us the elements li inside ul
val = list.children[1];
list.children[3].textContent = 'Hello'; // changes the text of the fourth element
val = list.children[3].children[0];// you acces the first children of the first children od the ul
list.children[3].children[0].id = 'test-link'; // inserting a new link in the element

//First child
val = list.firstChild; //node element  child
val = list.firstElementChild; // fisrt element child


//Last child
val = list.lastChild;
val = list.lastElementChild; 

//Count child elements
val = list.ChildElement.COunt;


//Get parent node
val = listItem.parantNode;
val = listItem.parantElement;
val = listItem.parantElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get prev sibling
val = listItem.prevSibling; //node element
val = listItem.prevElementSibling.prevElementSibling;

val = listItem.nextElementSibling.nextElementSibling.prevElementSibling;


console.log(val);
