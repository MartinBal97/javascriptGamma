/*
Ejercicio 10
    Escribe un programa que acepte una dirección de email en formato string y devuelva el dominio de dicho mail (a partir de la @).

    El programa debe hacer tres cosas:

    Comprobar si el string contiene el caracter @.
    Si no lo tiene debe devolver "Dirección de correo incorrecta".
    Si lo tiene, debe devolver el dominio.
    Ejemplo:

    Si el email es "teacher@gammatech.school", debe devolver "gammatech.school".
    Si el email es "fakemail@gmail.com", debe devolver "gmail.com".
    Si el email es "", debe devolver "Dirección de correo incorrecta".
*/
wrongmail.com
let email = prompt("Escribe una dirección de correo");

if (email.includes("@")) {
    var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email); // Expresion regular para separar string por (nombre,servidor y dominio)
    var [, nombre, servidor, dominio] = email_analizado;
    
    if (servidor == "") {
        console.log("Dirección de correo incorrecta");
    } else {
        console.log(servidor + "." + dominio);
    }

} else {
    console.log("Dirección de correo incorrecta");
}
