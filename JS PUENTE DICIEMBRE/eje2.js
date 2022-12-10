/*
Ejercicio 2
Escribe un condicional que procese las notas de un examen:

Si la nota está entre 0 y 59 (incluido), debe devolver "Suspenso".
Si la nota está entre 60 y 79 (ambos incluidos), debe devolver "Aprobado".
Si la nota está entre 80 y 89 (ambos incluidos), debe devolver "Notable".
Si la nota está entre 90 y 100 (ambos incluidos), debe devolver "Sobresaliente".
Cualquier otro número devolvera "Formato de nota incorrecto".
*/
let nota = prompt("Coloque la nota del examen") 

if (nota > 0 && nota <= 59) {
    console.log("Suspenso");
} else if (nota > 59 && nota <= 79) {
    console.log("Aprobado");
} else if (nota > 79 && nota <= 89) {
    console.log("Notable");
} else if (nota > 89 && nota <= 100) {
    console.log("Sobresaliente");
} else {
    console.log("Formato de nota incorrecto");
}