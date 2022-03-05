"use strict";

//CONSTS and LETS

//throttling and debouncing
let timeout = false,
  delay = 50;

//for nav menu
const navEl = document.querySelector(".nav");
const navMenu = document.getElementById("nav__menu");
const navItems = ["about", "skills", "work", "contact"];
const burgerIcon = `
<div id='nav__menu--burger'>
    <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
    </label>
</div>`;

//for hrline
const hr = `        
<div class="custom-shape-divider-bottom-1645529117">
<svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <path
    d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
    class="shape-fill"
  ></path>
</svg>
</div>`;
const hrLine = document.getElementById("hr");

const hr2 = `<div class="custom-shape-divider-bottom-1646163304">
<svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
</svg>
</div>`;
const hr2Line = document.getElementById("hr2");

const hr3 = `
<div class="custom-shape-divider-top-1646352619">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>`;
const hr3Line = document.getElementById("hr3");
//about me tab
const academicHistory = [
  {
    school: "The Complete 2022 Web Development Bootcamp",
    degree: "WEB Development Course",
    year: 2022,
    month: "January",
  },
  {
    school: "Vilnius CODING School",
    degree: "WEB Development Course",
    year: 2021,
    month: "November",
  },
  {
    school: "Kauno Kolegija",
    degree: "Bachelor's degree, Informatics Engineering",
    year: 2018,
    month: "",
  },
];

//for skills tab
const skillsIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
];

//OTHER STUFF
//hr line
hrLine.insertAdjacentHTML("afterbegin", hr);
hr2Line.insertAdjacentHTML("afterbegin", hr2);
hr3Line.insertAdjacentHTML("beforeend", hr3);

//FUNCTIONS

//nav items
const nav = (el, style) => {
  el.insertAdjacentHTML(
    "afterbegin",
    `
    <ul class='${style}'>
        ${navItems
          .map((item) => {
            return `<li><a href="#${item}">${item}.</a></li>`;
          })
          .join("")}
    </ul>
    `
  );
};

//toggle burger classes
const burgerToggle = () => {
  document.querySelector(".nav__list--mobile").classList.toggle("nav--hidden");
  document.querySelector(".nav__list--mobile").classList.toggle("nav--show");
};

//checks nav state
const navState = () => {
  const desktop = document.querySelector(".nav__list"),
    mobile = document.querySelector(".nav__list--mobile"),
    burger = document.getElementById("nav__menu--burger"),
    mobileLength = document.getElementsByClassName("nav__list--mobile").length,
    desktopLength = document.getElementsByClassName("nav__list").length;
  if (window.innerWidth > 960) {
    if (desktopLength === 0) {
      nav(navMenu, "nav__list");
      navEl.style.top = "0";
      if (burger) {
        burger.remove();
        mobile.remove();
      }
    }
    document
      .querySelector(".nav__list")
      .querySelectorAll("a")
      .forEach((e) => {
        e.addEventListener("click", (e) => {
          e.preventDefault();
          const el = e.target.getAttribute("href");
          document
            .querySelector(`${el}`)
            .scrollIntoView({ behavior: "smooth", block: "end" });
        });
      });
  } else {
    if (mobileLength === 0) {
      navMenu.insertAdjacentHTML("afterbegin", burgerIcon);
      nav(navMenu, "nav__list--mobile nav--hidden");
      if (desktop) {
        desktop.remove();
      }
    }
    document.getElementById("check").addEventListener("click", burgerToggle);
    document
      .querySelector(".nav__list--mobile")
      .querySelectorAll("a")
      .forEach((e) => {
        e.addEventListener("click", (e) => {
          e.preventDefault();
          document.getElementById("check").checked = false;
          burgerToggle();
          const el = e.target.getAttribute("href");
          document
            .querySelector(`${el}`)
            .scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
  }
};

//hide nav on scroll
const hideNavOnScroll = () => {
  if (window.innerWidth <= 960 && window.pageYOffset < 70) {
    navEl.style.top = "0";
  }
  if (window.innerWidth <= 960 && window.pageYOffset >= 70) {
    navEl.style.top = "-70px";
  }
};

//lazyload image function
const lazyload = () => {
  const heroImg = document.querySelector("#hero-img");
  const heroImgSrc = heroImg.getAttribute("data-src");
  heroImg.src = heroImgSrc;
  heroImg.addEventListener("load", () => {
    heroImg.classList.remove("lazyload");
  });
};

//window size checker
const sizeChecker = () => {
  if (window.innerWidth > 960) return false;
  if (window.innerWidth <= 960) return true;
};

//wai = what am i / typewriter
const waiTypeWriter = () => {
  //get text to typewrite
  const typeWriteText = (document.querySelector(".hero__info--wai").innerHTML +=
    "_");

  //typewriter element
  const wai = document.querySelector(".hero__info--wai");
  let i = 0;

  //set wai to empty
  wai.innerHTML = "";

  //typewriter magic starts here
  const typeWriterMagic = () => {
    let typeSpeed = 75;
    if (i < typeWriteText.length) {
      wai.innerHTML += typeWriteText.charAt(i);
      i++;
      if (i === typeWriteText.length - 1) {
        typeSpeed = 5000;
      }
      if (i === typeWriteText.length) {
        typeSpeed = 1000;
        wai.innerHTML = "";
        i = 0;
      }
      setTimeout(typeWriterMagic, typeSpeed);
    }
  };
  typeWriterMagic();
};

//Academic history filler
const acHistoryFiller = () => {
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

//skill icons
skillsIcons.reverse().map((e) => {
  document
    .getElementById("skills-icons")
    .insertAdjacentHTML(
      "afterbegin",
      `<div class='skills-icons--pos'><img class='skills__icons-style' src='${e}'></div>`
    );
});

//skill icons animations
const iconsAnimation = () => {
  const skillsTab = document.getElementById("skills-icons");
  const ss = document.querySelectorAll(".skills__icons-style");
  //animation function
  const doAnimation = (e) => {
    anime({
      targets: e,
      rotate: [
        {
          value: -360,
          duration: 1000,
        },
        { value: 720, duration: 500 },
      ],
      easing: "cubicBezier(.5,0,.5,1)",
      begin: function () {
        e.style.zIndex = "9999";
      },
      complete: function () {
        e.style.zIndex = "1";
      },
    });
  };
  //intro animation
  anime({
    targets: skillsTab,
    translateX: [-2000, 0],
    duration: 500,
    easing: "spring(1, 80, 10, 0)",
  });

  //onclick animation
  ss.forEach((e) => {
    e.style.cursor = "pointer";
    e.addEventListener("click", () => {
      doAnimation(e);
    });
  });
};

//observer
const observeForAnimations = () => {
  //main observe function
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //do stuff when div found
        iconsAnimation();

        //stop observing if needed
        observer.unobserve(document.getElementById("orbit"));
        return;
      }
    });
  });

  //observe skills tab
  observer.observe(document.getElementById("orbit"));
};

