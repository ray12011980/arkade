// document.write("im using javascript");

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
