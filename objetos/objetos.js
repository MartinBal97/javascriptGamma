/*
Ejercicio 1
Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores
Ejercicio 2
Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.
Ejercicio 3
Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.

let citizen1 = {
    name: 'Martin',
    lastname: 'Balverde',
    age: '25'
}
citizen1.city = 'Madrid'
citizen1.age = '30'

function checkCitizenship(citizen) {
    if (citizen.age >= 18) {
        citizen1.canVote = true
    } else {
        citizen1.canVote = false
    }
}

checkCitizenship(citizen1)
console.log(citizen1);
*/
/*
Ejercicio 4
Crea una función llamada createCitizenque acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo:
{
    name: <<nombre>>,
    lastname: <<apellido>>,
    age: <<age>>
}
Ejercicio 5
Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.

let name = prompt("Escriba su nombre")
let lastname = prompt("Escriba su apellido")
let age = prompt("Escriba su edad")
let objeto

function createCitizen(name, lastname, age) {
    return objeto = {
        name: name,
        lastname: lastname,
        age: age
    }
}
console.log(createCitizen(name, lastname, age));

let nombre = objeto.name;
console.log(nombre);
*/
/*
Ejercicio 6
Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne el resultado.

let citizen1 = {
    name: 'Martin',
    lastname: 'Balverde',
    age: '25',
    canVote:true
}

function checkVoting(citizen) {
    if (citizen.hasOwnProperty('canVote')) {
        return `El ciudadano ${citizen.name} ${citizen.lastname} se sabe si puede votar o no`
    } else {
        return `El ciudadano ${citizen.name} ${citizen.lastname} no se sabe si puede votar`
    }
}

console.log(checkVoting(citizen1));
*/
/*
Ejercicio 7
Modifica la función checkVoting para que, si el resultado es negativo (si el objeto no tiene la propiedad canVote), se llame a la función checkCitizenship. Úsala con citizen2 y comprueba que funciona.
*/
    var catYears = 0;
    var dogYears = 0;
    var humanYears = 10;
    
      if (humanYears == 1) {
          dogYears = 15
          catYears = 15
      } else if (humanYears == 2){
        dogYears = 15 + 9
        catYears = 15 + 9
      } else if (humanYears >= 2){
        dogYears = (15 + 9) + (5 * (humanYears - 2))
        catYears = (15 + 9) + (4 * (humanYears - 2))
      }
    
  
console.log(humanYears,catYears ,dogYears);  