//my projects

const myProjects = () => {
  const projWrapper = document.querySelector(".work__example__wrapper");

  const projectList = [
    {
      sc: "./img/web-screenshots/screenshot-zydrunasrimkus.github.io-2022.03.03-20_58_44.png",
      name: "simons game",
      github: "https://github.com/zydrunasrimkus/simongame",
      demo: "https://zydrunasrimkus.github.io/simongame/",
    },
    {
      sc: "./img/web-screenshots/dicegame.png",
      name: "dicegame",
      github: "https://github.com/zydrunasrimkus/dicegame",
      demo: "https://zydrunasrimkus.github.io/dicegame/",
    },
    {
      sc: "./img/web-screenshots/drumgame.png",
      name: "drumgame",
      github: "https://github.com/zydrunasrimkus/drumgame",
      demo: "https://zydrunasrimkus.github.io/drumgame/",
    },
    {
      sc: "./img/web-screenshots/orderfront.png",
      name: "order summary card solution",
      github: "https://github.com/zydrunasrimkus/order-summary-component-main",
      demo: "https://zydrunasrimkus.github.io/order-summary-component-main/",
    },
    {
      sc: "./img/web-screenshots/timetrack.png",
      name: "time tracking dashboard solution",
      github: "https://github.com/zydrunasrimkus/time-tracking-dashboard-main",
      demo: "https://mighty-tor-23888.herokuapp.com/",
    },
    {
      sc: "./img/web-screenshots/ejs.png",
      name: "blog website back-end",
      github: "https://github.com/zydrunasrimkus/ejs-project",
      demo: "https://sheltered-wave-16484.herokuapp.com/",
    },
    {
      sc: "./img/web-screenshots/ecommerce.png",
      name: "e-commerce front-end",
      github: "https://github.com/zydrunasrimkus/commercecore-front-end-task",
      demo: "https://salty-island-53296.herokuapp.com/",
    },
    {
      sc: "./img/web-screenshots/tracker.png",
      name: "my tracker - track your workouts",
      github: "https://github.com/zydrunasrimkus/my-tracker",
      demo: "https://optimistic-wilson-94b8c0.netlify.app/",
    },
  ];

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
    <div>
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

myProjects();

//EVENT LISTENERS

//execute stuff when page loads
window.onload = () => {
  navState();
  sizeChecker();
  waiTypeWriter();
  observeForAnimations();
  acHistoryFiller();
};

//listen for window size
window.addEventListener("resize", function () {
  clearTimeout(timeout);
  timeout = setTimeout(navState, delay);
  timeout = setTimeout(sizeChecker, delay);
});

//listen for page load for lazyload
window.addEventListener("load", () => {
  setTimeout(lazyload, delay);
});

//wait for scrolls
window.onscroll = () => {
  if (sizeChecker()) {
    let isNavOpen;
    const navMobile = document.querySelector(".nav__list--mobile");
    navMobile !== null &&
      (isNavOpen = navMobile.classList.contains("nav--show"));

    if (!isNavOpen) {
      clearTimeout(timeout);
      timeout = setTimeout(hideNavOnScroll, delay);
    }
  }
};

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

const footer = document.getElementById("footer");
const date = new Date().getFullYear();
footer.insertAdjacentText("afterbegin", `© Žydrūnas Rimkus ${date}`);

import { ggwp } from "./lol.js";
ggwp();
