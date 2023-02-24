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
