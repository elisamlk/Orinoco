let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);
let url = "http://localhost:3000/api/cameras/" + id;
console.log(url);

ajaxGet(url, function (response) {
  let cameraDescription = JSON.parse(response);
  console.log( cameraDescription);
  let productDescription = document.getElementById("productDescription");

  let cardDescription = document.createElement("div");
  cardDescription.className = "cardDescription";
  let imageDescription = document.createElement("img");
  imageDescription.className = "imageDescription";
  let bodyDescription = document.createElement("div");
  bodyDescription.className = "bodyDescription";
  let titleDescription = document.createElement("h5");
  titleDescription.className = "titleDescription";
  titleDescription.textContent = cameraDescription.name;
  let itemDescription = document.createElement("p");
  itemDescription.className = "itemDescription";
  itemDescription.textContent = cameraDescription.description;
  let itemPrice = document.createElement("p");
  itemPrice.textContent = cameraDescription.price / 100 + " €";
  let select = document.createElement("select");
  let option = document.createElement("option");
  option.textContent = cameraDescription.lenses;
  // boucle pour le choix des lentilles
  
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

  let addToCart = document.createElement("button");
  addToCart.className = "button";
  addToCart.id = "addToCart";
  addToCart.textContent = "Ajouter au panier";
  bodyDescription.appendChild(addToCart);

  /*let firstoption = document.createElement("option");
  firstoption.setAttribute("disabled", "disabled");
  firstoption.setAttribute("selected", "true");
  firstoption.setAttribute("value", 0);
  firstoption.textContent = "Sélectionner une couleur";
  option.appendChild(firstoption);

  //boucle pour récupérer les couleurs individuellement
  for (let i = 0; i < ourson.colors.length; i++) {
    let colorsOption = document.createElement("option");
    option.classList.add("choix");
    option.appendChild(colorsOption);
    colorsOption.setAttribute("value", 1);
    colorsOption.textContent = ourson.colors[i];
  }
  */

  let buttonAction = document.getElementById("addToCart");
  buttonAction.addEventListener("click", function (cartNumbers) {
    //localStorage.setItem
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      //document.getElementsByTagName("span").textContent = productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      //document.getElementsByTagName("span").textContent = 1;
    }

    console.log(productNumbers);

    //cart localStorage.getItem
  });
});

/*let cameraList = [ ];


document.getElementById('the-box').addEventListener('click', function () {
  cameraList.push('cameraDescription');
  console.log(cameraList);
});
*/
