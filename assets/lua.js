// ==========================
// LUNEXIAMC - LUA.JS
// ==========================

// MENU RESPONSIVO
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll("#menu li a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("active"));
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// ANIMAÇÃO AO ROLAR
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.15 });

document.querySelectorAll("section, .card, .sobre, .hero-content, .hero-logo").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// HERO FADE-IN
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
});

// BACKGROUND PARALLAX
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = scrollPos * 0.2 + "px";
});
