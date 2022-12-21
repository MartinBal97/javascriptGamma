/*
### Ejercicio 7
Crea una función que reciba un array de strings y que devuelva un nuevo array con las palabras que estén en plural. 
nota: todas las palabras en plural terminarán en "s". 

let strings = ["camino", "blanco", "google", "teclados", "viajes", "June"];
let plurals = [];

function getPlurals(strings) {
    try {
        for (let i = 0; i < strings.length; i++) {
      //      let posicionS = arrayStrings[i].lastIndexOf("s");
            if (strings[i][strings[i].length -1 ] == "s") {
                plurals.push(strings[i]);
            }
        }
        console.log(plurals);
        
    } catch (error) {
        console.log("Hay datos que no son strings");
    }
}

getPlurals(strings)
*/

/*

Ejercicio 6
Crea una función que acepte un array de objetos como este:

[
{product: "banana", price: 5},
{product: "apple", price: 1},
{product: "orange", price: 8},
{product: "grapes", price: 10},
{product: "mango", price: 9},
]
La función debe devolver un array con los productos cuyo precio sea mayor que 6.


let arrayDeObjetos = [
    {product: "onion", price: 2},
    {product: "banana", price: 5},
    {product: "apple", price: 1},
    {product: "orange", price: 8},
    {product: "grapes", price: 10},
    {product: "mango", price: 9},
]
let menorDeSeis = [];

function devolverArray(arrayDeObjetos) {
    for (let i = 0; i < arrayDeObjetos.length; i++) {
        if (arrayDeObjetos[i].price < 6) {
            menorDeSeis.push(arrayDeObjetos[i])
        }
    }
    console.log(menorDeSeis);
}

devolverArray(arrayDeObjetos)
*/

/*
Ejercicio 5
Crea una función que acepte dos arrays de números con la misma longitud y devuelva un nuevo array con la suma de los números cruzados de cada array:

  [1, 2, 3, 4, 5]
  [6, 7, 8, 9, 10]
// 7  9  11 13 15


let array1 =[1, 2, 3, 4, 5]
let array2 =[6, 7, 8, 9, 10]
let sumaArrays = []

if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
        sumaArrays.push(array1[i] + array2[i]) 
    }
    console.log(sumaArrays);
} else {
    console.log("No se pueden sumar todos los números");
}*/





/*
### Ejercicio 4
Crea una función que acepte un string y devuelva el número de vocales que tiene el string.


let string = prompt("Escriba una palabra u oración").toLowerCase(); //Pido que el usuario escriba un string y lo convierto a minuscula

function obtenerNumVocales(string) {

    let array = string.split(""); // Meto todos los caracteres a un array
    let contVocales = 0; // Creo variable donde se almacenaran la cantidad de vocales


    for (let i = 0; i < array.length; i++) { // Recorro el array
        if (array[i] == "a" ||
            array[i] == "e" ||
            array[i] == "i" ||
            array[i] == "o" ||
            array[i] == "u") { // Condicional si array[i] es igual a a,e,i,o,u suma 1 al contador
            contVocales++ 
        }
    }
    return `La cantidad de vocales que tiene tu string es de ${contVocales}`
}


console.log(obtenerNumVocales(string));
*/