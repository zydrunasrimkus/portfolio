import { skillList } from "./lists/skills.js";

const skillIcons = document.getElementById("skills-icons");

skillList.reverse().map((e) => {
  skillIcons.insertAdjacentHTML(
    "afterbegin",
    `<div class='skills-icons--pos'><img class='skills__icons-style' src='${e}'></div>`
  );
});
