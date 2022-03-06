import { academicHistory } from "./lists/academicHistory.js";

const myAcademicHistory = () => {
  const acHistory = document.querySelector(".aboutme_text__sub--info");

  academicHistory.reverse().forEach((e) => {
    const { school, degree, year, month } = e;
    const template = `
      <p>
      <i class="fa-solid fa-check fa-lg"></i
      > <b>${school}. </b>${degree}. Graduated ${
      month.length > 0 ? `${month}, ` : ` `
    }${year}.</p>
      <p>
      `;
    acHistory.insertAdjacentHTML("afterbegin", template);
  });
};

export { myAcademicHistory };
