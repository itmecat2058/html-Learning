let CompChoiceElem = document.getElementById("compChoice")
let iconImage = document.querySelector("#iconImage")
let formSub = document.getElementById("form")
let formInput = document.getElementById("formInp")
let compChoice = ["rock", "paper", "scissors"]
let toggleBtn = document.getElementById("toggleBtn")

let isRigged = true

let PlayerChoice;

function randChoice() {
    return Math.floor(Math.random() * compChoice.length)
}

//playchoice
toggleBtn.addEventListener("click", function () {
    isRigged = !isRigged
    if (isRigged) {
        toggleBtn.innerText = "Rigged"
    } else {
        toggleBtn.innerText = "Not Rigged"
    }
})

function toggle(PlayerChoice){
    if (isRigged == true) {
        play(PlayerChoice)
    } else {
        play2(PlayerChoice)
    }
}

//input
formSub.addEventListener("submit", function(event) {
    event.preventDefault()
    let PlayerChoice = String(formInput.value)
    toggle(String(PlayerChoice))
})

//rigged
function play(PlayerChoice) {
    if (String(PlayerChoice) == "paper") {
        CompChoiceElem.innerText = `You lose, I chose scissors`
        iconImage.src = "images/scissors.png"
    } else if (String(PlayerChoice) == "rock") {
        CompChoiceElem.innerText = `You lose, I chose paper`
        iconImage.src = "images/paper.png"
    } else if (String(PlayerChoice) == "scissors"){
        CompChoiceElem.innerText = `You lose, I chose rock`
        iconImage.src = "images/rock.png"
    } else {
        CompChoiceElem.innerText = "You idiot i said pick ROCK, PAPER, OR SCISSORS!!!"
        iconImage.src = "images/dumb.png"
    }
}


//unrigged
function play2(PlayerChoice) {
    let compThrow = compChoice[randChoice()]
    if (PlayerChoice != "rock" && PlayerChoice != "paper" && PlayerChoice != "scissors") {
        CompChoiceElem.innerText = "You idiot i said pick ROCK, PAPER, OR SCISSORS!!!"
        iconImage.src = "images/dumb.png"
    } else if (PlayerChoice == "rock" && compThrow == "paper" || PlayerChoice == "paper" && compThrow == "scissors" || PlayerChoice == "scissors" && compThrow == "rock") {
        CompChoiceElem.innerText = `You lose, I chose ${compThrow}`
        iconImage.src = `images/${compThrow}.png`
    } else if (compThrow == PlayerChoice) {
        CompChoiceElem.innerText = `Its a tie, I chose ${compThrow}`
        iconImage.src = "images/tie.png"
    } else {
        CompChoiceElem.innerText = `You win, I chose ${compThrow}`
        iconImage.src = "images/win.png"
    }
}