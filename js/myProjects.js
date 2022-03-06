//my projects

import { projectList } from "./lists/projects.js";

const myProjects = () => {
  const projWrapper = document.querySelector(".work__example__wrapper");

  projectList.forEach((e) => {
    const { sc, name, github, demo } = e;

    const project = `
      <div class="work__example">
      <img
        src="${sc}"
        alt=""
      />
      <p>
        ${name}
      </p>
      <div class='work__example__btn--list'>
        <a
          class="work__example__btn work__example__btn--color"
          href="${github}"
          target="_blank"
          ><span>github</span></a
        >
        <a
          class="work__example__btn work__example__btn--color"
          href="${demo}"
          target="_blank"
          ><span>demo</span></a
        >
      </div>
      `;

    projWrapper.insertAdjacentHTML("afterbegin", project);
  });
};

export { myProjects };
