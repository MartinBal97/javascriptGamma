const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const bttPlayer1 = document.querySelector("#bttPlayer1");
const bttPlayer2 = document.querySelector("#bttPlayer2");
const bttReset = document.querySelector(".reset");
const maxPoints = document.querySelector(".mainContainer label select");
const alertWinner = document.querySelector(".winner");

let counterPlayer1 = 0;
let counterPlayer2 = 0;
let valueMaxPoints = 3;

maxPoints.addEventListener("change", (e) => (valueMaxPoints = e.target.value));

bttPlayer1.addEventListener("click", () => {
  counterPlayer1++;
  if (counterPlayer1 >= valueMaxPoints) {
    player1.innerText = valueMaxPoints;
    counterPlayer1 = valueMaxPoints;
    alertWinner.innerHTML = `<p class='winnerp'> 🎉 El ganador es Player 1 !! 🎉 </p>`;
    bttPlayer1.disabled = true;
    bttPlayer2.disabled = true;
    maxPoints.disabled = true;
  } else {
    player1.innerText = counterPlayer1;
  }
});

bttPlayer2.addEventListener("click", () => {
  counterPlayer2++;
  if (counterPlayer2 >= valueMaxPoints) {
    player2.innerText = valueMaxPoints;
    counterPlayer2 = valueMaxPoints;
    alertWinner.innerHTML = `<p class='winnerp'> 🎉 El ganador es Player 2 !! 🎉 </p>`;
    bttPlayer1.disabled = true;
    bttPlayer2.disabled = true;
    maxPoints.disabled = true;
  } else {
    player2.innerText = counterPlayer2;
  }
});

bttReset.addEventListener("click", () => {
  counterPlayer1 = 0;
  counterPlayer2 = 0;
  bttPlayer1.disabled = false;
  bttPlayer2.disabled = false;
  maxPoints.disabled = false;
  alertWinner.removeChild(alertWinner.childNodes[0]);
  player1.innerText = counterPlayer1;
  player2.innerText = counterPlayer2;
});
