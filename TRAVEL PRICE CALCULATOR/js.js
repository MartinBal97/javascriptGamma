const form = document.querySelector("body form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nochesEnHotel = e.target.nochesEnHotel.value;
  let diasAlquilerCoche = e.target.diasAlquilerCoche.value;
  let ciudad = e.target.ciudad.value;

  calcularCoste(costeHotel(nochesEnHotel), costeAvion(nochesEnHotel, ciudad), costeCoche(diasAlquilerCoche));
});

const costeHotel = (nochesEnHotel) => nochesEnHotel * 140;  

const costeAvion = (nochesEnHotel, ciudad) => {
  let valorAvion;

  if (ciudad == "Valencia") {
    valorAvion = 40;
  } else if (ciudad == "Sevilla") {
    valorAvion = 50;
  } else {
    valorAvion = 90;
  }

  if (nochesEnHotel > 3) {
    valorAvion *= 0.9;
  } else if (nochesEnHotel == 0) {
    valorAvion = 0;
  }
  return valorAvion;
};

const costeCoche = (diasAlquilerCoche) => {
  let alquiler = 40 * diasAlquilerCoche;

  if (diasAlquilerCoche >= 7) {
    alquiler -= 50;
  } else if (diasAlquilerCoche >= 3) {
    alquiler -= 20;
  }

  return alquiler;
};

function calcularCoste(costeHotel, costeAvion, costeCoche) {
  const spanCoste = document.querySelector("p .coste");
  spanCoste.innerText = `El precio del hotel es de €${costeHotel}, el del avion es de €${costeAvion} y el del alquiler del coche es de €${costeCoche}. El total es de €${costeHotel + costeAvion + costeCoche}`;
}
