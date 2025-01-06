const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
};

const teachers = [
    {
        "name": "Mrs. Frost",
        "type": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
];

function task1() {
    // Create your own object assigned to a variable.
    // console.log your object when this function is run.
    const games = {
        "name": "Rust",
        "age": "11 years",
        "studio": "FacePunch Studios",
        "players": "Peak 182,603 players"
    };
    console.log(games);
};

function task2() {
    // Write some HTML to create a card display for a person.
    // When you click the button, the data from the `person`
    // object above should be filled in on the page.
    const personBox = document.querySelector(".person");
    
    document.getElementById("name").innerText = "Name: " + person.name
    document.getElementById("subject").innerText = "Subject: " + person.subject
    document.getElementById("experience").innerText = "Experience: " + person.experience
}

function task3() {
    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
    teachers.forEach(item => {
        item.role = "Teacher"
        // let template = `The ${person.role} is ${person.name} and he has ${person.experience} years of experience.`
        let task3 = document.getElementById("task-3")
        let newtxt = document.createElement("p")
        newtxt.innerText = `The ${item.role} is ${item.name} and he has ${item.experience} years of experience.`
        task3.appendChild(newtxt)
    });
}