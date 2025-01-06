function task1() {
  let target = document.getElementById("task-1-target");
  let myArray = [
    "tutrle",
    "rebecca",
    "milk",
    "jackie",
    "iron",
    "cat"
  ];
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  const colorList = document.querySelector("#color-list");

  Array.from(colorList.children).forEach(item => {
    console.log(item.innerText);
});
}

function task2B() {
  // Writ your code in here
  let newList = document.createElement("div");
  let nameList = document.getElementById("name-list");
  let task2 = document.getElementById("task2");

  newList.classList.add("targetDiv");
  task2.append(newList);

  Array.from(nameList.children).forEach(item => {
    let newLi = document.createElement("li");
    newLi.textContent = "hi " + item.textContent;
    task2.appendChild(newLi);
});
}

function task3() {
  // Write your code in here
  let txt = document.querySelectorAll(".item > p");

  txt.forEach(item => {
    item.style.backgroundColor = "#" + item.innerText;
  });
}
