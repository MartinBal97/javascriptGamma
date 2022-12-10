/*
Ejercicio 4
Escribe un condicional que evalúe dos variables, "age" y "nationality", y compruebe si la persona en cuestión puede o no votar en las elecciones. Las condiciones y los outputs quedan a tu imaginación.
*/

let nationality = prompt('Coloque el pais de su nacionalidad').toLowerCase();
let age = prompt('Gracias! Ahora coloque su edad.')


if (nationality == '' || age == '') {
    console.log('Debe colocar el país de su nacionalidad y su edad correctamente');
} else {
    nationality != 'españa' || age < 18 ? console.log('No cumple las condiciones necesarias para votar') : console.log('Usted puede votar');
}


