/*
Ejercicio 9
Dado el siguiente string:

let str = "Capitalize";
Escribe un programa que devuelva un nuevo string con el mismo valor, pero con la primera letra en minúsculas y la última en mayúsculas. Recuerda que los string son inmutables: deberás crear una variable nueva donde ir guardando el resultado.
*/

let str = "Capitalize";

let str1 = str.toLowerCase(); // Pongo todo el string en minuscula

let str1Array = str1.split(''); // Meto cada caracter a un array

str1Array.pop() // Borro el ultimo elemento del array
str1Array.push("E") // Le agrego un nuevo elemento "E"

let nuevoString = str1Array.join(''); // Uno todo el array

console.log(nuevoString);
