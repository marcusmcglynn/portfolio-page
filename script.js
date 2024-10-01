const homeDesign = document.querySelector("#home");
const calculator = document.getElementById("calculator");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const calculatorInfo = document.getElementById("calculator-info");
const project2Info = document.getElementById("project2-info");
const project3Info = document.getElementById("project3-info");
const icons = document.getElementsByClassName("secondary-icon");
const jsText = document.getElementById("js-text");

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});

calculator.addEventListener("click", () => {
  const calcDisplay = window.getComputedStyle(calculatorInfo).display;

  if (calcDisplay === "none") {
    calculatorInfo.style.display = "block";
    calculator.innerText = "Hide Calculator App";
  } else {
    calculatorInfo.style.display = "none";
    calculator.innerText = "Show Calculator App";
  }
});

project2.addEventListener("click", () => {
  const project2Display = window.getComputedStyle(project2Info).display;

  if (project2Display === "none") {
    project2Info.style.display = "block";
    project2.innerText = "Hide MP3 App";
  } else {
    project2Info.style.display = "none";
    project2.innerText = "Show MP3 App";
  }
});

project3.addEventListener("click", () => {
  const project3Display = window.getComputedStyle(project3Info).display;

  if (project3Display === "none") {
    project3Info.style.display = "block";
    project3.innerText = "Hide Darts App";
  } else {
    project3Info.style.display = "none";
    project3.innerText = "Show Darts App";
  }
});

window.addEventListener("resize", function () {
  if (globalThis.innerWidth <= 800) {
    jsText.innerText = "JS";
  } else {
    jsText.innerText = "JavaScript";
  }
});

window.addEventListener("load", function () {
  const jsText = document.getElementById("js-text");
  if (globalThis.innerWidth <= 800) {
    jsText.innerText = "JS";
  } else {
    jsText.innerText = "JavaScript";
  }
});
