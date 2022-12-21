/* 
EJERCICIO 2
const section = document.querySelector("section");

for (let i = 1; i <= 100; i++) {

    let button = document.createElement('button')
    button.classList.add('estiloAzul')
    button.innerText = `${i}`;
    section.appendChild(button)

    if (i % 2 === 0) {
        button.classList.toggle('estiloRojo');
    }

    if (i % 5 === 0) {
        button.style.color = 'green';
    }
}
*/
/*EJERCICIO 3
const section = document.querySelector("section");

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

section.innerHTML = `
<span>R</span>
<span>A</span>
<span>I</span>
<span>N</span>
<span>B</span>
<span>O</span>
<span>W</span>`;

for (let i = 0; i < section.children.length; i++) {
    section.children[i].style.color = colors[i];
}
*/

document.querySelector("#subtitle").remove()

let boldClass = document.querySelectorAll(".bold")
let italicClass = document.querySelectorAll(".italics")

for (let i = 0; i < boldClass.length; i++) {
    boldClass[i].style.color = "red";
}

for (let i = 0; i < italicClass.length; i++) {
    italicClass[i].style.fontWeight = "bold";
}