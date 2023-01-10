/***************1*****************/
// let nombre = "Martin"
// let edad = 25
// let ciudad = "Mendoza"

// localStorage.setItem("name", nombre)
// localStorage.setItem("edad", edad)
// localStorage.setItem("ciudad", ciudad)
/***************2*****************/
// let counter = 5
// const body = document.getElementById("body")
// const button = document.createElement("button")
// button.innerText = "Sumar en 1"
// body.appendChild(button)

// button.addEventListener('click', () => {
//     counter++
//     localStorage.setItem("contador", counter)
//     body.append(localStorage.getItem("contador", counter));
// })
/***************3*****************/
// const body = document.getElementById("body")
// body.innerHTML = `<form id="form" action="">
// <label>Escribe tu nombre<input type="text" name="nombre"></label>
// <label>Escribe tu email<input type="email" name="email"></label>
// <label>Escribe una contraseña<input type="password" name="password"></label>
// <input type="submit" value="Enviar datos">
// </form>`

// const form = document.getElementById("form")

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let name = e.target.nombre.value
//     let email = e.target.email.value
//     let password = e.target.password.value

//     const user = {
//         nombre: name,
//         email: email,
//         password: password
//     }

//     localStorage.setItem('user',JSON.stringify(user))
//     console.log(JSON.parse(localStorage.getItem('user')));
// })
/***************4*****************/
const pokemons = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]
const containerCarts = document.querySelector(".containerCarts");


pokemons.forEach((e) => {
  containerCarts.innerHTML +=  `<div class="cart">
                                    <img src="${e.img}" alt="${e.name}">
                                    <h4>${e.name}</h4>
                                    <button id="${e.id}" class="add">Agregar</button>
                                </div>`;
});

const buttons = document.querySelectorAll(".cart .add");
const carrito = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    carrito.push(pokemons[button.id - 1]);

    const newCarrito = carrito.reduce((acc, e) => {
      if (!acc.includes(e)) {
        acc.push(e);
      }
      return acc;
    }, []);

    localStorage.setItem("carrito", JSON.stringify(newCarrito));
  });
});

