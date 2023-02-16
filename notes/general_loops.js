// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my fav number');
    continue; // continue is going to keep the numbers, without to repeat number 2.
  }
  console.log('Number '+ i);
} // Number 0 Number 1 2 is my fav number Number 3 Number 4 ... Number 9

//ANOTHER OPTION IS TO USE BREAK
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my fav number');
    continue; // continue is going to keep the numbers, without to repeat number 2.
  }
  if(i === 5){
    console.log('Stop')
    break;
  }
  console.log('Number '+ i);
} // Number 0 Number 1 2 is my fav number Number 3 Number 4 Stop

// WHILE LOOP (BETTER TO USE WHEN YOU DONT KNOW HOW MANY TIMES IS GOING TO LOOP)

let i = 0;
  while(i < 10){
    console.log(Number ' + i);
                i++
     }

//DO WHILE

let i = 100;

do {
  console.log('Number '+ i);
  i++;
}

while(i < 10);


//OTHER *important to knoe* the length count the number of items inside the array, the i = 0 represents the position of the component, 0 = first one.
//LOOP THROUGH ARRAY

const cars = ['Ford', 'Chery', 'Honda', 'Toyota'];
cars[1];
for(let i = 0; i < cars.length; i++){
console.log(i);
}

// console.log(i) its going to show the number position of each parameter, if you write console.log(cars[i]), it will show the real paramaters name.

// OTHER OPTION FOR LOOP THROUGH ARRAY

//FOREACH
cars.forEach(function(car, index){
  console.log(`${indes} : ${car}`);
}); // 0 : Ford 1 : Chery ....

const user = {
  firstName: 'John',
  lasName: 'Doe',
  age: 40
}

//FOR IN LOOP
for(let x in user) {
  console.log(`${x} : ${user[x]}`);
} // firstName : John ... agr : 40

//MAP 
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Sara'},
  {id: 4, name: 'Neto'},
];

const ids = users.map(function(user){
  return user.id;
});
console.log(ids);


