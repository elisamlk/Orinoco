ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  cameras.forEach(function (cameraList) {
    let card = document.createElement("div");
    card.className = "card";
    let cameraImage = document.createElement("img");
    cameraImage.src = cameraList.imageUrl;
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let cameraName = document.createElement("h5");
    cameraName.textContent = cameraList.name;
    let cameraPrice = document.createElement("p");
    cameraPrice.textContent = cameraList.price / 100 + "€";
    let cameraDescription = document.createElement("a");
    cameraDescription.className = "button";
    cameraDescription.textContent = "Voir l'article";
    cameraDescription.href = "product.html?id=" + cameraList._id;
    let productDisplay = document.getElementById("productDisplay");
    //console.log(productDisplay);
    productDisplay.appendChild(card);
    //console.log(card);
    cameraImage.src = cameraList.imageUrl;
    card.appendChild(cameraImage);
    //console.log(cameraImage);

    card.appendChild(cardBody);
    //console.log(cardBody);
    cameraName.textContent = cameraList.name;
    cardBody.appendChild(cameraName);
    //console.log(cameraName);
    cameraPrice.textContent = cameraList.price / 100 + "€";
    cardBody.appendChild(cameraPrice);

    cardBody.appendChild(cameraDescription);
  });
});

console.log(productDisplay);

