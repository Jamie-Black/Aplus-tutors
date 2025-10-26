// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Carousel auto-slide
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
}

// Change slide every 5 seconds
setInterval(showSlides, 5000);


function loadTestimonials() {
  const container = document.getElementById("testimonial-container");
  if (!container || !testimonials) return;

  container.innerHTML = testimonials
    .map(
      (t, i) => `
      <div class="testimonial-card" data-index="${i}">
        <img src="${t.image}" alt="${t.name}" class="testimonial-image">
        <p class="testimonial-message">"${t.message}"</p>
        <h4 class="testimonial-name">${t.name}</h4>
        <span class="testimonial-role">${t.role}</span>
      </div>
    `
    )
    .join("");

  let currentIndex = 0;
  const cards = document.querySelectorAll(".testimonial-card");

  function showTestimonial(index, direction = "next") {
    cards.forEach((card, i) => {
      card.classList.remove("active", "slide-in-left", "slide-in-right", "fade-out");
      if (i === index) {
        card.style.display = "block";
        card.classList.add(direction === "next" ? "slide-in-right" : "slide-in-left", "active");
      } else {
        if (card.classList.contains("active")) {
          card.classList.add("fade-out");
        }
        setTimeout(() => {
          card.style.display = "none";
        }, 400);
      }
    });
  }

  function nextTestimonial() {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(nextIndex, "next");
    currentIndex = nextIndex;
  }

  function prevTestimonial() {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex, "prev");
    currentIndex = prevIndex;
  }

  document.getElementById("nextTestimonial").addEventListener("click", nextTestimonial);
  document.getElementById("prevTestimonial").addEventListener("click", prevTestimonial);

  // Auto-slide every 6s
  setInterval(nextTestimonial, 6000);

  // Initialize
  showTestimonial(currentIndex);
}

document.addEventListener("DOMContentLoaded", loadTestimonials);