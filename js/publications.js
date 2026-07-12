function generateBibtex(pub) {

    const authors = pub.authors.join(" and ");

    let bib = `@${pub.type}{${pub.citationKey},`;

    bib += `  author = {${authors}},\n`;

    bib += `  title = {${pub.title}},\n`;

    if (pub.type === "article") {

        bib += `  journal = {${pub.journal}},\n`;

    } else {

        bib += `  booktitle = {${pub.booktitle}},\n`;

    }

    bib += `  year = {${pub.year}},\n`;

    if (pub.publisher)
        bib += `  publisher = {${pub.publisher}},\n`;

    if (pub.pages)
        bib += `  pages = {${pub.pages}},\n`;

    if (pub.doi)
        bib += `  doi = {${pub.doi}},\n`;

    bib += "}";

    return bib;
}

function showBibtex(publication){

    const bib = generateBibtex(publication);

    document.getElementById("bibtex-text").value = bib;

    document.getElementById("bibtex-modal")
        .style.display = "flex";

}

async function loadPublications() {

    const container = document.getElementById("publication-list");

    try {

        const response = await fetch("data/publications.json");

        if (!response.ok) {
            throw new Error("Não foi possível carregar o arquivo publications.json.");
        }

        const data = await response.json();

        if (
            !data.publications ||
            !Array.isArray(data.publications) ||
            data.publications.length === 0
        ) {
            container.innerHTML = `
                <p class="empty-message">
                    Nenhuma publicação cadastrada até o momento.
                </p>
            `;
            return;
        }

        // Ordena por ano (mantém a ordem do JSON dentro do mesmo ano)
        const publications = [...data.publications].sort((a, b) => b.year - a.year);

        let currentYear = null;

        publications.forEach(publication => {

            // Cria o título do ano
            if (publication.year !== currentYear) {

                currentYear = publication.year;

                const year = document.createElement("h2");

                year.className = "publication-year";

                year.textContent = currentYear;

                container.appendChild(year);
            }

            const card = document.createElement("article");

            card.className = "publication-card";

            let links = "";

            //links += `<button class="bibtex-button" onclick="showBibtex(${index})">BibTeX</button>`;

            if (publication.links?.pdf) {
                links += `<a href="${publication.links.pdf}" target="_blank">PDF</a>`;
            }

            if (publication.links?.doi) {
                links += `<a href="${publication.links.doi}" target="_blank">DOI</a>`;
            }

            if (publication.links?.github) {
                links += `<a href="${publication.links.github}" target="_blank">GitHub</a>`;
            }

            if (publication.links?.dataset) {
                links += `<a href="${publication.links.dataset}" target="_blank">Replication Package</a>`;
            }

            links += `<a href="#" class="bibtex-button">BibTeX</a>`;

            card.innerHTML = `
                <h3>${publication.title}</h3>

                <p class="publication-authors">
                    ${publication.authors.join(", ")}
                </p>`;

            if (publication.type === "article") {

                card.innerHTML += `  <p class="publication-venue">
                                        <strong>${publication.journal}</strong> • ${publication.year}
                                    </p>`;

            } else {

                card.innerHTML += `  <p class="publication-venue">
                                        <strong>${publication.booktitle}</strong> • ${publication.year}
                                    </p>`;

            }

            card.innerHTML += `

                <p class="publication-abstract">
                    ${publication.abstract}
                </p>

                <div class="publication-links">
                    ${links}
                </div>
            `;


            const bibButton = card.querySelector(".bibtex-button");

            bibButton.addEventListener("click", (e) => {

                e.preventDefault();
                showBibtex(publication);

            });

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <p class="empty-message">
                Não foi possível carregar as publicações.
            </p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    loadPublications();

    const modal = document.getElementById("bibtex-modal");

    const closeButton = document.getElementById("close-modal");

    const copyButton = document.getElementById("copy-bibtex");

    const bibText = document.getElementById("bibtex-text");

    /* -------------------------
       Copiar BibTeX
    -------------------------- */

    copyButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(bibText.value);

            copyButton.textContent = "✓ Copiado!";

            setTimeout(() => {

                copyButton.textContent = "Copiar";

            }, 2000);

        } catch {

            alert("Não foi possível copiar o BibTeX.");

        }

    });

    /* -------------------------
       Fechar no X
    -------------------------- */

    closeButton.addEventListener("click", () => {

        modal.style.display = "none";

    });

    /* -------------------------
       Fechar clicando fora
    -------------------------- */

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });

    /* -------------------------
       Fechar com ESC
    -------------------------- */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.style.display === "flex"
        ) {

            modal.style.display = "none";

        }

    });

});