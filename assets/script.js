// ==========================
// VALNYXOR LABS - SCRIPT.JS
// ==========================

// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
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

// ANIMAÇÃO AO ROLAR (fade-in)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll("section, .servico, .depoimento, .sobre").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// HERO FADE-IN
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero h2");
    const heroP = document.querySelector(".hero p");
    const heroBtn = document.querySelector(".hero .btn");

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
    heroP.style.opacity = "1";
    heroP.style.transform = "translateY(0)";
    heroBtn.style.opacity = "1";
    heroBtn.style.transform = "translateY(0)";
});

// PEQUENO PARALLAX NO BACKGROUND AO ROLAR
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = scrollPos * 0.2 + "px";
});
