/**
 * Ejercicio 1
Escribe un función que acepte un array de números y devuelva la suma de los números impares.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let newArray = []

for (const number of numbers) {
    if (number % 2 !== 0) {
        newArray.push(number)
    }
}
newArray.reduce(function (