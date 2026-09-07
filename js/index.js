const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

fetch("https://api.github.com/users/Ednagm/repos")
    .then(function(response) {
    return response.json();
  });
    .then(function(data) {
    let repositories = data;
    console.log("Lesson 9: Repositories loaded successfully!");
    console.log(repositories);
    
    
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
}
  });
    .catch(function(error) {
    console.log(error);
  });
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.append(footer);

const copyright = document.createElement("p");
copyright.innerHTML = `© ${thisYear} Edna Gebremedhin`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

