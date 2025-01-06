function task1() {
    let sourceList = document.querySelector("ul");
    let targetList = document.getElementById("targetList");

    Array.from(sourceList.children).forEach(item => {
        const newli = document.createElement("li");
        newli.textContent = "hi " + item.textContent;
        targetList.append(newli);
    });
}

console.log("Script.js Loaded")