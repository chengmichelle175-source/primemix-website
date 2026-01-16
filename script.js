// PRIMEMIX — Pure JS enhancements (GitHub Pages friendly)

(function () {
  "use strict";

  function setActiveNav() {
    const path = window.location.pathname;
    const current = path.substring(path.lastIndexOf("/") + 1) || "index.html";

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === current) link.classList.add("active");
    });
  }

  function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function wireContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert(`Thank you, ${name}! We received your message. We'll get back to you soon.`);

      // Static hosting can't send emails directly; use mailto
      const subject = encodeURIComponent("New inquiry from PRIMEMIX website");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:info@primemix.com.au?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    enableSmoothScroll();
    wireContactForm();
    console.log("PRIMEMIX loaded.");
  });
})();
