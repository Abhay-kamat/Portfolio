// script.js

document.addEventListener("DOMContentLoaded", () => {

  // Smooth Scrolling
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.setAttribute("data-theme", "dark");
  }

  darkModeToggle?.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  // Scroll Animation: Fade in sections
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Contact Form Validation
  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });

  // Resume Download Alert (Optional)
  const resumeBtn = document.querySelector(".btn-outline");
  resumeBtn?.addEventListener("click", () => {
    alert("Your resume will download shortly!");
  });

});

