const dark = document.getElementById("dark");
const container = document.querySelectorAll(".container");
const navbar = document.querySelector(".navbar");
const mode = document.getElementById("light");
const modeLight = document.querySelector(".mode_light");
const container_fluid = document.querySelector("container-fluid");
const navlink = document.querySelectorAll(".nav-link");
const currentMode = document.getElementById("sun");
const navButton = document.getElementById("btn");
const logo = document.querySelector(".navbar-brand");
const serviceButton = document.querySelectorAll(".read");
const serviceList = document.querySelectorAll(".services-list");
const downloadBtn = document.querySelectorAll(".btn-box");
//light mode

//for light mode
const serviceListWhite = function () {
  serviceButton.forEach((ele) => {
    ele.classList.remove("readHover");
  });
  serviceList.forEach((ele) => {
    ele.classList.remove("servicesList--white");
  });
  downloadBtn.forEach((ele) => {
    ele.classList.remove("servicesList--white");
  });
};

//for black mode
const serviceListBlack = function () {
  serviceButton.forEach((ele) => {
    ele.classList.add("readHover");
  });
  serviceList.forEach((ele) => {
    ele.classList.add("servicesList--white");
  });
  downloadBtn.forEach((ele) => {
    ele.classList.add("servicesList--white");
  });
};

const containerRemove = function () {
  container.forEach((arr) => {
    arr.classList.remove("active");
    arr.classList.remove("navbar_active");
    arr.classList.remove("container_active");
    arr.classList.add("shadow-lg");
  });
  navlink.forEach((ele) => {
    ele.classList.remove("navbar_active");
  });
};
const lightMode = function () {
  mode.addEventListener("click", function (e) {
    // e.preventDefault();
    navbar.classList.add("bg-body-tertiary");
    navbar.classList.remove("active");
    currentMode.classList.remove("bi-moon-stars-fill");
    currentMode.classList.add("bi-sun");
    logo.classList.remove("logo");
    modeLight.classList.remove("active");
    modeLight.classList.remove("navbar_active");

    containerRemove();
    serviceListWhite();

    if (navbar.classList.contains("active")) {
      document.body.style.backgroundColor = "#5c5e5c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
};
lightMode();

// dark mode

const containerAdder = function () {
  container.forEach((arr) => {
    arr.classList.add("active");
    arr.classList.add("navbar_active");
    arr.classList.add("container_active");
    arr.classList.remove("shadow-lg");
  });

  navlink.forEach((ele) => {
    ele.classList.add("navbar_active");
  });
};

const darkMode = function () {
  dark.addEventListener("click", function () {
    navbar.classList.remove("bg-body-tertiary");
    navbar.classList.add("active");
    logo.classList.add("logo");
    currentMode.classList.remove("bi-sun");
    currentMode.classList.add("bi-moon-stars-fill");
    modeLight.classList.add("active");
    navButton.style.backgroundColor = "white";

    containerAdder();
    serviceListBlack();
    modeLight.classList.add("navbar_active");

    if (navbar.classList.contains("active")) {
      document.body.style.backgroundColor = "#5c5e5c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
};
darkMode();

// window.addEventListener("load", function () {
//   currentMode.classList.add("bi-sun");
//   if (currentMode.classList.contains("bi-sun")) {
//     mode.style.backgroundColor = "blue";
//   }
// });
