// Write your Task 1 code inside this function!
function task1() {
  let div = document.querySelector("#text-content");
  div.innerText = "ppppppp";

  console.log("Running task 1");
}

// Write your task 2 code inside this function!
function task2() {
  let task2 = document.querySelector("#task2");
  task2.classList.toggle("color");
  console.log("Running task 2");
}

// Write your task 3 code inside this function!
function task3() {
  let list = document.querySelector("#list");
  const li = document.createElement("li");
  // I know the line below is not nesesary but i dont feel like fixing it
  const txt = document.createTextNode("Milk");

  li.appendChild(txt);
  list.append(li);
  console.log("Running task 3");
}
