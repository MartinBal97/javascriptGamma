/*
Ejercicio 1
Tienes las siguientes variables:

let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;
Escribe un programa que:

Compruebe si el triángulo es válido (la suma de los ángulos de un triángulo es siempre 180).
Clasifique el triángulo en: acutángulo, obstusángulo o rectángulo.
Cambia los valores de las variables y asegúrate de que funcionan.
*/

let angulo1 = 45;
let angulo2 = 40;
let angulo3 = 95;

if ((angulo1 + angulo2 + angulo3) == 180) {
    
    if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        console.log("Esto es un triángulo acutangulo");
    } else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        console.log("Esto es un triángulo rectángulo");
    } else {
        console.log("Esto es un triángulo obstusángulo");
    }

} else {
    console.log("Esto no es un triángulo");
}