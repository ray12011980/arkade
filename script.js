// document.write("IM USING JAVA");
//**********************************************************************MAIN-NAV

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
  });
};

navSlide();

// // **********************************************************************sub-menu-btn

function openList(evt, cityList) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityList).style.display = "block";
  evt.currentTarget.className += " active";
}

//**********************************************************************FADE-IN
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -120px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      entry.target.classList.remove("appear");
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
//**********************************************************************FADE-IN

//**********************************************************************SLIDE-IN
const sliders = document.querySelectorAll(".slide-in");

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//**********************************************************************SLIDE-IN
