/*
Ejercicio 5
Escribe un programa que convierta una palabra en plural (en castellano). Para ello, deberás comprobar la última letra de la palabra, ya que si ésta es una consonante, el plural se formará con es, pero si es una vocal, será solo una s. Ojocuidao: debe valer para cualquier palabra que le pasemos, sin que tengamos que modificar ni una línea de nuestro código. Ejemplo:

Si el input no es un string, se devolverá "Input inválido: sólo se aceptan strings".
Si la palabra es "mesa", devolverá `"mesas".
Si la palabra es "camión", devolverá "camiones".
Si la palabra acaba en "s" y no es la palabra "crisis", ni "tesis", ni la palabra "bíceps", se devolverá "Esta palabra ya está en plural".
Si la palabra acaba en "s" y es "crisis", o "tesis", o "tórax", se devolverá "El plural coincide con el singular".
Si la palabra es "sed", "salud" o "caos", se devolverá "Esta palabra no tiene forma plural".
*/

let word = prompt("Escribe una palabra");

let typeVarWord = typeof(word) //Para saber tipo de dato
let lastLetter = word.charAt(word.length - 1);


if (word == '' || typeVarWord != 'string') { // Condicional para inputs vacios o distintos a strings
    console.log("Input inválido: sólo se aceptan strings");
} else { 
    if (lastLetter == "a" || lastLetter == "e" || lastLetter == "i" || lastLetter == "o" || lastLetter == "u") {
        word = word.concat("s");
        console.log(word);
    } else if (lastLetter == "s") {
        if ((word == 'crisis') || (word == 'torax') || (word == 'tesis')) {
            console.log("El plural coincide con el singular");
        } 
    } else {
        word = word.concat("es");
        console.log(word);
    }
    
}







