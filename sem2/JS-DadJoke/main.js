const jokeOutput = document.querySelector(".jokeOutput")
const idOutput = document.getElementById("jokeID")
const saveBtn = document.querySelector(".saveBtn")
const savedJokeOutput = document.querySelector(".savedJokeOutput")

window.addEventListener("DOMContentLoaded", loadSaved())

let options = {
    headers: {
        "Accept": "application/json",
        "User-Agent": "Buchanan High Schools CS1 (https://buchananschools.com)",
    }
};

async function joke() {
    let request = await fetch("https://icanhazdadjoke.com", options);
    responce = await request.json();
    jokeOutput.innerText = `${responce.joke}`
    idOutput.value = `${responce.id}`
}

let form = document.querySelector(`form`)
form.addEventListener("submit", function(event) {
    event.preventDefault()
    saveJoke(event.target)
})

function saveJoke(form) {
    let formData = new FormData(form)
    let jokeObject = Object.fromEntries(formData)
    jokeObject["joke"] = jokeOutput.textContent

    localStorage.setItem(jokeObject.jokeID, JSON.stringify(jokeObject))
    loadSaved()
    form.reset()
}

function loadSaved() {
    let savedJokes = Object.entries(localStorage)

    savedJokeOutput.innerHTML = savedJokes.map(joke => {
        let jokeData = JSON.parse(joke[1])
        return `
        <li>
            <p>Joke: ${jokeData.joke}</p>
            <p>Notes: ${jokeData.notes}</p>
            <p>Rating (out of 5): ${jokeData.rating}</p>
            <button class="del" data-jokeID="${jokeData.jokeID}">Delete</button>
        </li>
        `
    }).join("")

    let saveJokeDelBtn = document.querySelectorAll(".del")
    saveJokeDelBtn.forEach(button => {
        button.addEventListener("click", (event) => {
            delJoke(event.target)
        })
    })

    function delJoke(btn) {
        let jokeID = btn.dataset.jokeid
        localStorage.removeItem(jokeID)
        loadSaved()
    }
}