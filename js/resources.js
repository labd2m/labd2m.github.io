const categories = {

    tools: {

        title: "Tools",

        description:
            "Software tools developed by LABD2M to support Software Engineering research and development."

    },

    datasets: {

        title: "Datasets",

        description:
            "Datasets released to support experiments and research reproducibility."

    },

    benchmarks: {

        title: "Benchmarks",

        description:
            "Benchmarks and experimental environments for empirical evaluation."

    },

    replication: {

        title: "Replication Packages",

        description:
            "Research artifacts published alongside scientific papers."

    },

    resources: {

        title: "Resources",

        description:
            "Catalogs, documentation, and other materials produced by the laboratory."

    },

    applications: {

        title: "Applications",

        description:
            "Applications developed by LABD2M to support research, education, and technology demonstration."

    }

};



async function loadResources() {

    const response = await fetch("data/resources.json");

    const data = await response.json();

    const container = document.getElementById("resources-container");

    container.innerHTML = "";



    Object.entries(categories).forEach(([id, category]) => {

        const artifacts = data.artifacts.filter(

            artifact => artifact.category === id

        );



        // Não renderiza categorias vazias

        if (artifacts.length === 0)

            return;



        const section = document.createElement("section");

        section.className = "resource-section";



        section.innerHTML = `

            <div class="resource-header">

                <h2>${category.title}</h2>

                <p>${category.description}</p>

            </div>

            <div class="resource-grid"></div>

        `;



        const grid = section.querySelector(".resource-grid");



        artifacts.forEach(resource => {



            let buttons = "";



            if (resource.links.github) {

                buttons += `

                    <a

                        href="${resource.links.github}"

                        target="_blank"

                        class="resource-button">

                        GitHub

                    </a>

                `;

            }



            if (resource.links.website) {

                buttons += `

                    <a

                        href="${resource.links.website}"

                        target="_blank"

                        class="resource-button">

                        Site

                    </a>

                `;

            }



            if (resource.links.paper) {

                buttons += `

                    <a

                        href="${resource.links.paper}"

                        class="resource-button">

                        Publicação

                    </a>

                `;

            }



            const card = document.createElement("div");

            card.className = "resource-card";



            card.innerHTML = `

                <img

                    src="${resource.image}"

                    alt="${resource.title}"

                >

                <h3>

                    ${resource.title}

                </h3>

                <p>

                    ${resource.description}

                </p>

                <div class="resource-links">

                    ${buttons}

                </div>

            `;



            grid.appendChild(card);

        });



        container.appendChild(section);

    });

}



document.addEventListener(

    "DOMContentLoaded",

    loadResources

);