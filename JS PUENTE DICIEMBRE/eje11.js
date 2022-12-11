/*
Ejercicio 11
Escribe un bucle que compruebe si un número es primo o no.
*/


let num = prompt("Introduzca un número")


if (num % 2 == 0) {
    console.log("El numero NO es primo")
} else if (num % 2 == 1) {
    console.log("El numero es primo")
}