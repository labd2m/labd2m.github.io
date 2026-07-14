# LABD2M Website

Official website of the **LABD2M (Laboratório de Engenharia de Software e Dispositivos Móveis)**, a research laboratory from the **Department of Computer Science** at the **Federal University of Viçosa (UFV)**.

The website presents the laboratory, its members, research areas, publications, projects, software tools, datasets, and other research artifacts produced by the group.

---

## 🌐 Website

https://labd2m.github.io/

---

## About LABD2M

LABD2M conducts research in **Software Engineering** and **Mobile Computing**, with a strong emphasis on software quality, software evolution, functional programming, artificial intelligence for software engineering, and mobile application development.

Our mission is to develop high-quality research while fostering collaboration between academia and industry through open science principles.

---

## Features

The website includes dedicated pages for:

- Home
- Members
- Publications
- Tools & Resources
- Contact

Research artifacts are automatically loaded from JSON files, making the website easy to maintain without modifying the HTML pages.

---

## Project Structure

```text
.
├── components/
│   ├── header.html
│   └── footer.html
│
├── css/
│   └── style.css
│
├── data/
│   ├── publications.json
│   └── resources.json
│
├── img/
│
├── js/
│   ├── include.js
│   ├── main.js
│   ├── publications.js
│   └── resources.js
│
├── index.html
├── membros.html
├── egressos.html
├── publicacoes.html
├── ferramentas.html
└── contato.html
```

---

## Dynamic Content

The website was designed so that most of its content is maintained through JSON files.

### Publications

```
data/publications.json
```

Stores all publications shown on the Publications page.

Each publication may include:

- title
- authors
- venue
- year
- abstract
- BibTeX information
- DOI
- PDF
- GitHub repository
- Dataset
- Replication package

---

### Tools & Resources

```
data/resources.json
```

Stores software, datasets, benchmarks, replication packages, catalogs, and other research artifacts developed by LABD2M.

Categories are generated automatically according to the registered artifacts.

Current categories include:

- Applications
- Tools
- Datasets
- Benchmarks
- Resources
- Replication Packages

---

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- GitHub Pages

No external frameworks are required.

---

## Running Locally

Since the website loads JSON files using `fetch()`, it **must** be executed through a local HTTP server.

Using Python:

```bash
python -m http.server
```

or using VS Code with the **Live Server** extension.

Opening the HTML files directly (`file://`) will result in CORS errors.

---

## Contributing

Contributions are welcome.

Feel free to open issues or submit pull requests for:

- correcting information
- adding publications
- improving the interface
- fixing bugs
- adding new research artifacts

---

## License

This project is released under the MIT License.

---

## Contact

**LABD2M – Laboratório de Engenharia de Software e Dispositivos Móveis**

Department of Computer Science  
Federal University of Viçosa (UFV)  
Viçosa – Minas Gerais – Brazil

🌐 https://labd2m.github.io/