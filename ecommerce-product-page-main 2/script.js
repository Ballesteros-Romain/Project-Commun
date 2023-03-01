// Récupère le bouton pour ouvrir le modal
var boutonModal = document.getElementById("ouvrirModal");

// Récupère le modal
var modal = document.getElementById("monModal");

// Récupère le span "fermer"
var spanFermer = document.getElementsByClassName("fermer")[0];

// Ouvre le modal lorsque l'utilisateur clique sur le bouton
boutonModal.onclick = function () {
  modal.style.display = "block";
};

// Ferme le modal lorsque l'utilisateur clique sur le span "fermer"
spanFermer.onclick = function () {
  modal.style.display = "none";
};

// Ferme le modal lorsque l'utilisateur clique en dehors du modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Incrementation et decrementation du nombre de produits
// Récupérer les éléments HTML
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const counter = document.getElementById("counter");
const addToCartBtn = document.getElementById("add-to-cart");
const modalElement = document.querySelector(".js-modal");

// Définir une variable pour compter le nombre de clics
let count = 0;

// Fonction pour incrémenter le compteur
function increment() {
  count++;
  counter.textContent = count;
}

// Fonction pour décrémenter le compteur
function decrement() {
  count--;
  counter.textContent = count;
}

// Fonction pour ajouter le compteur au panier
function addToCart() {
  const cart = []; // un tableau vide pour stocker les valeurs du panier
  cart.push(count); // ajouter la valeur de count au panier

  // Créer un nouvel élément HTML pour afficher le chiffre dans le panier
  const numberElement = document.createElement("span");
  numberElement.className = "resultCart";
  numberElement.textContent = count;

  // Ajouter le chiffre à l'élément "js-modal"
  modalElement.appendChild(numberElement);

  console.log(cart); // afficher le contenu du panier dans la console
}

// Ajouter des écouteurs d'événements pour les clics sur les boutons
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
addToCartBtn.addEventListener("click", addToCart);

// ajouter 1 au modal
