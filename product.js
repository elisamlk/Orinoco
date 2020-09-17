let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);
let url = "http://localhost:3000/api/cameras/" + id;
console.log(url);

ajaxGet(url, function (response) {
  let cameraDescription = JSON.parse(response);
  console.log(cameraDescription);

  // Récupération de l'élement main
  let productDescription = document.getElementById("productDescription");

  // Création des éléments
  let cardDescription = document.createElement("div");
  let imageDescription = document.createElement("img");
  let bodyDescription = document.createElement("div");
  let titleDescription = document.createElement("h5");
  let itemDescription = document.createElement("p");
  let itemPrice = document.createElement("p");
  let select = document.createElement("select");
  let option = document.createElement("option");
  let addToCart = document.createElement("button");
  console.log(typeof select);

  // Personnalisation des éléments
  cardDescription.className = "cardDescription";
  imageDescription.className = "imageDescription";
  bodyDescription.className = "bodyDescription";
  titleDescription.className = "titleDescription";
  titleDescription.textContent = cameraDescription.name;
  itemDescription.className = "itemDescription";
  itemDescription.textContent = cameraDescription.description;
  itemPrice.textContent = cameraDescription.price / 100 + " €";
  addToCart.className = "button";
  addToCart.id = "addToCart";
  addToCart.textContent = "Ajouter au panier";
  option.textContent = cameraDescription.lenses;

  // boucle pour le choix des lentilles

  // Ajout des éléments
  productDescription.appendChild(cardDescription);
  imageDescription.src = cameraDescription.imageUrl;
  cardDescription.appendChild(imageDescription);
  cardDescription.appendChild(bodyDescription);
  bodyDescription.appendChild(titleDescription);
  bodyDescription.appendChild(itemDescription);
  bodyDescription.appendChild(itemPrice);
  bodyDescription.appendChild(select);
  select.appendChild(option);
  console.log(productDescription);
  bodyDescription.appendChild(addToCart);

  
  // Ajout des produits dans le panier
  let buttonAction = document.getElementById("addToCart");
  buttonAction.addEventListener("click", function (cartNumbers) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
    } else {
      localStorage.setItem("cartNumbers", 1);
    }

    console.log(productNumbers);
  });
});
