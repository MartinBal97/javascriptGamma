/*
 Ejercicio 12
Tienes un bote con 25 galletas. Te gustan mucho las galletas, así que te comes 3 cada día. Sin embargo, cada 2 días (los días pares) tu abuela te da 1 galleta más que puedes meter en tu bote. Usa un bucle for que devuelva el número de días que tardarás en quedarte sin galletas.
 */
let galletas = 25;
let i
for ( i = 1; galletas > 0; i++) {
    if (i % 2 == 0) {
        galletas-= 2
    }else{
        galletas -=3

    }
}

console.log("El numero de dias será " + i);