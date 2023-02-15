const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: '30',
  email: 'steve@hotmail.com',
  hobbies: ['music', 'travel'],
  adress: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthdayYear: function(){
    return 2017 - this.age; // this is accessing the object inside the age (30), if you write just age is not working.
  }    
}

let val;

val = person;

//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.adress.state;
val = person.adress['city'];
val = person.etBirthdayYear();

concole.log(val);


