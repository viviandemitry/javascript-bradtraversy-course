onst num1 = 100;
const num2 = 50;
let val;


//simple math with numbers
val = num1 + num2; // 150
val = num1 * num2;// 5000
val = num1 - num2;// 50
val = num1 / num2;// 2
val = num1 % num2;// 0

//Math Object
val = Math.PI; // 3,1415
val = Math.round(2.8); //3 (arredonda)
val = Math.ceil(2.4); // 3 (arredonda pra cima)
val = Math.floor(2.6); // 2 (arredonda pra baixo)
val = Math.sqrt(64); // 8 (raiz do número)
val  Math.abs(-3); // 3 (número absoluto)
val = Math.pow(8, 2); // 64 (8^2)
val = Math.min(2, 33, 4, 67, -2); // 2 (seleciona o menor)
val = Math.max(2, 33, 4, 67, -2); // 67 (seleciona o maior)
val = Math.random(); // (nós dá um decimal aleatorio)

val = Math.floor(Math.random() * 20 + 1); // Número aleatórios de 0 à 20, sempre arredondando para baixo para ficar como númeor inteiro.

console.log(val);
