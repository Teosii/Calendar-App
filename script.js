const navSlider = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });
};
navSlider();

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("animationPlayed")) {
    var tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".intro", { y: "-100%", duration: 1.5, delay: 0.5 });

    sessionStorage.setItem("animationPlayed", "true");
  } else {
    document
      .querySelectorAll(".text")
      .forEach((text) => (text.style.transform = "translateY(0%)"));
    document.querySelector(".intro").style.transform = "translateY(-100%)";
  }
});
