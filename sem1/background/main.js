const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


const clr = document.getElementById("color");
const clrBtn = document.getElementById("switch-color");
const randBtn = document.getElementById("randClrBtn");
const saveBtn = document.getElementById("SaveBtn")
const saveBox = document.querySelector(".savedata")

clrBtn.addEventListener("click", function() {
    let list = colors;
    let randClr = rand(colors);
    document.body.style.backgroundColor = colors[randClr];
    clr.innerText = colors[randClr];
});


randBtn.addEventListener("click", function() {
    let randClr = "#";

    for(let el = 0; el<6; el++) {
        randClr += hex[rand(hex)];
    };

    document.body.style.backgroundColor = randClr;
    clr.innerText = randClr;
});

saveBtn.addEventListener("click", function() {
    let newLi = document.createElement("li")
    newLi.innerText = document.body.style.backgroundColor
    saveBox.appendChild(newLi)
})

function rand(list) {
    return Math.floor(Math.random() * list.length);
};