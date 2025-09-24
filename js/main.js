console.log("Landing page ready");

// Simple menu toggle for mobile
const btn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}
// Close menu after clicking a nav link (mobile)
nav?.querySelectorAll("a")?.forEach(a =>
    a.addEventListener("click", () => {
      if (window.innerWidth < 768 && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn?.setAttribute("aria-expanded", "false");
      }
    })
  );
  
document.getElementById("year")?.append(new Date().getFullYear());
