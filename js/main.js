//document.querySelector('button').onclick=()=>alert('Página de projetos em construção.');

/*function initializeMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const menu =
        document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

document.addEventListener("DOMContentLoaded", async () => {

    await include("header", "components/header.html");

    await include("footer", "components/footer.html");

    initializeMenu();

});*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});