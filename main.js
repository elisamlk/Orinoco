ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);

  // Boucle pour récupérer la liste des caméras
  cameras.forEach(function (cameraList) {

    // Récupération de l'élément main
    let productDisplay = document.getElementById("productDisplay");

    // Création des éléments
    let card = document.createElement("div");
    let cameraImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cameraName = document.createElement("h5");
    let cameraPrice = document.createElement("p");
    let cameraDescription = document.createElement("a");

    // Personnalisation des éléments
    card.className = "card";
    cameraImage.src = cameraList.imageUrl;
    cardBody.className = "card-body";
    cameraName.textContent = cameraList.name;
    cameraPrice.textContent = cameraList.price / 100 + " €";
    cameraDescription.className = "button";
    cameraDescription.textContent = "Voir l'article";
    cameraDescription.href = "product.html?id=" + cameraList._id;

    // Ajout des éléments
    productDisplay.appendChild(card);
    card.appendChild(cameraImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cameraName);
    cardBody.appendChild(cameraPrice);
    cardBody.appendChild(cameraDescription);
  });
});

console.log(productDisplay);
