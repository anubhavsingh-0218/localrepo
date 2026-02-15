// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide(){
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// ===============================
// SCROLL FADE IN (Clean Version)
// ===============================

const sections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= HERO SLIDER =================

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 4000);

});
