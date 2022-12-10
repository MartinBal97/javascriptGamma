/*
Ejercicio 9
Dado el siguiente string:

let str = "Capitalize";
Escribe un programa que devuelva un nuevo string con el mismo valor, pero con la primera letra en minúsculas y la última en mayúsculas. Recuerda que los string son inmutables: deberás crear una variable nueva donde ir guardando el resultado.
*/

let str = "Capitalize";

let str1 = str.toLowerCase();

let str1Array = str1.split('');

str1Array.pop();
str1Array.push("E")

let nuevoString = str1Array.join('');

console.log(nuevoString);
