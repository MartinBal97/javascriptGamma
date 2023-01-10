const containerCartSelected = document.querySelector(".containerCartSelected");

let carrito = JSON.parse(localStorage.getItem('carrito'))

carrito.forEach(e => {
    containerCartSelected.innerHTML +=
        `<div class="cart">
            <img src="${e.img}" alt="${e.name}">
            <h4>${e.name}</h4>
            <button id="${e.id}" class="delete">Eliminar</button>
        </div>`;
});

const buttonsDelete = document.querySelectorAll(".cart .delete");

buttonsDelete.forEach((buttonDelete) => {
    buttonDelete.addEventListener("click", () => {
        buttonDelete.parentNode.remove()

        const newCarrito = carrito.filter(ele =>(ele.id) != (buttonDelete.id))
        carrito = newCarrito
        console.log(carrito);
        console.log(newCarrito);

        localStorage.setItem("carrito", JSON.stringify(newCarrito));
    });
});