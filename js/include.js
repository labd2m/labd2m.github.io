async function include(id, file) {

    const response = await fetch(file);

    document.getElementById(id).innerHTML =
        await response.text();

}

document.addEventListener("DOMContentLoaded", async () => {

    await include("header", "components/header.html");

    await include("footer", "components/footer.html");

    // Inicializa o menu mobile
    initializeMenu();

    // Destaca a página atual
    const currentPage =
        location.pathname.split("/").pop() || "index.html";

    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            if (link.getAttribute("href") === currentPage) {

                link.classList.add("active");

            }

        });

});