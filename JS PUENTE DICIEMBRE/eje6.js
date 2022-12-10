/*
Ejercicio 6
Escribe un programa que quite los espacios de las frases. Por ejemplo, debería convertir "Hello World" en "HelloWorld".
*/

let oracion = prompt('Escriba una oracion')

console.log(oracion.replace(/ /g, ""));
