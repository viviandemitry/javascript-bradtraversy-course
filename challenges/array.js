const arr = [1, 2, 3, 4, 5];

arr.reverse(); // [5, 4, 3, 2, 1]
arr.push(0); // [5, 4, 3, 2, 1, 0] (acrescentou 0 no final)
arr.unshift(6); // [6, 5, 4, 3, 2, 1, 0] (acrescentou 6 no início)

//Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//SOlution 1
const arr3 = arr1.slice(0, 4); // [1, 2, 3, 4] (0 e 4 são as posições de onde começa e onde termina o slice do arr1)

const arr3 = arr1.slice(0, 4).concat(arr2); // [1, 2, 3 ,4 ,5 ,6 ,7 ,8, 9, 10];

//OR

const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);// 4 é a posição do que ficou repetido e 1 a quantidade que quero tirar do número repetido do array.
console.log():
