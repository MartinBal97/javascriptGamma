/* 
Ejercicio 3
Escribe un condicional que traduzca "Hello World" a diferentes idiomas basándose en la variable language.

Si language es es, mostrará "Hola mundo!".
Si language es fr, mostrará "Bonjour tout le monde!".
Si language es en, mostrará "Hello World!".
Si language es de, mostrará "Hallo Welt!".
Cualquier otro valor deberá devolver "Sorry, language not available".

*/

let lenguage = prompt(
  "Hi! Write your lenguage! es: spanish, fr: french, en: english, de: ???"
);

switch (lenguage) {
  case "es":
    console.log("Hola Mundo!");
    break;
  case "fr":
    console.log("Bonjour tout le monde!");
    break;
  case "en":
    console.log("Hello World!");
    break;
  case "de":
    console.log("Hallo Welt!");
    break;
  default:
    console.log("Sorry, language not available");
    break;
}
