const name = 'Vivian';
const age = 27;
const job = " Frontend Developer";
const city = 'São Paulo';

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li> ' + job+ '</li><li> City: '+city +' </li></ul>';

//OR 

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>'+
  '<ul>';

function hello(){
        return 'hello';
}

// Without template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li> // display 4
    <li>${hello()}</li>
  </ul>
  `;

document.body.innerHTML = html;
