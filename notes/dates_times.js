let val;

const today = new Date();
let birthday = new Date('9-10-1988 11:25:00');
birthday = new Date('September 10 1981');

val = today;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHour(3);

// Tue Mar (0-jan, 1-fev, 2-march) 1985 03:00:00



console.log(val); // it's appearing the today date time

