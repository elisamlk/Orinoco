// Récupération de l'ID produit
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);
let url = "http://localhost:3000/api/cameras/" + id;
console.log(url);

ajaxGet(url, function (response) {
  let cameraDescription = JSON.parse(response);

  // Récupération de l'élement main
  let productDescription = document.getElementById("productDescription");

  // Création div
  let cardDescription = document.createElement("div");
  cardDescription.className = "cardDescription";
  productDescription.appendChild(cardDescription);

  // Création de l'image
  let imageDescription = document.createElement("img");
  imageDescription.className = "imageDescription";
  imageDescription.src = cameraDescription.imageUrl;
  cardDescription.appendChild(imageDescription);

  // Création de la div bodyDescription
  let bodyDescription = document.createElement("div");
  bodyDescription.className = "bodyDescription";
  cardDescription.appendChild(bodyDescription);

  // Création du nom de l'appareil
  let titleDescription = document.createElement("h5");
  titleDescription.className = "titleDescription";
  titleDescription.textContent = cameraDescription.name;
  bodyDescription.appendChild(titleDescription);

  // Création de la description
  let itemDescription = document.createElement("p");
  itemDescription.className = "itemDescription";
  itemDescription.textContent = cameraDescription.description;
  bodyDescription.appendChild(itemDescription);

  // Ajout du prix
  let itemPrice = document.createElement("p");
  itemPrice.textContent = cameraDescription.price / 100 + " €";
  bodyDescription.appendChild(itemPrice);

  // Choix des lentilles
  let select = document.createElement("select");
  bodyDescription.appendChild(select);
  let firstoption = document.createElement("option");
  firstoption.textContent = "Sélectionner une lentille";
  select.appendChild(firstoption);
  for (let i = 0; i < cameraDescription.lenses.length; i++) {
    let lenseoption = document.createElement("option");
    lenseoption.textContent = cameraDescription.lenses[i];
    lenseoption.setAttribute("value", cameraDescription.lenses);
    select.appendChild(lenseoption);
  }

  // Création du boutton ajout au panier
  let addToCart = document.createElement("button");
  addToCart.className = "button";
  addToCart.id = "addToCart";
  addToCart.textContent = "Ajouter au panier";
  bodyDescription.appendChild(addToCart);

  // Compteur panier
  let buttonAction = document.getElementById("addToCart");
  buttonAction.addEventListener("click", function (cartNumbers) {
    let productNumbers = localStorage.getItem("cartNumbers");
    let lenseSelect = document.querySelector("select");
    let lenseChoice = lenseSelect.selectedIndex;
    productNumbers = parseInt(productNumbers);
    if (lenseChoice == 0 ) {
      localStorage.setItem("cartNumbers", 0); // Rien ne s'ajoute au compteur panier
      document.querySelector("span").textContent = 0;
      alert("Veuillez sélectionner une lentille");
    } else {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector("span").textContent = productNumbers + 1;
      alert("Votre article a été ajouté au panier");
      // Ajout des produits dans le panier
      
      
    }
  });

  

  
});
