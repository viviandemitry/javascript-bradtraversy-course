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


