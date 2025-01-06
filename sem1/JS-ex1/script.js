console.log("script.js loaded")
//set var
let inverted = false;

// set reusable func

function invert() {
//add var

    let button=document.querySelector("toggle")
//html var
    let html = document.querySelector("html")

    html.classList.toggle("inverted")

    inverted = !inverted
    if(inverted) {
        toggle.innerText = "Light"
    } else {
        toggle.innerText = "Dark"
    }
    
    console.log("func.invet activated")
}