// Récupération des publications depuis le fichier JSON
const reponse = await fetch("publications.json");
console.info(reponse)
const publications = await reponse.json();

// let i = 0
// while (i <= length("publications.json")) {
    const article = publications[0];
    console.info(article)
    const dateElement = document.createElement("p");
    dateElement.innerText = article.date;
    const nomElement = document.createElement("p");
    nomElement.innerText = article.type;
    const fichierElement = document.createElement("p");
    fichierElement.src = article.fichier;


const sectionArticles = document.querySelector(".articles");
sectionFiches.appendChild(dateElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(fichierElement);
