/*
Ejercicio 11
Escribe un bucle que compruebe si un número es primo o no.
*/

let num = prompt("Introduzca un número")
let cont = 0

for (let i = 1; i < num; i++) {
    let result = num / i 
    
}
console.log(cont);
if (result == 0) {
    console.log(`El numero ${num} es primo`);
} else {
    console.log(`El numero ${num} no es primo`);

}