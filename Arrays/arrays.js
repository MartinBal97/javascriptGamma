
/*
EJERCICIO 1.1
//Crea una variable que tenga como valor un array vacío.
let array = [];
*/
/*
EJERCICIO 1.2
//Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.
let array1 = ["red", 5, true]
*/
/*
EJERCICIO 1.3
//Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A constinuación muestra por consola la longitud del array.
let array2 = []
array2.push(1,2)
array2.unshift(3,4)
array2.pop()
array2.shift()
console.log(array2.length);
*/
/*
EJERCICIO 1.4
//Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice().
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
console.log(names.slice(1,3));
names.splice(3,1,"Parma")
console.log(names);
*/
/*
EJERCICIO 1.5
//Convierte el array anterior (names) en un string de nombres separados por espacios.
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
console.log(names.join(" "));
*/
/*
EJERCICIO 1.6
// Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y luego en otro de letras. 
const sentence = "El perro de San Roque no tiene rabo"
console.log(sentence.split(" "), sentence.split(""));
*/
/*
EJERCICIO 2
// 2.1
const months = ["January", "February", "Marj", "April", "Mei"]
months[2] = "March"
months[4] = "May"
console.log(months);
// 2.2
const newMonths = ["June", "July", "August", "September"]
const totalMonths = months.concat(newMonths)
console.log(totalMonths);
// 2.3
totalMonths.push("October","November","December")
console.log(totalMonths);
*/
/*
EJERCICIO 3
let totalMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let num1=7,num2=7,num3=7;
if (num1 > num2) {
    totalMonths.pop();
    console.log(totalMonths);
} else if (num2 > num3 && num2 < 10) {
    totalMonths.shift();
    console.log(totalMonths);
} else if (num2 > num1 || num2 > num3 ) {
    totalMonths.push("October")
    console.log(totalMonths);
} else {
    console.log("Bad luck!");
}
*/
/*
EJERCICIO 4
let dias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let diasInvertidos = [];
positionWednesday = dias.indexOf("Wednesday")

if (dias.includes("Sunday")) {
    console.log("That's nice!");
} else {
    console.log("Oh no!");
    dias.push("Sunday")
}

if (positionWednesday < dias[positionWednesday].length) {
    // Forma de hacerlo sin agregar array
    for (let i = 0; i < dias.length; i++) {
        dias.unshift(dias[i])
        dias.splice(i+1,1)
    } 
   console.log(dias);
    // Forma de hacerlo agregando otro array
     
    for (let i = dias.length - 1; i >= 0; i--) {
      diasInvertidos.push(dias[i]);
    }
    console.log(diasInvertidos);
    
}*/
/*
EJERCICIO 5
// Escribe un script que le dé la vuelta a cualquier array. Usa primero el método de array apropiado para ello, y después inténtalo sin usar ningún método, sólo con un bucle for.
let array = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array.length; i++) {
    array.unshift(array[i])  
    array.splice(i + 1, 1)  
}
console.log(array);
*/
/*
EJERCICIO 6
let numbers = []

for (let i = 0; i <= 10; i++) {
    numbers.push(i)  
}
console.log(numbers);

let result = 0

for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] 
}
console.log(result);

let odds = []
let evens = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evens.push(numbers[i])
    } else {
        odds.push(numbers[i])
    }
}
console.log(odds);
console.log(evens);

*/
/*
EJERCICIO 7
const fruits = ["pera", "banana", "mandarina", "frambuesa"];
const colors = ["verde", "amarilla", "naranja", "roja"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`La ${fruits[i]} es ${colors[i]}`);
}
*/
/*
EJERCICIO 8
const array = [["David", "Fernández"], ["Ana", "García"], ["Manuel", "Herrera"]];
let newArray =[]
for (let i = 0; i < array.length; i++) {
     newArray.push(array[i].join(" "))
}
console.log(newArray);
*/
/*
EJERCICIO 9*/
const grades = [5, 7, 7, 4, 8, 5, 3, 9];
let sumaGrades = 0

for (let i = 0; i < grades.length; i++) {
    sumaGrades += grades[i];
}

let promedio = sumaGrades/grades.length
console.log("El promedio es igual a " + promedio);