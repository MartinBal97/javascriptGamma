const add = document.querySelector(".add");
const clear = document.querySelector(".clear");
const inputValue = document.querySelector("#task");
const containerTareas = document.querySelector(".containerTareas");

const getInputValue = () => inputValue.value;

add.addEventListener("click", () => {
  if (getInputValue() == "") {
    alert("Debes escribir algo");
  } else {
    containerTareas.innerHTML += `<div class="tareas">
                                    <p>${getInputValue()}</p>
                                    <button class="delete">&check;</button>
                                </div>`;

    const botones = document.querySelectorAll(".tareas button");

    botones.forEach((e) => {
      e.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
    inputValue.value = "";
  }
});

clear.addEventListener("click", () => {
  const tareas = document.querySelectorAll(".containerTareas .tareas");
  tareas.forEach((e) => {
    e.remove();
  });
});
