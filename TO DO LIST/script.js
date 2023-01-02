const add = document.querySelector(".add")
const clear = document.querySelector(".clear")
const inputValue = document.querySelector("#task")
const containerTareas = document.querySelector(".containerTareas")
let cont = 0

const getInputValue = () => inputValue.value

add.addEventListener('click', () => {

    cont++
    containerTareas.innerHTML += `
    <div class="${cont} tareas">
        <p>${getInputValue()}</p>
        <button class="${cont} delete">&check;</button>
    </div>
    <hr>
    `

    const botones = document.querySelectorAll(".tareas button")

    botones.forEach(e => {
        e.addEventListener('click', (e) => {
           // e.parentNode.remove()
           containerTareas.children[0].remove()
           e.target.parentNode.remove()
        })
    });

    inputValue.value = ""
})



clear.addEventListener('click', () => {
    const tareas = document.querySelectorAll(".containerTareas .tareas")
    tareas.forEach(e => {
        e.remove();
        //containerTareas.children.remove()
    });
}) 