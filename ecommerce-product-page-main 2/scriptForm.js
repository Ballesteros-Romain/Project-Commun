$(function () {
  // Récupère le bouton pour ouvrir le modal
  var boutonModal = document.getElementById("ouvrirModal");
  var boutonModalTwo = document.getElementById("ouvrirModal2");

  // Récupère le modal
  var modal = document.getElementById("monModal");
  var modalTwo = document.getElementById("monModal2");
  // Récupère le span "fermer"
  var spanFermer = document.getElementsByClassName("fermer")[0];
  var spanFermerTwo = document.getElementsByClassName("fermerTwo")[0];
  var monSlide = document.getElementById("monSLide");
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
  const emptyCart = document.getElementById("emptyId");

  // Définir une variable pour compter le nombre de produits
  let count = 1;

  let countSum = 0;

  // Fonction pour ajouter le compteur au panier
  function addToCart() {
    countSum += count;

    // Créer un nouvel élément HTML pour afficher le chiffre dans le panier
    const resultCartModal = document.querySelector(".resultCartModal");
    const numberElement = document.querySelector(".resultCart");
    numberElement.textContent = countSum;

    const sumElement = document.querySelector(".sumElement");

    sumElement.textContent = "  $  " + 125 * countSum + ".00";

    if (countSum > 0) {
      modalContentFull.style.display = "block";
      textEmpty.style.display = "none";
      resultCartModal.textContent = " x " + countSum;
    } else {
      modalContentFull.style.display = "none";
      textEmpty.style.display = "block";
    }
  }

  // Ajouter des écouteurs d'événements pour les clics sur les boutons
  plusBtn.addEventListener("click", increment);
  minusBtn.addEventListener("click", decrement);
  addToCartBtn.addEventListener("click", addToCart);
  emptyCart.addEventListener("click", emptys);

  // Supprimer le panier
  function emptys() {
    const numberElement = document.querySelector(".resultCart");
    if (numberElement) {
      // numberElement.parentNode.removeChild(numberElement);
      numberElement.innerHTML = "0";
      countSum = 0;
      numberElement.style.display = "inline";
      modalContentFull.style.display = "none";
      textEmpty.style.display = "block";
    }
  }

  //------------- Contenu modal quand panier remplis----------------
  const textEmpty = document.querySelector(".text");
  const modalContentFull = document.querySelector("#modalContentFull");
  if (countSum > 0) {
    modalContentFull.style.display = "block";
    textEmpty.style.display = "none";
  } else {
    modalContentFull.style.display = "none";
    textEmpty.style.display = "block";
  }

  //------------------------------------------ page 2------------------------------------------------------------
});
