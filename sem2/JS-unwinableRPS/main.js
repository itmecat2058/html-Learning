let CompChoice = document.getElementById("compChoice")
let iconImage = document.querySelector("#iconImage")
let PlayerChoice = null

function play() {
    let PlayerChoice = prompt("rock? paper? scissors?")

    if (String(PlayerChoice) == "paper") {
        CompChoice.innerText = "Scissors"
        iconImage.src = "images/scissors.png"
    } else if (String(PlayerChoice) == "rock") {
        CompChoice.innerText = "Paper"
        iconImage.src = "images/paper.png"
    } else if (String(PlayerChoice) == "scissors"){
        CompChoice.innerText = "Rock"
        iconImage.src = "images/rock.png"
    } else {
        CompChoice.innerText = "You idiot i said pick ROCK, PAPER, OR SCISSORS!!!"
        iconImage.src = "images/dumb.png"
    }
}