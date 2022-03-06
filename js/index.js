"use strict";

//Academic history
import { myAcademicHistory } from "./myAcademicHistory.js";
//project list
import { myProjects } from "./myProjects.js";
//form
import { form, handleSubmit } from "./form.js";
//footer initials
import { showFooter } from "./footer.js";
//skill icons
export * from "./mySkills.js";
//show hr lines
export * from "./designs/hrLine.js";

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
let isNavOpen;
const navMobile = document.querySelector(".nav__list--mobile");

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
const hideNavWhenMobile = () => {
  if (sizeChecker()) {
    navMobile !== null &&
      (isNavOpen = navMobile.classList.contains("nav--show"));

    if (!isNavOpen) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth <= 960 && window.pageYOffset < 70) {
          navEl.style.top = "0";
        }
        if (window.innerWidth <= 960 && window.pageYOffset >= 70) {
          navEl.style.top = "-70px";
        }
      }, delay);
    }
  }
};

//lazyload hero img
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
const typeWriter = (text) => {
  //prepare for typewrite
  const typeWriteText = (text += "_");

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

//nested stuff to load on load
const loadStuff = () => {
  setTimeout(lazyload, delay);
  navState();
  sizeChecker();
  typeWriter("frontend developer");
  observeForAnimations();
  myProjects();
  showFooter("Žydrūnas Rimkus");
  myAcademicHistory();
};

//EVENT LISTENERS

//listen for window resize
window.addEventListener("resize", function () {
  clearTimeout(timeout);
  timeout = setTimeout(navState, delay);
  timeout = setTimeout(sizeChecker, delay);
});

//listen for page load
window.addEventListener("load", () => {
  loadStuff();
});

//wait for scrolls
window.onscroll = () => {
  hideNavWhenMobile();
};

//listen for submit for form
form.addEventListener("submit", handleSubmit);

