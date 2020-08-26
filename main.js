// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  cameras.forEach(function (cameraList) {
    let cameraImage = document.createElement("img");
    cameraImage.src = cameraList.imageUrl;
    let cameraName = document.createElement("h5");
    cameraName.textContent = cameraList.name;
    let cameraPrice = document.createElement("p");
    cameraPrice.textContent = cameraList.price;
    let cameraDescription = document.createElement("p");
    cameraDescription.textContent = cameraList.description;
    productDisplay.appendChild(cameraImage);
    productDisplay.appendChild(cameraName);
    productDisplay.appendChild(cameraPrice);
    productDisplay.appendChild(cameraDescription);
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



