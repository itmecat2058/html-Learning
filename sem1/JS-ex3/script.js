// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // Don't change the variable name
  let listItems = document.querySelectorAll("li") ;

  // This is called a conditional. If it finds matches
  // for your variable, it will tell each of them to 
  // respond to a hover ("mouseover") event.
  if (listItems.length > 1) {
    listItems.forEach((item) =>
      item.addEventListener("mouseover", handleHover),
    );
  }
}

// Write your task 2 code inside this function!
function task2() {
  let cirlce = document.querySelector("#cirlce")
  circle.remove()
  console.log("Running task 2");
}

// Write your task 3 code inside this function!
function task3() {
  const box = document.querySelector(".box");
  const newDiv1 = document.createElement("div")
  const newDiv2 = document.createElement("div")
  const par1 = document.createElement("p")
  const par2 = document.createElement("p")

  newDiv1.classList.add("item","new")
  newDiv2.classList.add("item","new")

  newDiv1.appendChild(par1)
  newDiv2.appendChild(par2)

  par1.textContent = "Newbox";
  par2.textContent = "Newbox";

  box.insertBefore(newDiv1, box.firstChild)
  box.appendChild(newDiv2)
  console.log("Running task 3");
}

// Don't change this function
function handleHover(event) {
  // Change the text of the target
  event.target.textContent = "OFF";
}
