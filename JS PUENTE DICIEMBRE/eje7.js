/**
 Ejercicio 7
Dado el string "pámpano", muestra por consola su inverso: "onapmáp". Recuerda que los string son inmutables: deberás crear una variable nueva donde ir guardando el resultado.
 */

let string1 = "pámpano"

let arregloPalabra = string1.split(''); // Meto todas las letras en un array
arregloPalabra.reverse(); // Aplico metodo reverse al array para se invierta
let string2 = arregloPalabra.toString() // Lo convierto a string
let string2SinComas = string2.replace(/,/g, "") // Le quito las "," generadas por el metodo toString

console.log(string2SinComas);