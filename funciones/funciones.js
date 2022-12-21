/*
Ejercicio 11
Escribe una función que te adivine el futuro. Recibirá como parámetros:

Número de hijos.
Nombre de la pareja.
Nombre de una ciudad.
Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.".


const randomCity = ["Madrid", "Buenos Aires", "Caracas","Lima", "Paris"]
const randomWork = ["Carpintero", "Programador", "Camarero","Ingeniero Nuclear", "Médico"]
const randomSons = ["0", "7", "2","3", "1"]
const randomNames = ["Julia", "Marta","Antonia"]

function adivindador(randomCity,randomWork,randomSons,randomNames) {
    let city = randomCity[Math.floor(Math.random() * randomCity.length)];
    let work = randomWork[Math.floor(Math.random() * randomWork.length)];
    let son = randomSons[Math.floor(Math.random() * randomSons.length)];
    let name = randomNames[Math.floor(Math.random() * randomNames.length)];

    return `Trabajarás en ${city}, trabajando como ${work}, y tendrás ${son} hijos con ${name}.`;
}

console.log((adivindador(randomCity,randomWork,randomSons,randomNames)));
*/

/*
Ejercicio 9
Escribe dos funciones:
Una función que acepte un string y un array. Si el array contiene el string, devolverá true, y si no, devolverá false.
Una función que acepte un string y un array, y si la función anterior devuelve true, devuelva el mismo array pero sin el string que le hemos pasado.

let string = "Este es un string"
let array = [1,2,3,4,5]


function firstFunc(string,array) {
    for (let i = 0; i < array.length; i++) {
        tipoDato = (typeof array[i])
    }
    return (tipoDato == "string") ?  true : false
}

function secondFunc(string,array,funcValue) {
    funcValue ? console.log(array) : console.log(string,array);
}

secondFunc(string,array,firstFunc(string,array))
*/
