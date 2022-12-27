const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const bttPlayer1 = document.querySelector("#bttPlayer1")
const bttPlayer2 = document.querySelector("#bttPlayer2")
const bttReset = document.querySelector(".reset")
const maxPoints = document.querySelector(".mainContainer label select")

let counterPlayer1= 0
let counterPlayer2= 0
let valueMaxPoints = 3

console.log(valueMaxPoints);


maxPoints.addEventListener('change', (e) => valueMaxPoints = e.target.value )

bttPlayer1.addEventListener('click', () => {
    counterPlayer1 += 1
    if (counterPlayer1 >= valueMaxPoints) {
        player1.innerText = valueMaxPoints
    } else {
        player1.innerText = counterPlayer1
    }
})

bttPlayer2.addEventListener('click', () => {
    counterPlayer2 += 1
    if (counterPlayer2 >= valueMaxPoints) {
        player2.innerText = valueMaxPoints
    } else {
        player2.innerText = counterPlayer2
    }
})

bttReset.addEventListener('click', () => {
    counterPlayer1 = 0
    counterPlayer2 = 0
    player1.innerText = counterPlayer1
    player2.innerText = counterPlayer2
})


