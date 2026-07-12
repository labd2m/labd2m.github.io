//document.querySelector('button').onclick=()=>alert('Página de projetos em construção.');

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});