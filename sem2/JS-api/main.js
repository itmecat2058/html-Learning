const blockerBtn = document.getElementById("blocker")
const catFactBtn = document.getElementById("cat-fact")
const dogFactBtn = document.getElementById("dog-fact")
const responseElem = document.querySelector(".response")

blockerBtn.addEventListener("click", blockerFn)
catFactBtn.addEventListener("click", catFactFn)
dogFactBtn.addEventListener("click", dogFactFn)


function blockerFn() {
    console.log("Blocking function started")
    alert("This blocks the main process")
    console.log("The process is finished")
}

async function catFactFn() {
    console.log("Cat Fact Requested")
    let request = await fetch("https://meowfacts.herokuapp.com/")
    let result = await request.json()
    console.log(result.data[0])
    responseElem.innerText = `Cat Fact: ${result.data[0]}`
    
}

function dogFactFn() {
    console.log("Dog Fact Requested")
    fetch("https://dogapi.dog/api/v2/facts").then(request => {
        return request.json()
    }).then(result => {
        console.log(result.data[0].attributes.body)
        responseElem.innerText = `Dog Fact: ${result.data[0].attributes.body}`
    })
}