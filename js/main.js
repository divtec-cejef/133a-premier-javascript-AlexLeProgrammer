/**
 * Mon premier JS
 * @author  Alex Etienne
 * @version 0.0.1
 * @since   2023-08-29
 */
"use strict";

// Récupérer les éléments
let boutonAjouter = document.querySelector(".ajouter");
let txtArticle = document.querySelector("#article");
let ulArticles = document.querySelector("ul.articles");

// Affiche dans la console
console.log(boutonAjouter, txtArticle, ulArticles);

// Ecoute le clic du bouton
boutonAjouter.addEventListener("click", () => {
    ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
    // Vide le champ texte
    txtArticle.value = "";
});