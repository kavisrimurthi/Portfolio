// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // Active section link highlight
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon & navbar after link click (mobile)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ScrollReveal animations
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .skills-box, .portfolio-box, .mini-project-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed.js animation
const typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Skill bars animation on scroll
let skillSection = document.querySelector("#skills");
let skillBars = document.querySelectorAll(".bar");

window.addEventListener("scroll", () => {
  let sectionTop = skillSection.offsetTop - 200;
  if (window.scrollY >= sectionTop) {
    skillBars.forEach((bar) => {
      bar.style.width = bar.style.width; // ensures animation triggers once
    });
  }
});
