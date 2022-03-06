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

const hr4 = `<div class="custom-shape-divider-top-1646581045">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
</svg>
</div>`;

const hr4Line = document.getElementById("hr4");

//show hr lines
hrLine.insertAdjacentHTML("afterbegin", hr);
hr2Line.insertAdjacentHTML("afterbegin", hr2);
hr3Line.insertAdjacentHTML("beforeend", hr3);
hr4Line.insertAdjacentHTML("afterbegin", hr4);