// Récupération des publications depuis le fichier JSON
const reponse = await fetch("publications.json");
const publications = await reponse.json();


// const noms = publications.map(publication => publication.intitule);
// console.info(noms)

let i = 0
while (i <= publications.length) {
    const article = publications[i];
    const ligne = document.createElement("tr");
    const dateElement = document.createElement("td");
    dateElement.innerText = article.date;
    const nomElement = document.createElement("td");
    nomElement.innerText = article.type;
    const intituleElement = document.createElement("td");
    intituleElement.innerText = article.intitule;
    const fichierElement = document.createElement("td");
    fichierElement.innerText = article.fichier;



    const sectionArticles = document.querySelector(".articles");
    sectionArticles.appendChild(ligne);
    sectionArticles.appendChild(dateElement);
    sectionArticles.appendChild(nomElement);
    sectionArticles.appendChild(intituleElement);
    sectionArticles.appendChild(fichierElement);

    i = i + 1;

}
