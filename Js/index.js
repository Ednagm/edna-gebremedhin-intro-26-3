const footer = document.createElement("footer");
document.body.append(footer);

const today = new Date();
const thisYear = today.getFullYear();

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
