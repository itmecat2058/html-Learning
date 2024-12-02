const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f",];

const clr = document.getElementById("color");
const clrBtn = document.getElementById("switch-color");

const randBtn = document.getElementById("randClrBtn");

clrBtn.addEventListener("click", function() {
    let randClr = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randClr];
    clr.innerText = colors[randClr];
});

randBtn.addEventListener("click", function() {
    let randClr = "#";

    for(let el = 0; el<6; el++) {
        randClr += hex[Math.floor(Math.random() * hex.length)];
        
    }

    document.body.style.backgroundColor = randClr;
    clr.innerText = randClr;
});

function colorpick() {
    
    return
}