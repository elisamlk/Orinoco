ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  cameras.forEach(function (cameraList) {
    let card = document.createElement("div");
    card.className = "card";
    productDisplay.appendChild(card);
    console.log(card);
    let cameraImage = document.createElement("img");
    cameraImage.src = cameraList.imageUrl;
    card.appendChild(cameraImage);
    console.log(cameraImage);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);
    console.log(cardBody);
    let cameraName = document.createElement("h5");
    cameraName.textContent = cameraList.name;
    cardBody.appendChild(cameraName);
    console.log(cameraName);
    let cameraPrice = document.createElement("p");
    cameraPrice.textContent = cameraList.price/100 + "€";
    cardBody.appendChild(cameraPrice);
    console.log(cameraPrice);
    
    let cameraDescription = document.createElement("button");
    cameraDescription.textContent = "Fiche produit";
    cardBody.appendChild(cameraDescription);
  });
});

/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
