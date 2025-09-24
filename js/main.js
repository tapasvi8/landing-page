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
