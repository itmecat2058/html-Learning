const todoBox = document.querySelector(".todoOutput")

async function req(method, endpoint, data = null) {
  let userId = btoa("morley:602838");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${userId}`,
  };

  let options = {
    method: method,
    headers: headers,
  };

  if (method.toLowerCase() === "post") {
    options["body"] = JSON.stringify(data);
  }

  if (method.toLowerCase() === "put") {
    options["body"] = `{"completed": true}`;
  }

  let request = await fetch(`http://10.20.240.46/${endpoint}`, options);

  if (request.ok) {
    let result = await request.json();
    return result;
  }
}

window.addEventListener("DOMContentLoaded", async function () {
  let data = await req("get", "todo", null);
  render(data.data);
});

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  post(event.target);
});

async function post(form) {
  let formData = Object.fromEntries(new FormData(form));
  let result = await req("post", "todo", formData);
  render(result.data);
}


function render(list) {
  todoBox.innerHTML = list.map(todo => {
    console.log(todo.completed)
    if (todo.completed = false) {
      let isComplete = "notCompleted"
    }
    return `
            <div id="${todo.id}" class="${isComplete}">
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <button data-id="${todo.id}" onclick="del(this)">Delete</button>
            <button data-id="${todo.id}" onclick="complete(this)">Completed</button>
            </div>
        `
  })
}

async function del(button) {
  let todoid = button.dataset.id
  let request = await req("delete", `todo/${todoid}`)
  render(request.data)
}

async function complete(button) {
  let todoid = button.dataset.id
  document.getElementById(todoid).classList.add("completed")
  let request = await req("put", `todo/${todoid}`)
  render(request.data)
}